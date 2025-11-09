---
title: Lora Postavke
---

# LoRa Postavke

- **Region**: European union 868MHz  
- **Preset**: Long Range - Fast  
- **Number of hops**:za infrastrukturalni čvor 4 (zadano postavka je 3, do 5 je u redu)  
- **Number of hops**: za osobni/chat/mobilni čvor 6 (do 7 je u redu po želji)  
- **Ignore MQTT**: Uključeno
- **OK to MQTT**: Uključeno  
  
![Channels](images/lora_settings.png){ width="300" }  
OK to MQTT je potreban da bi se vaše poruke prikazale na:  
   - map.cromesh.eu  
   - Drugim kartama i drugim alatima za vizualizaciju

Ovo pomaže zajednici pratiti tok poruka i otkriti probleme u mreži. Kada je OK to MQTT upaljen drugi uređaji koji su spojeni na MQTT server će relejati telemetriju i poruke s tvog uređaja ostatku mesha.