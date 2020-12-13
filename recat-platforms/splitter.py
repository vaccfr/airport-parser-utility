import json

fir_list = [
  {
    "initial": ["F", "P", "A", "O", "Q", "Y"],
    "code": "LFFF",
    "name": "Paris"
  },
  {
    "initial": ["E", "S", "G", "J"],
    "code": "LFEE",
    "name": "Reims"
  },
  {
    "initial": ["R"],
    "code": "LFRR",
    "name": "Brest"
  },
  {
    "initial": ["B", "C"],
    "code": "LFBB",
    "name": "Bordeaux"
  },
  {
    "initial": ["K", "M", "L", "T"],
    "code": "LFMM",
    "name": "Marseille"
  },
]

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

with open("voice_channels.txt", "r") as login_profile_file:
  positions = login_profile_file.readlines()
  login_profile_file.close()

with open("airports_json.json", "r") as airports_json_file:
  airports_info = airports_json_file.read()
  airports_data = json.loads(airports_info)
  airports_json_file.close()

positions_filtered_list = []
for l in positions:
  data = l.split(":")
  if "\n" in data[4]:
    identifier = data[4]
    identifier = identifier.replace("\n", "")
  else:
    identifier = data[4]
  
  position_name = data[1].replace(f"{identifier} ", "")
  frequency = data[2]
  position_full_rank = ""
  position_solo_rank = ""
  if identifier[-4:] == "ATIS":
    position_type = identifier[-4:]
  else:
    position_type = identifier[-3:]
    position_solo_rank = position_ranks[identifier[-3:]]['solo']
    position_full_rank = position_ranks[identifier[-3:]]['full']
  
  positions_filtered_list.append({
    "icao": identifier[:4],
    "position_code": identifier,
    "position_type": position_type,
    "callsign": position_name,
    "frequency": frequency,
    "full_rank": position_full_rank,
    "solo_rank": position_solo_rank
  })


pre_filter_final = []
filtered_ctr = []
for a in airports_data:
  related_positions = []
  atis_freq = ""
  for p in positions_filtered_list:
    if p['icao'] == a and not p['position_type'] == "ATIS":
      related_positions.append(p)
    elif p['position_type'] == "ATIS":
      atis_freq = p['frequency']
    elif p['position_type'] == "CTR" or p['position_type'] == "FSS":
      if not p in filtered_ctr:
        filtered_ctr.append(p)
  
  if len(related_positions) > 0:
    pre_filter_final.append({
      "icao": a,
      "name": airports_data[a]['name'],
      "city": airports_data[a]['city'],
      "state": airports_data[a]['state'],
      "lat": airports_data[a]['lat'],
      "lon": airports_data[a]['lon'],
      "atis": atis_freq,
      "positions": related_positions
    })

not_selected = []
selected = []
final = []
for p in pre_filter_final:
  not_selected.append(p)
for f in fir_list:
  per_fir = []
  for p in pre_filter_final:
    if p['icao'][2:3] in f['initial']:
      per_fir.append(p)
      if p in not_selected:
        not_selected.remove(p)
  
  per_ctr = []
  for c in filtered_ctr:
    if c['icao'][2:3] in f['initial']:
      per_ctr.append(c)

  final.append({
    "code": f['code'],
    "name": f['name'],
    "airports": per_fir,
    "centres": per_ctr
  })

with open("final_data.json", "w") as file:
  output = json.dumps(final)
  print(output, file=file)
  file.close()
print(len(not_selected))

# with open("leftovers.json", "w") as file:
#   output = json.dumps(pre_filter_final)
#   print(output, file=file)
#   file.close()