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

<!-- TODO: priložiti upute (u chatu postoji PDF `MeshCore-Tailscale-Bridge_upute.pdf`) i osigurati dopuštenje autora. -->

## Observer

Observer je repetitor spojen preko USB-a na Raspberry Pi koji šalje statistiku na web.
Preporuka: uređaj s WiFi-jem flashati kao observer kako bi mreža bila vidljiva 24/7.

<!-- TODO: upute za postavljanje observera. -->

## Koristan alat

Karte, vodiči i analizatori navedeni su na stranici
[Poveznice i pravna napomena](poveznice.md).
