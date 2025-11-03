---
title: Preporučene Postavke
description: Preporučene zadane postavke koje savjetujemo svima koji koriste Meshtastic
tags:
  - Početnici
  - Konfiguracija
  - Klijent
  - MQTT
---

## Napomena
Prije nastavka **ažurirajte firmware uređaja** pomoću [Web Flashera](https://flasher.meshtastic.org/).  
Najnovije stabilno izdanje — čak i ako je označeno kao *Beta* — obično je sigurna opcija.

# Opće Preporuke

- Zadržite **automatske beacon signale** (telemetrija i pozicija) na **6 sati ili više**, posebno za stacionarne čvorove.  
- Ako se krećete, omogućite **Smart Position** s minimum interval: **10 minuta**
  - Distance trigger: **100–130 metara**  

Time se smanjuje nepotreban promet u mreži.



# Preporučene Postavke za područje Hrvatske

*(Pročitaj sve preporuke prije primjene.)*

### LoRa Postavke

- **Region**: European union 868MHz  
- **Preset**: Long Range - Fast  
- **Number of hops**:za infrastrukturalni čvor 4 (zadano postavka je 3, do 5 je u redu)  
- **Number of hops**: za osobni/chat/mobilni čvor 6 (do 7 je u redu po želji)  
- **Ignore MQTT**: Uključeno
- **OK to MQTT**: Uključeno  
  
![Channels](channel_settings1.png){ width="300" }  
OK to MQTT je potreban da bi se vaše poruke prikazale na:  
   - map.cromesh.eu  
   - Drugim kartama i drugim alatima za vizualizaciju

Ovo pomaže zajednici pratiti tok poruka i otkriti probleme u mreži.



### Channels  
**0 – Primarni kanal**  
  
- **Naziv**: `LongFast`  
- **Ključ**: `AQ==`  
  
![Channels](channel_settings1.png){ width="300" }![Channels](channel_settings2.png){ width="300" }   
- Možete isključiti **poziciju i lokaciju** ako ne želite dijeliti svoju lokaciju.  
- Za precizno dijeljenje lokacije koristite bilo kojeg klijenta osim iOS-a.


  
### User  
Ovdje se unose postavke vezane za korisnika meshtastic uređaja   
  
- **Long Name**: Nešto opisno — npr. vaše ime, Discord nadimak ili radioamaterski pozivni znak.  
  Možete uključiti i e-mail ili web adresu.  
  *Savjet:* Dodajte “CroMesh.eu” u svoje ime da nas drugi lakše pronađu.  
- **Short Name**: Maksimalno 4 znaka — jedinstveno za taj uređaj.  
  To je ime koje se prikazuje u chatu. Možete koristiti i emojije.  
- **Unmessageable**: Uključeno(Samo za uređaje s u infrastruktura ili nitko ne gleda poruke na njima)  
- **Licencirani Operator**: Ne uključujte osim ako ste licencirani [radioamater](https://hr.wikipedia.org/wiki/Radioamaterizam) i ako ste pročitali [Licencirane Operacije](../licensed-operations.md).  
  *(Ako to omogućite, nećete moći komunicirati s korisnicima na zadanim kanalima.)*  
  
![Channels](user_settings.png){ width="300" }  


### Device
 
**Uloga Uređaja**  
  
- **Client Mute** — Najbolje za vozila ili situacije s više uređaja na istom mjestu.  
  Ne prenosi poruke drugih čvorova, ali i dalje šalje vlastite poruke.  
- **Client** — Preporučeno za kućne bazne stanice ili primarne uređaje.  
  Prenosi poruke koje primi.  
- **Router / Repeater** — ❌ **Nemoj koristiti** ovu ulogu osim ako točno znaš sve tehničke detalje.  
  Uloga **Client** već omogućuje prenošenje poruka koje primi.   
  Pogledaj [službenu dokumentaciju](https://meshtastic.org/blog/choosing-the-right-device-role/) za više informacija.  
  
**Node Info Brodcast Interval** — 6 sati.  
![Channels](user_settings.png){ width="300" }  



### MQTT
Ako želiš slati podatke na internet.
To možeš učiniti putem uređaja s Wi-Fi čipom ili preko MQTT proxy klijenta u mobilnoj aplikaciji.  
Ovo je među naprednijim postavkama. Ako ne znaš što je **"MQTT"**, ostavi ga isključenim. Nije potrebno uključiti MQTT za korištenje Meshtastica.  
  
- **Adress**: mqtt.cromesh.eu  
- **Username**: meshdev  
- **Password**: large4cats  
- **Encryption Enabled**: Uključeno  
- **JSON output enabled**: Isključeno  
- **TLS enabled**: Isključeno  
- **root topic**: msh/EU_868/9A  
Točno ovako – velika i mala slova su bitna.  
  
![Channels](mqtt_settings.png){ width="300" }  

 



