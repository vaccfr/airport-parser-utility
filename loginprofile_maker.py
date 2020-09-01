"""
PROFILE:LFPG_APP:200:5
ATIS2:De Gaulel Approach EN/FR
ATIS3:ATIS on 
ATIS4:Leave me some feedback! www.vatfrance.org/fb/VOTRE_CID_ICI
"""

import json

file = "airports.json"

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
  'DEL': 20,
  'GND': 20,
  'TWR': 50,
  'APP': 150,
  'DEP': 150,
  'CTR': 600,
  'FSS': 1500,
}

pos_types = {
  'DEL': 'Delivery',
  'GND': 'Sol / Ground',
  'TWR': 'Tour / Tower',
  'APP': 'Approche / Approach',
  'DEP': 'Depart / Departure',
  'CTR': 'Radar',
  'FSS': 'Radar',
}

def organiser():
  with open(file) as afile:
    airports = json.load(afile)
    afile.close()
  
  with open("logins.txt", "w") as final:
    final.write("PROFILE\n")
    for a in airports:
      positions = a['positions']
      for p in positions:
        pos_type = p['code'][-3:]
        if not len(a['atis']) > 0:
          atis_line = "Check the charts! ancien.vatfrance.org/pilotbrief"
        else:
          atis_line = f"ATIS on {a['atis']} | Check the charts! ancien.vatfrance.org/pilotbrief"
        data = f"""PROFILE:{p['code']}:{draw_distance[pos_type]}:{codes[pos_type]}
ATIS2:{a['city']} {a['airport']} {pos_types[pos_type]} - EN/FR
ATIS3:{atis_line}
ATIS4:Leave me some feedback! www.vatfrance.org/fb/VOTRE_CID_ICI"""
        final.write(f"{data}\n")
    final.close()

organiser()