---
title: Odabir pravog uređaja za Meshtastic
description: Vodič kroz najčešće mikrokontrolere i uređaje koji se koriste s Meshtasticom, uz usporedbu konkretnih modela korištenih u CroMesh zajednici.
tags:
  - Hardver
  - Uređaji
  - Početnici
---

# <font color="#50EB97">Odabir Pravog Uređaja</font>

Odabir pravog uređaja za Meshtastic ključan je korak za svakog početnika.  
Iako na prvu svi uređaji djeluju slično, razlikuju se po **srcu svoje elektronike — mikrokontroleru (MCU)**.

## Prvo pravilo: nRF52 ili ESP32?

Najvažnija odluka pri kupnji nije brand nego **čip**:

| Čip | Prednosti | Nedostaci | Kada ga uzeti |
|---|---|---|---|
| **nRF52840** | Vrlo mala potrošnja (dani/tjedni na bateriji), stabilniji rad | Nema WiFi | **Preporuka zajednice** za mobilne i solarne nodeove |
| **ESP32 / ESP32-S3** | Ima WiFi (potreban za MQTT gateway bez mobitela), jeftiniji | Znatno veća potrošnja, deep sleep zna raditi probleme | Fiksni node na stalnom napajanju, MQTT gateway |

> **Napomena:** Službena preporuka zajednice za početnike: **nRF52 uređaj** (npr. Seeed
> Wio nRF, ~23 € + antena) ako ti WiFi nije nužan — "puno štedljivije i stabilnije
> rješenje".

Za dublji pregled prednosti i mana pojedinog čipa vidi [ESP32](esp32.md),
[nRF52](nrf52.md), [RP2040](rp2040.md) i [Zaključak](zakljucak.md).

## Uređaji korišteni u zajednici

### Stacionarni / univerzalni

| Uređaj | Čip | Komentar zajednice |
|---|---|---|
| **Heltec V3** | ESP32-S3 | Najjeftiniji ulaz u Meshtastic; provjeren, masovno korišten u mreži. Sa stock antenom 1–2 km kroz urbanu sredinu. Dijeli konfiguraciju s TLora T3-S3 |
| **Heltec V4** | ESP32-S3 | Do 27–28 dBm TX (≈ 4× više od V3), ali **vidi upozorenje ispod** |
| **RAK4631 WisBlock** | nRF52840 | Modularni sustav (senzori, GNSS, Ethernet...); base ploča ima **ugrađen solarni ulaz**; 40–45 h rada na staroj 18650 s GNSS + BME280. Preporuka za ozbiljne solarne routere |
| **Seeed SX1262 + XIAO ESP32S3** | ESP32-S3 | Povoljan kit; nema bateriju (napajanje powerbank/USB) |
| **Seeed XIAO nRF52 + SX1262 kit** | nRF52840 | Štedljiva varijanta; nema ugrađen solarni ulaz — solar ide preko vanjskog MPPT-a i BMS-a |
| **Heltec T114 / Mesh Node T114** | nRF52840 | Štedljiv, službeno podržan |
| **Heltec MeshPocket** | nRF52840 | Kompaktna gotova varijanta |
| **Station G2** | — | ⚠️ Zabilježeni isti problemi "gluhoće" prijema kao Heltec V4 s vanjskim antenama |

### Mobilni / džepni

| Uređaj | Čip | Komentar zajednice |
|---|---|---|
| **LILYGO T-Echo / T-Echo Plus** | nRF52840 | E-ink, odličan battery life; Plus verzija: veća baterija, bolja antena, bolji standby. Popularan mobilni uređaj u zajednici |
| **Seeed T1000-E (card tracker)** | nRF52840 | Dokazan i kao GPS tracker za kućne ljubimce (custom 3D print nosač) |
| **Seeed Wio Tracker L1 / L1 Pro** | nRF52840 | GPS tracker; ⚠️ GPS bug u beta firmwareu (ispravljen u alphi) |
| **Elecrow ThinkNode M1** | nRF52840 | GPS + e-paper; mala potrošnja, izdržljiv, prihvatljiva cijena — preporučen kao mobilni node |
| **LILYGO T-Deck Plus** | ESP32-S3 | Samostalan uređaj s tipkovnicom i ekranom (ne treba mobitel); dostupan i iz EU (DE) skladišta |
| **SenseCAP Solar Node P1-Pro** | — | Gotov solarni node; potvrđeno besprijekorno radi u mreži |

> **Upozorenje — Heltec V4:** Revizija ploče **4.2** ima ozbiljan hardverski problem sa
> šumom (noise floor ~ −83 dB) — pojačava signal, ali i šum, pa je s većim vanjskim
> antenama (40 cm+) praktički gluh; s malim antenama do 20 cm radi korektno. Revizija
> **4.3** problem rješava (noise floor ~ −110 dB). Dodatno: pojačalo (PA) ne radi
> ispravno na firmwareu starijem od **2.7.12** (koristi 2.7.13+), a za prijem postoji
> LNA fix u novijoj alphi. Kod kupnje provjeri reviziju ploče; kvaliteta kontrole
> proizvodnje Helteca je po iskustvima članova promjenjiva.

## Gdje kupiti

- Službene stranice proizvođača (Heltec, LILYGO, Elecrow, Seeed, RAK) — uredno
  dostavljaju u Hrvatsku; LILYGO ima i EU (njemačko) skladište.
- AliExpress — često znatno povoljnije (npr. Heltec V4 + kućište + 3000 mAh baterija +
  whip antena ≈ 52 €); [diykits.eu](https://www.diykits.eu) za gotove kitove.
- **Tržnica Novo/Rabljeno** topic u Telegram grupi — članovi redovito prodaju/poklanjaju
  opremu (npr. rabljeni T-Echo ~25 €, Meshnology N37 s Wio Tracker L1 ~30 €).

> **Napomena:** Prije kupnje "jeftinog čuda" s AliExpressa pitaj u grupi — velika je
> vjerojatnost da je netko taj točno model već testirao.
