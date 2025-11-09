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

Meshtastic je open-source projekt koji omogućuje dalekosežnu, niskopotrošnu, mesh komunikaciju koristeći jeftin hardver. Primarno je osmišljen za aktivnosti na otvorenom, hitne situacije i druge scenarije u kojima tradicionalna komunikacijska infrastruktura nije dostupna.

## Glavne Komponente

### Hardver

- **LoRa moduli**: Meshtastic koristi LoRa (Long Range) module koji mogu prenositi podatke na udaljenosti od nekoliko kilometara uz minimalnu potrošnju energije. 
- **Mikrokontroleri**: LoRa moduli obično su integrirani s mikrokontrolerima koji obrađuju podatke i upravljaju komunikacijom.

### Firmver

[Meshtastic firmver](https://github.com/meshtastic/firmware) instalira se na LoRa uređaje i omogućuje rad i konfiguraciju uređaja. 

### Mobilne Aplikacije

- **Meshtastic aplikacija**: Dostupna za [Android](https://play.google.com/store/apps/details?id=com.geeksville.mesh&pcampaignid=web_share) i [iOS](https://apps.apple.com/in/app/meshtastic/id1586432531), omogućuje korisnicima konfiguraciju uređaja, slanje poruka i vizualizaciju mreže. Povezuje se s LoRa uređajima putem Bluetootha, WiFi ili serial komunikacije.  
- **Web sučelje**: Također postoji [web sučelje](https://client.meshtastic.org/messages/broadcast/0) koje nudi slične funkcionalnosti putem internetskog preglednika.

## Kako Meshtastic Funkcionira

### Formiranje Mreže

- **Postavljanje čvorova**: Svaki LoRa modul djeluje kao čvor u mreži. Kada se uključi, automatski komunicira s obližnjim čvorovima i time formira mesh.  
- **Samoobnavljanje i skalabilnost**: Mreža se može automatski reorganizirati ako neki čvor prestane raditi, čineći sustav otpornim i proširivim s velikim brojem čvorova.

### Komunikacija

- **Usmjeravanje poruka**: Kada se poruka pošalje s jednog čvora, ona se prenosi kroz mrežu dok ne dosegne svoje odredište ovisno o hop postavci. 
- **Enkripcija**: Poruke su šifrirane radi zaštite privatnosti i sigurnosti unutar mreže.

### Domet i Energetska Učinkovitost

- **Veliki domet**: LoRa tehnologija omogućuje komunikaciju na udaljenostima od nekoliko kilometara, ovisno o okruženju i konfiguraciji antene i uređaja.  
- **Niska potrošnja energije**: Meshtastic je dizajniran za rad s malom potrošnjom, što ga čini pogodnim za uređaje na baterije i dugotrajne primjene.

## Primjene

### Avanture na otvorenom

Planinari i zaljubljenici u prirodu mogu koristiti Meshtastic za ostanak u kontaktu u područjima bez mobilne pokrivenosti.

### Hitne situacije

Meshtastic može biti od ključne važnosti u katastrofama kada je tradicionalna komunikacijska infrastruktura oštećena ili nedostupna.

### Zajedničke mreže

Lokalne zajednice mogu postaviti vlastite mreže za događanja, festivale ili potrebe lokalne komunikacije.

## Kako Početi

### Postavljanje Hardvera

Kupite [kompatibilan](https://meshtastic.org/docs/hardware/devices/) LoRa uređaj i [instalirajte Meshtastic firmver](https://flasher.meshtastic.org/) prema službenim uputama.

### Konfiguracija

Koristite Meshtastic mobilnu aplikaciju ili web sučelje za konfiguraciju čvorova, postavljanje enkripcijskih ključeva i upravljanje mrežnim postavkama.

### Postavljanje u Rad

Postavite čvorove na željeno područje i započnite komunikaciju putem mreže.