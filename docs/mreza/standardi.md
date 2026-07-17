---
title: Standardi CroMesh mreže
description: Dogovoreni standardi hrvatske Meshtastic mreže — regija, modem preset, kanali, MQTT topic i uloge nodeova. Izvor istine za konfiguraciju.
---

# Standardi CroMesh mreže (baza odluka)

Ova stranica je **izvor istine** za dogovorene postavke CroMesh mreže. Ako tvoja
konfiguracija odstupa od tablice ispod, nećeš (pouzdano) komunicirati s ostatkom mreže.

## Sažetak dogovorenih postavki

| Parametar | Vrijednost | Napomena |
|---|---|---|
| Regija (LoRa Region) | `EU_868` | Frekvencija primarnog kanala: 869,525 MHz |
| Modem preset | `LongFast` | Zadana (default) postavka firmwarea |
| Primarni kanal | `LongFast` (javni, zadani ključ) | Glavni kanal za komunikaciju cijele mreže |
| Sekundarni kanal | `cromesh.eu` | Kanal zajednice — vidi [Kanali](kanali.md) |
| MQTT server | `mqtt.cromesh.eu` | Alternativa: `mqtt.meshtastic.org` (oba rade za kartu) |
| MQTT root topic | `msh/EU_868/9A` | `9A` je ITU prefiks Hrvatske |
| Hop limit | 3 (zadano) | Ne povećavati bez potrebe — vidi napomenu ispod |
| Uloga mobilnih uređaja | `CLIENT_MUTE` | Preporuka ako imaš više uređaja |
| Interval slanja lokacije | ~2 h | Preporuka za smanjenje opterećenja kanala |
| Interval slanja node info | ~3 h | Preporuka za smanjenje opterećenja kanala |

> **Upozorenje:** Ne povećavaj hop limit iznad zadane vrijednosti 3 bez jasnog razloga.
> Preveliki broj hopova (5–7) zabilježen je u mreži i nepotrebno opterećuje kanal
> ponavljanjem paketa (pozicije, telemetrija, traceroute), što smanjuje prolaznost
> korisnih poruka za sve.

## Odluka: ostajemo na LongFast

Zajednica je **21. 3. 2026. u 00:01** provela dogovoreni test prelaska na `MEDIUM_FAST`
preset (veća propusnost, teoretski stabilniji kanal u gustim mrežama, ali ~30 % manji domet).

**Rezultat: test nije izdržao ni 24 sata.** Mreža je u Hrvatskoj još uvijek prerijetka —
glavni problem je domet (nodeovi se međusobno ne čuju), a `MEDIUM_FAST` domet dodatno
smanjuje. Zaključci zajednice:

- `MEDIUM_FAST` ima smisla tek uz **100+ nodeova u urbanom području** i channel
  utilization trajno iznad ~20–50 %. Trenutno stanje mreže (2026.) ne zadovoljava
  nijedan od tih uvjeta.
- **Službeni preset CroMesh mreže ostaje `LongFast`.** Svaka buduća promjena bit će
  najavljena i dogovorena u Telegram grupi.

## Kako smanjiti opterećenje kanala (dogovorene preporuke)

Za zdravlje mreže zajednica preporučuje sljedeće postavke, posebno korisnicima s više
uređaja:

1. Ako imaš više kućnih nodeova, **mobilne uređaje prebaci u `CLIENT_MUTE`** — i dalje
   šalju i primaju poruke, ali ne retransmitiraju tuđe pakete.
2. **Slanje lokacije postavi na ~2 sata, a node info na ~3 sata** — intervali se tako
   izmjenjuju i održavaju node list živim bez spamanja kanala.
3. Ne šalji masovno traceroute pakete — svaki traceroute višestruko opterećuje mrežu.

Detalji o ulogama nodeova (CLIENT, ROUTER, CLIENT_BASE...) nalaze se na stranici
[Uloge i imenovanje](uloge-i-imenovanje.md).

## Regulatorni okvir (ukratko)

- 868 MHz je ISM pojas — **dozvola nije potrebna** za Meshtastic uređaje.
- Zakonski limit efektivne izračene snage (ERP) je **27 dBm (500 mW)** u podpojasu koji
  koristi LongFast. Pripazi: uređaj na 22 dBm + antena od 10 dBi prelazi zakonski limit.
  Vidi [Antene](../antene/index.md) i [Pravila](../zajednica/pravila.md).
- Regulator u RH je **HAKOM**; radioamaterske dozvole i pozivni znakovi provjeravaju se
  na HAKOM-ovim stranicama, ali za Meshtastic **nisu potrebni**.

> **Napomena:** TODO — zajednica još nema formalno definiran postupak donošenja odluka o
> promjeni standarda (tko odlučuje, kojom većinom, gdje se glasa). Dosadašnje odluke
> donošene su konsenzusom na meetupima i u Telegram grupi.
