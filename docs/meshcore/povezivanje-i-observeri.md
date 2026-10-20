---
title: Povezivanje mreže i observeri
description: Spajanje udaljenih dijelova MeshCore mreže (Tailscale VPN most) i postavljanje observera koji šalju statistiku na web.
tags:
  - MeshCore
  - Mreža
---

# Povezivanje mreže i observeri

## Spajanje udaljenih dijelova mreže

MeshCore nema MQTT. Za privremeno povezivanje dijelova mreže koristi se **Tailscale VPN
most** s XIAO ESP32-S3 koji se u mreži ponaša kao običan repetitor.

## Observer

Observer je repetitor spojen preko USB-a na Raspberry Pi koji šalje statistiku na web.
Preporuka: uređaj s WiFi-jem flashati kao observer kako bi mreža bila vidljiva 24/7.

### Osnovno o postavljanju

Prema projektu [meshcoretomqtt](https://github.com/Cisien/meshcoretomqtt):

- Potrebno je računalo koje može pokretati Python 3.11+ (Raspberry Pi Zero, 2, 3 ili 4,
  ili drugi Linux/macOS uređaj) i repetitor spojen USB-om.
- Repetitor mora imati firmware izgrađen s uključenim bilježenjem paketa
  (`-D MESH_PACKET_LOGGING=1`) i jedinstveno ime. Testirane su RAK i Heltec ploče.
- Skripta čita repetitor preko serijskog porta (npr. `/dev/ttyACM0`) i objavljuje pakete
  (bez dešifriranja) na MQTT poslužitelje koje postaviš u konfiguraciji; najčešće se šalje
  na [LetsMesh](https://analyzer.letsmesh.net).
- Prijava na poslužitelj ide korisničkim imenom i lozinkom ili tokenom (token zahtijeva
  firmware 1.8.0 ili noviji).

Točne korake instalacije i konfiguracije vidi u README datoteci projekta.

## Koristan alat

Karte, vodiči i analizatori navedeni su na stranici
[Poveznice i pravna napomena](poveznice.md).
