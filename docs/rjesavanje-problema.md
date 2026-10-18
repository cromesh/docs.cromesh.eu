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

<!-- TODO: potvrditi uzrok resetiranja i gubitka postavki na Heltec V3. -->

## Aplikacija se ne spaja na Heltec V3 preko Bluetootha

Prijavljeno: spajanje se prekida pri učitavanju nodova i na kraju piše "Could not
establish a stable connection". Rješenje nije potvrđeno.

<!-- TODO: dopuniti kad zajednica potvrdi uzrok i rješenje. -->

## Ažuriranje firmwarea ne uspijeva

OTA bootloader, WiFi OTA, web flasher za XIAO nRF52 i iskustva s betom 2.7.26 opisani su
na stranici [Firmware — poznati problemi pri ažuriranju](firmware/index.md#poznati-problemi-pri-azuriranju).

## MeshCore: kontakti su nestali iz aplikacije

Vidi [MeshCore — poznati problemi](meshcore/problemi.md).

## Test dometa (Range Test)

1. Jedan uređaj postavi na **send** (šalje svakih nekoliko sekundi).
2. Na drugom uređaju uključi **receive** modul. Ako ga ne možeš uključiti, paketi se ipak
   mogu pojaviti u zadanom kanalu kao `seq <broj>`.
3. Test na prvom uređaju mora biti uključen dovoljno dugo.

<!-- TODO: potvrditi ponašanje prijemne strane. -->

## Povezano

- [Česta pitanja](faq.md) — poruke i potvrde isporuke, karta i MQTT
- [MQTT i karta](mqtt/index.md) — kompletna checklista za prikaz na karti
- [Mapiranje i nadzor](mapiranje/index.md) — provjera čuje li te netko bez druge strane
