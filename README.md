# CroMesh Dokumentacija

Ova dokumentacija koristi [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) za generiranje modernog, responzivnog web sučelja.

Stranicu uređuju CroMesh članovi.

## Changelog

### v2 — 2026-07-17 — Nove sekcije: Hardver, Mreža, Zajednica, FAQ

Doprinos: 9A3CYN, 9A3AVX, 9A3VEX i 9A3WHY

Dodano: FAQ stranica, Postavke → Prvi koraci (vodič za novi uređaj), Montaža i zaštita,
3D print kućišta, Mreža (standardi, kanali, uloge i imenovanje), Zajednica (o
zajednici, pravila).

Spojeno u postojeće stranice, bez dupliciranja: Home (dodana tablica poveznica i brzi
start), Odabir uređaja (tablica nRF52 vs. ESP32, pregled uređaja korištenih u
zajednici, upozorenje o Heltec V4), Antene i Solarni uređaji (bile prazne, sada
popunjene), MQTT (spojeno umjesto duplicirano na dva mjesta u navigaciji).

Sve interne poveznice usklađene s konačnim lokacijama stranica. `mkdocs.yml` nav
ažuriran u skladu s time.

### v3 — 2026-07-22 — Restrukturiranje navigacije

Zajednica ugniježđena pod FAQ (O zajednici, Pravila). Aplikacije, Firmware i MQTT
spojeni u jednu Software sekciju. Montaža i 3D print preimenovana u Hardver dodaci i
proširena sa Solarni uređaji (prije zasebna sekcija).

Broj top-level tabova smanjen s 13 na 9 — sav sadržaj ostaje dostupan, samo
organiziran u manje, šire sekcije.

### v3.1 — 2026-07-22 — Pretraga, opisi, logo, daljnje restrukturiranje

Pretraga postavljena na hrvatski (`lang: hr`). Dodan CroMesh logo kao `theme.logo` i
`theme.favicon`. Uvod ugniježđen pod novu sekciju Početak, zajedno s Prvi koraci (koji
ostaje i pod Postavke). Antene ugniježđena pod Hardver dodaci, zajedno s Montaža i
zaštita, 3D print kućišta i Solarni uređaji. Dodan `description:` u frontmatter za 9
stranica kojima je nedostajao.

Broj top-level tabova smanjen na 8: Home, Početak, FAQ, Postavke, Odabir uređaja,
Hardver dodaci, Software, Mreža.
