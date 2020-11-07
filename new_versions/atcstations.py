import json

"""
[
  {
    "id":
    "icao":
    "positions: [
      {
        "code":
        "frequency":
        "callsign":
        "rank":
        "solo_rank":
      }
    ]
    "atis_frequency":
  }
]
"""

position_ranks = {
  "DEL": {
    "full": "S1",
    "solo": "S1",
  },
  "GND":  {
    "full": "S1",
    "solo": "S1",
  },
  "TWR":  {
    "full": "S2",
    "solo": "S1",
  },
  "APP":  {
    "full": "S3",
    "solo": "S2",
  },
  "DEP":  {
    "full": "S3",
    "solo": "S2",
  },
  "CTR":  {
    "full": "C1",
    "solo": "S3",
  },
  "FSS":  {
    "full": "C1",
    "solo": "C1",
  },
}

pfile = "VoiceChannels.txt"

def data_reader(datafile):
  with open(datafile) as pfile_dec:
    pfile_data = pfile_dec.readlines()
    pfile_dec.close()
  
  return pfile_data

def data_builder(datafile):
  output = []

  positions = data_reader(datafile)

  airports = []
  idx = 1
  for p in positions:
    airport = p.split(":")[1][:4]
    if not airport in airports:
      fir, city, airpname = find_airport_name(airport)
      final_data = {
        "id": idx,
        "icao": airport,
        "fir": fir,
        "city": city,
        "airport": airpname,
        "positions": find_positions(positions, airport),
        "atis_frequency": find_atis(positions, airport)
      }
      idx += 1
      output.append(final_data)
      airports.append(airport)
  return output

def find_atis(positions, icao):
  atis = ""
  for p in positions:
    if p.split(":")[1][-4:] == "ATIS" and p.split(":")[1][:4] == icao:
      atis = p.split(":")[2]
  return atis


def find_positions(positions, icao):
  all_positions = []
  for p in positions:
    pos_data = p.split(":")
    if "\n" in pos_data[4]:
      identifier = pos_data[4]
      identifier = identifier.replace("\n", "")
    else:
      identifier = pos_data[4]
    
    if not identifier[-4:] == "ATIS" and identifier[:4] == icao:
      callsign = pos_data[1].replace(f"{identifier} ", "")
      pos_data = {
        "code": identifier,
        "frequency": pos_data[2],
        "callsign": callsign,
        "rank":position_ranks[identifier[-3:]]['full'],
        "solo_rank":position_ranks[identifier[-3:]]['solo']
      }
      all_positions.append(pos_data)
  return all_positions

def find_airport_name(icao):
  with open("output.json", "r") as file:
    data = file.read()
    data = json.loads(data)
    file.close()
  for d in data:
    if d['icao'] == icao:
      return d['fir'], d['city'], d['airport']
  return "", "", ""

output = data_builder(pfile)
print(output)
with open("airports.json", "w") as file:
  output = json.dumps(output)
  print(output, file=file)
  file.close()