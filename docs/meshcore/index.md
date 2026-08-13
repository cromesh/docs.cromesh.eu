---
title: MeshCore
description: MeshCore — hrvatska zajednica i mreža temeljena na LoRa tehnologiji, alternativa ili nadopuna Meshtastic mreži.
tags:
  - MeshCore
---

# MeshCore

MeshCore je lagan sustav za sigurnu tekstualnu komunikaciju putem LoRa radija na 868 MHz frekvenciji. Svaki node u Hrvatskoj može biti dio mreže, a repetitori prosljeđuju poruke dalje — bez centralnog operatera i bez internetske veze. Slično kao Meshtastic, MeshCore mreža pruža autonomiju node-ovima, a trenutno je na području Republike Hrvatske u izgradnji. Svi koji žele pridružiti se projektu slobodno mogu izabrati Meshtastic ili MeshCore po preferencijama ili čisto po osjećaju, ili pak izabrati oba protokola na nezavisnim uređajima.

## Razlika između Meshtastic-a i MeshCore-a

Najveća razlika je u načinu usmjeravanja poruka. Meshtastic koristi tzv. "managed flood" routing — svaki uređaj u ulozi Client prima i prosljeđuje tuđe poruke, što mrežu čini jednostavnom za postavljanje i vrlo otpornom, ali uz veće zauzeće radio-kanala u gušćim mrežama. MeshCore razdvaja uređaje po ulogama: obični uređaji (Companion) ne prosljeđuju tuđe poruke, već to rade isključivo namjenski postavljeni repetitori. Rezultat je tiša i predvidljivija mreža, ali uz zahtjev za pažljivijim planiranjem pokrivenosti repetitorima. Oba protokola su otvorenog koda, rade na istom LoRa hardveru, a međusobno nisu kompatibilna.

## Poveznice

| Resurs | Adresa | Opis |
|---|---|---|
| MeshCore HR | [meshcore.com.hr](https://meshcore.com.hr/) | Hrvatska MeshCore zajednica |
| MeshCore HR karta | [map.meshcore.com.hr](https://map.meshcore.com.hr/) | Karta MeshCore Hrvatska |
