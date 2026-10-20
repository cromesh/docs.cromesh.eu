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
- Širina path hasha: u zajednici se preporučuje **2 bajta** jer 1 bajt ima samo 256
  mogućih vrijednosti (2 bajta imaju 65 536), pa su kod 1 bajta moguće kolizije. Klijent s 2 bajta može komunicirati s klijentom s
  1 bajtom.
- Firmware repetitora: **1.14 ili noviji**. Stariji od 1.14 ne razumiju multi-bajt path
  hash i ispuštaju 2- i 3-bajtne pakete.
- Naredba `set path.hash.mode` određuje samo veličinu path hasha vlastitih *advert*
  paketa i ne znači da repetitor prosljeđuje samo taj format.
- Preporuka jednog člana: na repetitorima uključiti `set loop.detect moderate` kako se
  ista poruka ne bi ponovno prosljeđivala.

### Detekcija petlji (`loop.detect`)

Prema [MeshCore CLI dokumentaciji](https://docs.meshcore.io/cli_commands/) naredba
`set loop.detect <stanje>` prihvaća `off`, `minimal`, `moderate` i `strict`. Zadano je
`off`, a značajka je dodana u firmwareu **1.14**. „Dropanje” znači da repetitor **odbija**
(ne prosljeđuje dalje) flood pakete koji izgledaju kao da su u petlji, odnosno u čijem se
putu hash/ID tog repetitora pojavljuje previše puta:

| Stanje | 1-bajtni hash | 2-bajtni hash | 3-bajtni hash |
|---|---|---|---|
| `off` | bez detekcije | bez detekcije | bez detekcije |
| `minimal` | 4 ili više puta | 2 ili više puta | 1 ili više puta |
| `moderate` | 2 ili više puta | 1 ili više puta | 1 ili više puta |
| `strict` | 1 ili više puta | 1 ili više puta | 1 ili više puta |

### Veličina path hasha (`path.hash.mode`)

`set path.hash.mode <0–2>`: 0 = 1 bajt (zadano), 1 = 2 bajta, 2 = 3 bajta. Prema
dokumentaciji, postavka **ne utječe** na veličinu hasha paketa koje taj repetitor
prosljeđuje; također je dodana u firmwareu 1.14.

## Imenovanje repetitora

Dogovoreni obrazac za novi repetitor: `HR-<OZNAKA GRADA>-<lokacija>` (npr.
`HR-ZG-M.Sljeme`). Osijek koristi `HR OS ...`.
