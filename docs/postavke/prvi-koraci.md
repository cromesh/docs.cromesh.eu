---
title: Prvi koraci
description: Postavljanje novog Meshtastic uređaja za CroMesh mrežu — flashanje firmwarea, instalacija aplikacije i osnovna konfiguracija korak po korak.
---

# Prvi koraci s novim uređajem

## 1. Flashanje firmwarea

1. Otvori **[flasher.meshtastic.org](https://flasher.meshtastic.org)** u Chromeu ili
   Edgeu (WebSerial ne radi u Firefoxu/Safariju).
2. Spoji uređaj **USB kabelom** (provjeri da kabel prenosi podatke, ne samo punjenje).
3. Odaberi model uređaja i **stabilnu (beta)** verziju firmwarea, zatim flashaj.

> **Upozorenje:** Nadogradnju firmwarea radi **preko USB-a, ne preko Bluetootha** — BT
> update se u praksi pokazao nepouzdanim i nijedan proizvođač ga ne preporučuje.

Iznimke potvrđene u zajednici:

| Uređaj | Napomena o firmwareu |
|---|---|
| Heltec V4 | Pojačalo (PA) ne radi ispravno na verzijama starijim od **2.7.12** — koristi 2.7.13+; za popravak osjetljivosti prijema (LNA fix) postoji novija alpha. Vidi [Uređaji](../odabir-uredaja/index.md) |
| Seeed Wio Tracker L1 | GPS bug u beta grani — ispravljen u novijoj alphi |
| Heltec V4 (flasher) | Za revizije koje nisu na službenom flasheru, firmware se preuzima s Heltecove stranice |

## 2. Aplikacija

- **Android:** Meshtastic s Google Play-a. Build s F-Droida pokazao se problematičnim u
  praksi — izbjegavaj ga za početak.
- **iOS:** Meshtastic s App Storea. Napomena: raspored MQTT opcija razlikuje se od
  Androida (vidi [MQTT i karta](../mqtt/index.md)).

Poveži se s uređajem Bluetoothom. Uređaji bez Bluetootha (npr. Raspberry Pi Pico
varijante) povezuju se preko WiFi-ja.

## 3. Osnovna konfiguracija

Redoslijedom:

1. **LoRa → Region: `EU_868`** — obavezno; bez regije uređaj ne odašilje.
2. **Modem preset: `LongFast`** — ostavi zadano (standard mreže, vidi
   [Standardi](../mreza/standardi.md)).
3. **User → Long name / Short name** — vidi
   [preporuke imenovanja](../mreza/uloge-i-imenovanje.md).
4. **Device → Role:** `CLIENT` (mobilni uređaj uz postojeći kućni node: `CLIENT_MUTE`).
5. **Position:** uređaj s GPS-om — ostavi; fiksni node bez GPS-a — postavi
   *Fixed position* ručno. Interval slanja lokacije ~2 h, node info ~3 h.
6. **Dodaj kanal `cromesh.eu`** — poveznica i upozorenje ("Add", nikako "Replace") na
   stranici [Kanali](../mreza/kanali.md).
7. *(Opcionalno)* **MQTT** za pojavu na karti — [MQTT i karta](../mqtt/index.md).

## 4. Provjera rada

1. Pošalji testnu poruku na kanal `LongFast`.
2. Ako je bilo koji CroMesh gateway u dometu, poruka će se pojaviti na
   [map.cromesh.eu/chat](https://map.cromesh.eu/chat) — to je najbrža potvrda da
   odašiljanje radi.
3. Pozdravi se u Telegram grupi i javi lokaciju (okvirno) — netko iz zajednice će
   potvrditi čuje li te.

> **Napomena:** Ako nitko ne odgovara, najvjerojatnije **nisi u dometu** postojeće
> mreže — to je trenutno glavni izazov CroMesha, ne greška u tvojim postavkama. Provjeri
> na [karti](https://map.cromesh.eu) gdje su najbliži nodeovi. Domet presudno ovisi o
> visini antene i liniji optičke vidljivosti; sa stock antenom u urbanoj sredini
> realno je 1–2 km.

## 5. Savjeti za bateriju (mobilni uređaji)

- Uključi **power save**, isključi GPS, Bluetooth i WiFi kada ih ne trebaš —
  iskustveno, uređaj s 2× 18650 tako gubi ~10 % dnevno.
- Za solarne/krovne nodeove: isključi WiFi i BT u potpunosti i upravljaj nodeom preko
  **Remote Admin** funkcije (PKI autorizacija udaljenog nodea) — sporije je, ali štedi
  struju i radi kroz mesh. Poseban admin kanal više nije potreban na novijim verzijama
  firmwarea.
