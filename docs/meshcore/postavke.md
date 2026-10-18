---
title: MeshCore postavke za CroMesh
description: Preporučene MeshCore postavke u CroMesh zajednici — radio preset, coding rate, širina path hasha, firmware repetitora i imenovanje repetitora.
tags:
  - MeshCore
  - Konfiguracija
---

# MeshCore postavke za CroMesh

## Preporučene postavke za CroMesh

- Radio preset: **EU/UK Narrow**.
- Coding rate: **CR 8** (pri provjeri na repetitoru).
- Širina path hasha: u zajednici se preporučuje **2 bajta** jer 1 bajt ima samo oko 1200
  kombinacija pa su moguće kolizije. Klijent s 2 bajta može komunicirati s klijentom s
  1 bajtom.
- Firmware repetitora: **1.14 ili noviji**. Stariji od 1.14 ne razumiju multi-bajt path
  hash i ispuštaju 2- i 3-bajtne pakete.
- Naredba `set path.hash.mode` određuje samo veličinu path hasha vlastitih *advert*
  paketa i ne znači da repetitor prosljeđuje samo taj format.
- Preporuka jednog člana: na repetitorima uključiti `set loop.detect moderate` kako se
  ista poruka ne bi ponovno prosljeđivala.

<!-- TODO: potvrditi `loop.detect` i značenje "dropanja" pri različitim firmware verzijama (u raspravi postoji neslaganje). -->

## Imenovanje repetitora

Dogovoreni obrazac za novi repetitor: `HR-<OZNAKA GRADA>-<lokacija>` (npr.
`HR-ZG-M.Sljeme`). Osijek koristi `HR OS ...`.

<!-- TODO: formalno potvrditi obrazac i popis oznaka gradova. -->
