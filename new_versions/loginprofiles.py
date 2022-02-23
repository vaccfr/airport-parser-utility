import json

codes = {
  'DEL': 2,
  'GND': 3,
  'TWR': 4,
  'APP': 5,
  'DEP': 5,
  'CTR': 6,
  'FSS': 1,
}

draw_distance = {
  'DEL': 10,
  'GND': 10,
  'TWR': 30,
  'APP': 120,
  'DEP': 120,
  'CTR': 300,
  'FSS': 1500,
}

def organiser():
  final_stuff = []
  with open("VoiceChannels.txt", "r", encoding='utf8', errors='replace') as file:
    positions = file.readlines()
    file.close()
  
  with open("logins.txt", "w") as final:
    final.write("PROFILE\n")
  
    for l in positions:
      data = l.split(":")
      if "\n" in data[4]:
        identifier = data[4]
        identifier = identifier.replace("\n", "")
      else:
        identifier = data[4]
      
      if identifier[-3:] == "CTR" or identifier[-3:] == "FSS":
        atis_line = "Check the charts! www.chartfox.org"
      else:
        atis_line = f"Check the charts! chartfox.org/{identifier[:4]}"

      if not identifier[-4:] == "ATIS":
        data = f"""PROFILE:{identifier}:{draw_distance[identifier[-3:]]}:{codes[identifier[-3:]]}
ATIS2:{data[1].replace(f'{identifier} ', '')} - EN/FR
ATIS3:{atis_line}
ATIS4:Leave me some feedback! vatsim.fr/fb/VOTRE_CID_ICI"""
        final.write(f"{data}\n")
  
  final.close()



organiser()