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

## Napomena o autorskim pravima

<small><em>docs.cromesh.eu je neovisan, neslužben projekt CroMesh zajednice i nije povezan,
podržan niti službeno povezan s tvrtkom MeshCore Technologies Limited, službenim
razvojnim timom na meshcore.io, niti bilo kojim drugim komercijalnim subjektom koji
djeluje pod imenom MeshCore. Nazivi, logotipi i vizualni identiteti navedeni su
isključivo u svrhu identifikacije i edukacije.

MeshCore je otvorenog koda i distribuira se pod
[MIT licencom](https://github.com/meshcore-dev/MeshCore/blob/main/license.txt), izvorno
djelo Scotta Powella i suradnika zajednice.

Softver, firmware i sve informacije na ovoj stranici pruženi su "kakvi jesu", bez
ikakvih jamstava. Autori ove dokumentacije ne odgovaraju za eventualnu štetu, gubitak
podataka ili kvarove hardvera nastale korištenjem materijala ili koda s ove
stranice.</em></small>
