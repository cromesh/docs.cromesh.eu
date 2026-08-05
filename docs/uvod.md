---
title: Osnove Meshtastica
description: Detaljniji pregled Meshtastica 
tags:
  - Osnove
  - Kako funkcionira
  - Početnici
hide:
  - navigation
---
# <font color="#50EB97">Uvod u Meshtastic</font>

Meshtastic je open-source projekt koji omogućuje dalekosežnu, niskopotrošnu, mesh komunikaciju koristeći jeftin hardware. Primarno je osmišljen za aktivnosti na otvorenom, hitne situacije i druge scenarije u kojima tradicionalna komunikacijska infrastruktura nije dostupna.

## Glavne komponente

### Hardware

- **LoRa moduli**: Meshtastic koristi LoRa (Long Range) module koji mogu prenositi podatke na udaljenosti od nekoliko kilometara uz minimalnu potrošnju energije. 
- **Mikrokontroleri**: LoRa moduli obično su integrirani s mikrokontrolerima koji obrađuju podatke te upravljaju komunikacijom.

### Firmware

[Meshtastic firmware](https://github.com/meshtastic/firmware) instalira se na LoRa uređaje i omogućuje rad i konfiguraciju uređaja. 

### Mobilne aplikacije

- **Meshtastic aplikacija**: Dostupna za [Android](https://play.google.com/store/apps/details?id=com.geeksville.mesh&pcampaignid=web_share) i [iOS](https://apps.apple.com/in/app/meshtastic/id1586432531), omogućuje korisnicima konfiguraciju uređaja, slanje poruka i vizualizaciju mreže. Povezuje se s LoRa uređajima putem Bluetootha, WiFi ili serial komunikacije.  
- **Web sučelje**: Također postoji [web sučelje](https://client.meshtastic.org/messages/broadcast/0) koje nudi slične funkcionalnosti putem internetskog preglednika.

## Kako Meshtastic funkcionira

### Formiranje mreže

- **Postavljanje node-ova**: Svaki LoRa modul djeluje kao node u mreži. Kada se uključi, automatski komunicira s obližnjim node-ovima i time formira mesh.  
- **Samoobnavljanje i skalabilnost**: Mreža se može automatski reorganizirati ako neki node prestane raditi, čineći sustav otpornim i proširivim s velikim brojem node-ova.

### Komunikacija

- **Usmjeravanje poruka**: Kada se poruka pošalje s jednog node-a, ona se prenosi kroz mrežu dok ne dosegne svoje odredište ovisno o hop postavci. 
- **Enkripcija**: Poruke su šifrirane radi zaštite privatnosti i sigurnosti unutar mreže.

### Domet i energetska učinkovitost

- **Veliki domet**: LoRa tehnologija omogućuje komunikaciju na udaljenostima od nekoliko kilometara, ovisno o okruženju i konfiguraciji antene i uređaja.  
- **Niska potrošnja energije**: Meshtastic je dizajniran za rad s malom potrošnjom, što ga čini pogodnim za uređaje na baterije i dugotrajne primjene.

## Primjene

### Avanture na otvorenom

Planinari i zaljubljenici u prirodu mogu koristiti Meshtastic za ostanak u kontaktu u područjima bez mobilne pokrivenosti.

### Hitne situacije

Meshtastic može biti od ključne važnosti u slučajevima katastrofa ili nepogoda kada je tradicionalna komunikacijska infrastruktura oštećena ili nedostupna.

### Zajedničke mreže

Lokalne zajednice mogu postaviti vlastite mreže za događanja, festivale ili potrebe lokalne komunikacije.

## Kako početi

### Postavljanje hardware-a

Kupite [kompatibilan](https://meshtastic.org/docs/hardware/devices/) LoRa uređaj i [instalirajte Meshtastic firmware](https://flasher.meshtastic.org/) prema službenim uputama.

### Konfiguracija

Koristite Meshtastic mobilnu aplikaciju ili web sučelje za konfiguraciju node-ova, postavljanje enkripcijskih ključeva i upravljanje mrežnim postavkama.

### Postavljanje u rad

Postavite node-ove na željeno područje i započnite komunikaciju putem mreže.