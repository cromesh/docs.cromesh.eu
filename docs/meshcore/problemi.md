---
title: MeshCore poznati problemi
description: Poznati problemi pri korištenju MeshCorea u CroMesh zajednici — nestali kontakti u aplikaciji i poveznice na srodna rješenja.
tags:
  - MeshCore
  - Rješavanje problema
---

# MeshCore — poznati problemi

## Kontakti su nestali iz aplikacije

Prijavljeno više puta, uzrok nije utvrđen (aplikacija ili node).

Što je poznato iz [MeshCore repozitorija](https://github.com/meshcore-dev/MeshCore/issues/1227):

- Lista kontakata ima ograničenje ovisno o uređaju (npr. 350). Kad se popuni, automatsko
  dodavanje staje i novi se kontakti pojavljuju samo na popisu otkrivenih, osim ako je
  uključeno prepisivanje najstarijih ("Overwrite Oldest").
- Jedan korisnik prijavio je da su mu nakon nadogradnje favoriti nestali nakon nekoliko
  dana na ograničenju; uzrok nije potvrđen.
- U CLI dokumentaciji ne postoji naredba za izvoz ili sigurnosnu kopiju kontakata. Privatni
  ključ (identitet noda) može se pročitati samo preko serijske konzole (`get prv.key`) i
  mora ostati tajan; to nije kopija kontakata.

## Slaba prolaznost u pokretu

U prvim testovima iz automobila u zagrebačkom urbanom području prolaznost MeshCorea
bila je mala. Za pouzdan rad u pokretu bit će potrebna veća gustoća repetitora — vidi
[Infrastruktura](../mreza/infrastruktura.md#zagreb-i-okolica).

## Povezano

- Popravak bootloadera XIAO nRF52 putem MeshCore web flashera:
  [Firmware](../firmware/index.md#poznati-problemi-pri-azuriranju).
- Opći problemi s uređajima i vezom: [Rješavanje problema](../rjesavanje-problema.md).
