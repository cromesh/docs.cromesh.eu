---
title: Usmjeravanje poruka u MeshCoreu
description: Kako MeshCore usmjerava poruke — prvi flood, pamćenje puta, povratak na flood i uloga repetitora.
tags:
  - MeshCore
---

# Usmjeravanje poruka u MeshCoreu

## Način usmjeravanja (sažetak)

1. Prva poruka prema nekom kontaktu šalje se kao flood (kroz sve repetitore).
2. Pošiljatelj dobiva informaciju o putu kojim je poruka prošla najbrže i pohranjuje ga.
3. Sljedeće poruke koriste taj put, do tri pokušaja. Ostali repetitori ne sudjeluju.
4. Ako put ne radi, automatski se vraća na flood i ponovno traži novi put.
5. Put prema odredištu ne mora biti isti kao povratni, uključujući ACK.

**Repetitori ne usmjeravaju: rutu određuje node koji šalje.**

## Usporedba s Meshtasticom

Meshtastic poruke šalje flood-om uz ograničenje hopova (zadano 3), a repetitori ih
prosljeđuju po pravilima flood-a. MeshCore nakon prvog flood-a pamti put, a repetitori
prosljeđuju poruku samo ako se nalaze na putu te poruke. Cjelovitu usporedbu vidi na
stranici [MeshCore u CroMeshu](index.md#kratki-pregled-razlika).
