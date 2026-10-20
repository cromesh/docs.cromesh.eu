---
title: Rješavanje problema
description: Dijagnostika i česti problemi u CroMesh mreži — što ne vidiš na karti, druga strana te ne čuje, resetiranje Heltec V3, Bluetooth veza, ažuriranje firmwarea i test dometa.
tags:
  - Rješavanje problema
  - Početnici
---

# Rješavanje problema

Prve provjere nalaze se u FAQ odjeljku [„Ne radi mi”](faq.md#ne-radi-mi). Ovdje su
detaljniji slučajevi koje je zajednica već susrela.

## Vidim samo svoj node na karti u aplikaciji

Moguće da nema nikoga u dometu. Uobičajeni uzroci: loša lokacija (zgrade, kotline) i
prenisko postavljena antena. Isprobaj na otvorenom ili na većoj visini.

## Node radi, ali me druga strana ne čuje

Provjeri:

1. Regija `EU_868` i preset `LongFast`.
2. Radi li poruka na zajedničkom kanalu ili se šalje na privatni.
3. Za prikaz na karti: `OK to MQTT`, `Uplink` na LongFast kanalu, spoj na internet
   (mobitel ili WiFi) i ispravan root topic.

Ako se čuju samo dva tvoja noda međusobno, postavke najčešće nisu usklađene s ostalima.
Zajednica navodi da su nodovi odmah proradili nakon što su postavke prilagođene prema
dokumentaciji.

## Node se resetira, ne odgovara ili gubi postavke

- Heltec V3: prijavljeni su restart i gubitak postavki nakon dužeg nekorištenja ili
  pražnjenja baterije.
- Nakon preduboke ispražnjenosti baterije mogu se promijeniti kratko i dugo ime noda.
- Heltec V3 može ući u stanje u kojem ne prima poruke, a aplikacija se normalno spaja.

Što je poznato iz rasprava na [Meshtastic forumu](https://meshtastic.discourse.group/t/heltec-v3-random-factory-resets/13769):

- Nasumični reset na tvorničke postavke (gubitak popisa node-ova i konfiguracije) najčešće
  se javlja na baterijskim i solarnim node-ovima nakon što se baterija isprazni. Sumnja se
  na pad napona (brownout) i oštećenje flash memorije (LittleFS), a ne na sat ili timer.
- Prijavljeno na firmwareu od 2.3.4 do 2.5; potvrđeno rješenje ne postoji. Neki su se
  vratili na 2.3.9 ili 2.3.15 i resetiranja su prestala, ali to nije provjerena popravka.
- Preporuke iz rasprave: zaštićena baterija i izbjegavanje potpunog pražnjenja. Prema
  jednom izvještaju, s uključenim dubokim snom i niskom baterijom node može ostati u dubokom
  snu i oporavlja se tek vanjskim resetom; spominje se i kalibracija ADC multiplikatora
  baterije, bez koje granica niskog napona ne radi ispravno
  ([forum](https://meshtastic.discourse.group/t/flash-corruption-power-management-on-heltec-v3/12673)).

## Aplikacija se ne spaja na Heltec V3 preko Bluetootha

Prijavljeno: spajanje se prekida pri učitavanju nodova i na kraju piše "Could not
establish a stable connection". Službeno rješenje ne postoji; iz
[foruma](https://meshtastic.discourse.group/t/bluetooth-going-to-sleep-and-not-reconnecting/14612)
i [GitHub prijave](https://github.com/meshtastic/firmware/issues/2793) poznato je:

- U aplikaciji postavi vezu na „None (disabled)”, pa ponovno odaberi node. Veza se vrati,
  no kod jednog korisnika opet pada nakon nekoliko minuta.
- Zaboravi uređaj u sistemskim Bluetooth postavkama i ponovno ga upari (vidi
  [Aplikacije](aplikacije/index.md#android)).
- Na ESP32 uređajima uz uključen WiFi Bluetooth može biti neaktivan (prijavljeno na
  firmwareu 2.7.15).
- Jedan korisnik prijavio je da je zamjena zavijene Bluetooth antene ravnom žicom duljine
  2,9 cm znatno povećala domet (neprovjereno).

## Ažuriranje firmwarea ne uspijeva

OTA bootloader, WiFi OTA, web flasher za XIAO nRF52 i iskustva s betom 2.7.26 opisani su
na stranici [Firmware — poznati problemi pri ažuriranju](firmware/index.md#poznati-problemi-pri-azuriranju).

## MeshCore: kontakti su nestali iz aplikacije

Vidi [MeshCore — poznati problemi](meshcore/postavke.md#poznati-problemi).

## Test dometa (Range Test)

1. Jedan uređaj postavi na **send** (šalje svakih nekoliko sekundi).
2. Na drugom uređaju uključi **receive** modul. Ako ga ne možeš uključiti, paketi se ipak
   mogu pojaviti u zadanom kanalu kao `seq <broj>`.
3. Test na prvom uređaju mora biti uključen dovoljno dugo.

## Povezano

- [Česta pitanja](faq.md) — poruke i potvrde isporuke, karta i MQTT
- [MQTT i karta](mqtt/index.md) — kompletna checklista za prikaz na karti
- [Mapiranje i nadzor](mapiranje/index.md) — provjera čuje li te netko bez druge strane
