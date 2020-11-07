import json

"""
[
  {
    "id":
    "icao":
    "fir":
    "city":
    "airport":
    "positions: [
      {
        "code":
        "frequency":
        "rank":
        "solo_rank":
      }
    ]
    "atis_frequency":
  }
]
"""

pfile = "plateforme.json"
pstrfile = "plateforme_structure.json"
pordfile = "plateforme_structure_ordre.json"

def data_organiser():
  with open(pfile) as pfile_dec:
    pfile_raw = pfile_dec.readline()
    pfile_data = pfile_raw.split(", ")
    pfile_dec.close()
  
  with open(pstrfile) as pstrfile_dec:
    pstrfile_raw = pstrfile_dec.readline()
    pstrfile_data = pstrfile_raw.split(", ")
    pstrfile_dec.close()
  
  with open(pordfile) as pordfile_dec:
    pordfile_raw = pordfile_dec.readline()
    pordfile_data = pordfile_raw.split(", ")
    pordfile_dec.close()
  

  return pfile_data, pstrfile_data, pordfile_data

def data_builder():
  output = []

  airports, positions, info = data_organiser()

  for a in airports:
    a_line = json.loads(a)
    airport_id = a_line["id"]
    atis_frequency = ""
    atc_positions = []
    pos_type = ""
    pos_rank = ""
    pos_solo_rank = ""
    for i in positions:
      p_line = json.loads(i)
      if "_ATIS" in p_line["code_structure"]:
        try:
          if p_line["id_plateforme"] == a_line["id"]:
            atis_frequency = p_line["frequence"]
        except Exception as e:
          # print(e)
          pass
      
      else:
        try:
          if p_line["id_plateforme"] == a_line["id"] and not "_ATIS" in p_line["code_structure"]:
            for i in info:
              i_line = json.loads(i)
              if p_line["code_structure"] == i_line["code_structure"]:
                pos_type = i_line["structure"]
                pos_rank = i_line["rating"]
                pos_solo_rank = i_line["solo_training_rating"]
            pos_data = {
              "code":f"{a_line['code_icao']}{p_line['code_structure']}",
              "frequency":p_line["frequence"],
              "type":pos_type,
              "rank":pos_rank,
              "solo_rank":pos_solo_rank
            }
            atc_positions.append(pos_data)
        except Exception as e:
          # print(e)
          pass
    
    data = {
      "id":a_line["id"],
      "icao":a_line["code_icao"],
      "fir":a_line["fir"],
      "city":a_line["nom_ville"],
      "airport":a_line["nom_aeroport"],
      "atis":atis_frequency,
      "positions":atc_positions
    }
    output.append(data)
    # if a_line["code_icao"] == "LFMN":
    #   return data
  return output

  # for d in data:
  #   line = json.loads(d)
  #   print(line)
  #   airports

output = data_builder()
print(output)
with open("output.json", "w") as file:
  print(output, file=file)
  file.close()