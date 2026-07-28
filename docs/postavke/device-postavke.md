---
title: Device Postavke
description: Odabir uloge uređaja (Client, Client Mute, Router) i interval slanja node infa.
---

# Device
 
**Uloga Uređaja**  
  
- **Client Mute** — Najbolje za vozila ili situacije s više uređaja na istom mjestu.  
  Ne prenosi poruke drugih nodeova, ali i dalje šalje vlastite poruke.  
- **Client** — Preporučeno za kućne bazne stanice ili primarne uređaje.  
  Prenosi poruke koje primi.  
- **Client Base** — ❌ **Ne koristi se** — protokol na kojem se temeljila ova uloga je zastario.  
- **Router / Repeater** — ❌ **Nemoj koristiti** ovu ulogu osim ako točno znaš sve tehničke detalje.  
  Uloga **Client** već omogućuje prenošenje poruka koje primi.   
  Pogledaj [službenu dokumentaciju](https://meshtastic.org/blog/choosing-the-right-device-role/) za više informacija.  
  
**Node Info Brodcast Interval** — 6 sati.  
![device](images/device_settings.png){ width="300" }  