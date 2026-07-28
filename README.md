# CroMesh Dokumentacija

Ova dokumentacija koristi [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) za generiranje modernog, responzivnog web sučelja.

Stranicu uređuju CroMesh članovi.

## Struktura dokumentacije

- **Mreža** — dogovoreni standardi, kanali, MQTT i karta, uloge nodeova
- **Postavke** — upute za konfiguraciju novog uređaja
- **Hardver** — uređaji, antene, napajanje, montaža, 3D print kućišta
- **Zajednica** — o nama, pravila ponašanja i regulativa
- **FAQ** — česta pitanja početnika

## Licenca

Sadržaj ove dokumentacije dostupan je pod licencom
[Creative Commons Imenovanje-Dijeli pod istim uvjetima 4.0 (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/),
osim ako je za pojedini dio izričito navedeno drugačije. Detalji u
[LICENSE](./LICENSE) datoteci.

© CroMesh zajednica

## Changelog into v2

### 2026-07-17 — Dodane sekcije: Hardver, Mreža, Zajednica, FAQ

Doprinos: **9A3CYN, 9A3AVX, 9A3VEX i 9A3WHY**

#### Dodano

- **FAQ** (`docs/faq.md`) — nova stranica s odgovorima na česta pitanja početnika:
  dozvole, override frequency, odabir uređaja, domet, MQTT, baterije.
- **Postavke → Prvi koraci** (`docs/postavke/prvi-koraci.md`) — vodič korak-po-korak za
  novi uređaj: flashanje firmwarea, instalacija aplikacije, osnovna konfiguracija,
  provjera rada i savjeti za bateriju.
- **Montaža i 3D print** (novi odjeljak `docs/hardver/`):
  - `montaza-i-zastita.md` — brtvljenje, kondenzacija, gromobranska zaštita, dozvole za
    postavljanje vanjskih nodeova.
  - `3d-print.md` — popis STL modela kućišta i nosača koje zajednica koristi.
- **Mreža** (novi odjeljak `docs/mreza/`):
  - `standardi.md` — dogovoreni standardi mreže (preset, kanali, regija).
  - `kanali.md` — konfiguracija javnog i sekundarnog kanala.
  - `uloge-i-imenovanje.md` — preporuke za imenovanje i uloge nodeova.
- **Zajednica** (novi odjeljak `docs/zajednica/`):
  - `o-zajednici.md` — povijest i pregled CroMesh zajednice.
  - `pravila.md` — pravila ponašanja i regulatorne napomene (HAKOM, ERP).

#### Izmijenjeno (spojen novi sadržaj u postojeće stranice, bez dupliciranja teksta)

- `docs/index.md` — dodana tablica poveznica i "Brzi start u 5 koraka" ispod postojećih
  kartica; naslov i uvodni odlomak nisu mijenjani.
- `docs/odabir-uredaja/index.md` — dodana tablica nRF52 vs. ESP32 i pregled uređaja
  korištenih u zajednici (stacionarni i mobilni), uz upozorenje o Heltec V4 reviziji
  4.2. Postojeći uvod te pod-stranice `esp32.md`, `nrf52.md`, `rp2040.md`,
  `zakljucak.md` ostale su nepromijenjene (dublji pregled po čipu, ne dupliciraju
  tablicu).
- `docs/antene/index.md` — bila je prazna stranica (samo naslov); popunjena vodičem za
  odabir antena, SWR mjerenje, montažu i zakonski ERP limit.
- `docs/solarno/index.md` — bila je prazna stranica; popunjena vodičem za baterije
  (18650), BMS zaštitu i MPPT solarne regulatore (CN3791).
- `docs/mqtt/index.md` ("Napredno o MQTT") — bila je prazna stranica; popunjena
  detaljnim vodičem za spajanje na `mqtt.cromesh.eu`, točne MQTT postavke, uvjete za
  pojavu na karti i tablicu najčešćih problema. Sadržaj je spojen ovdje umjesto u novu
  stranicu kako se MQTT tema ne bi duplicirala na dva mjesta u navigaciji.

#### Popravljene interne poveznice

Sve interne poveznice unutar novog sadržaja usklađene su s konačnim lokacijama
stranica nakon spajanja (npr. poveznice na uređaje, antene, solar i MQTT sada pokazuju
na `odabir-uredaja/`, `antene/`, `solarno/` i `mqtt/` umjesto na privremeni `hardver/`
prefiks korišten u nacrtu).

#### Konfiguracija

- `mkdocs.yml` — ažuriran `nav:` blok: dodane nove stavke (FAQ, Prvi koraci, Montaža i
  3D print, Mreža, Zajednica), bez dupliciranja postojećih sekcija.
  
### 2026-07-22 — Restrukturiranje navigacije (v3)

#### Izmijenjeno

- **FAQ sekcija proširena** — `Zajednica` uklonjena kao zaseban top-level tab; `O zajednici`
  i `Pravila` sada su ugniježđeni pod `❓ FAQ` sekcijom.
- **Nova `💾 Software` sekcija** — spojene tri prijašnje zasebne sekcije (`📱 Aplikacije`,
  `🔧 firmware`, `🌐 MQTT`) u jednu, s tri stavke u sidebaru.
- **`🔧 Montaža i 3D print` preimenovana u `🔧 Hardver dodaci`** i proširena sa
  `Solarni uređaji` (prethodno zasebna `☀️ Solarni Uređaji` sekcija).

#### Neto efekt

Broj top-level tabova smanjen s 13 na **9** (Home, Uvod, FAQ, Postavke, Odabir uređaja,
Antene, Hardver dodaci, Software, Mreža) — plemenitiji pregled bez gubitka sadržaja,
budući da su svi prijašnji naslovi i dalje dostupni kao stavke u sidebaru.

### 2026-07-22 — v3.1: pretraga, opisi, logo, restrukturiranje Uvoda

#### Izmijenjeno
- `plugins.search.lang` promijenjen s `en` na `hr` — testirati kvalitetu pretrage za
  hrvatske riječi s naglascima/sklonidbama.
- `theme.logo` i `theme.favicon` postavljeni na `assets/logo.png` (CroMesh logo,
  zamjena generičke FontAwesome ikone).
- **`📖 Uvod u Meshtastic` ugniježđen** pod novu `📖 Početak` sekciju, zajedno s
  `Prvi koraci` (koji ostaje dostupan i pod `⚙️ Postavke` kao prije).
- Dodan `description:` u frontmatter za 9 stranica kojima je nedostajao
  (5× Postavke podstranice, 4× Odabir uređaja podstranice) — bolji link-previewi i
  konzistentniji SEO.

#### Bez promjena
- FAQ sadržaj — potvrđeno da trenutni format zadovoljava.
- Redirect/SSL problem s prije — potvrđeno riješen.

## v3.1.1

- Ispravljen `search.lang` u `mkdocs.yml` (`hr` → `en`) — `hr` nije podržan
  pa je uzrokovao build warning
- Copyright notice u footeru (`copyright:` u mkdocs.yml)
- `@cromesh.eu` u Long Name pojašnjeno kao community identifikator, ne e-mail
- Telegram pozivni link dodan (`o-zajednici.md`, `index.md`)
- Hardver dodaci overview stranica (`docs/hardver/index.md`)
- Stray zip fajl uklonjen s master brancha
- Git autorstvo commitova ispravljeno

## v3.1.2

- Dodan vodič "Oživljavanje LiIon" u sekciju Hardver dodaci
  (`docs/hardver/ozivljavanje-18650.md`)

## v3.1.3

- Dodana licenca CC BY-SA 4.0 (`LICENSE` datoteka)
- Sekcija "Struktura dokumentacije" premještena s `docs/index.md` u README

## v3.2

- Omogućen built-in tags plugin (`docs/tags.md`, oznake sada rade i klikabilne su)
- Ispravljen mrtvi `extra.copyright` ključ — licenca se sada stvarno prikazuje u
  footeru (koristi se ispravan top-level `copyright:`)
- Dodana napomena o neslužbenom statusu u odnosu na Meshtastic LLC — u footeru
  svake stranice te istaknuto na naslovnoj i stranici zajednice
  (usput ispravljen i `pymdownx.snippets` `auto_append` bug — putanja se
  razrješavala relativno na korijen projekta, ne na `docs/`)
- Ažurirani statistički podaci zajednice u "Kratka povijest" (120 članova,
  200+ nodeova, srpanj 2026.)
- Dovršen MQTT vodič — dodane točne putanje postavki po platformi
  (Android, iOS/iPadOS/macOS, Web client, CLI)
- Dodana napomena o postavljanju na državne/javne objekte (nema formalne
  procedure; preporuka kontakta s lokalnim radioklubovima) u `pravila.md` i
  `montaza-i-zastita.md`
- Očišćeni interni `TODO:` markeri kroz cijelu dokumentaciju (i dalje otvorena
  pitanja formulirana bez vidljivog "TODO" teksta)
- Dodan nacrt stranice zaštite privatnosti (`docs/privatnost.md`) — **nije
  povezan u navigaciju**, čeka pravnu provjeru i odluku o kontakt podacima
- Nav duplikat "Prvi koraci" (Početak + Postavke) označen kao namjeran
  komentarom u `mkdocs.yml`

## v3.2.1

- Uklonjena tvrdnja o aktivnosti grupe u odnosu na globalni službeni Meshtastic
  kanal (`zajednica/o-zajednici.md`)
- Uklonjen tab "Oznake" iz glavne navigacije — tags plugin ostaje aktivan,
  oznake su i dalje klikabilne na stranicama, samo bez zasebnog nav taba
- Dodana nedostajuća poveznica na vodič "Oživljavanje LiIon" na pregledoj
  stranici `hardver/index.md` (bila je u navigaciji, ali ne i na samoj stranici)
- Smanjena veličina fonta napomene o zaštitnom znaku (Meshtastic®) u footeru
  (`<small>` oznaka u `includes/mkdocs.md`)

## v3.2.2

- Tekst dokumentacije lekturiran (terminologija i gramatika)
- Lekturu odradio kolega Damir.
