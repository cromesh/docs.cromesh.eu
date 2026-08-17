# CroMesh Dokumentacija

Ova dokumentacija koristi [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) za generiranje modernog, responzivnog web sučelja. Stranicu uređuju CroMesh članovi.

## Struktura dokumentacije

- **Home** — naslovnica s brzim poveznicama i pregledom zajednice
- **Početak** — uvod u Meshtastic i prvi koraci za nove korisnike
- **Česta pitanja** — česta pitanja početnika, o zajednici, pravila ponašanja i
  regulativa, MeshCore (hrvatska zajednica i usporedba s Meshtastic-om)
- **Postavke** — konfiguracija uređaja (LoRa, kanali, korisnik, uređaj, MQTT)
- **Odabir uređaja** — usporedba čipova (ESP32, nRF52, RP2040) i preporuke uređaja
- **Hardware** — antene, montaža i zaštita, 3D print kućišta, solarno napajanje
- **Software** — aplikacije, firmware, MQTT
- **Mreža** — dogovoreni standardi, kanali, uloge node-ova

## Licenca

Sadržaj ove dokumentacije dostupan je pod licencom [Creative Commons Imenovanje-Dijeli pod istim uvjetima 4.0 (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/), osim ako je za pojedini dio izričito navedeno drugačije. Detalji u [LICENSE](./LICENSE) datoteci.

© CroMesh zajednica

## Verzije

```
v2   2026-07-17  Prve tematske sekcije (Hardver, Mreža, Zajednica, FAQ)

v3   2026-07-22  Restrukturirana navigacija (13 → 9 top-level tabova)
├─ v3.1            Pretraga, opisi stranica, logo, restrukturiran Uvod
│  ├─ v3.1.1        Copyright footer, ispravci
│  ├─ v3.1.2        Vodič: oživljavanje LiIon
│  └─ v3.1.3        Licenca CC BY-SA, struktura u README
├─ v3.2            Tags plugin, trademark napomena, MQTT vodič dovršen
│  ├─ v3.2.1        Manji ispravci sadržaja i footera
│  ├─ v3.2.2        Lektura teksta (Damir)
│  └─ v3.2.3        cromesh.eu kanal, node-* hifenizacija, nastavak lekture
├─ v3.3            Treći krug lekture (Damir), terminološka dosljednost
│  ├─ v3.3.0        Flash-anje/Upozorenje/uvod heading dosljednost
│  ├─ v3.3.1        Preimenovan FAQ nav tab, Opće preporuke heading
│  ├─ v3.3.2        Meshtastic-* hifenizacija, dorade privatnost.md
│  └─ v3.3.3        Meshcore HR linkovi
└─ v3.4            Novi ogranak: MeshCore integracija
   ├─ v3.4.0        Tag, stranica i nav tab za MeshCore
   └─ v3.4.1        Trenutna verzija
```

## Changelog

### v2 — 2026-07-17

Prve tematske sekcije dodane u dokumentaciju. Doprinos: **9A3CYN, 9A3AVX, 9A3VEX i 9A3WHY**.

- **Dodano:**
  - `docs/faq.md` — odgovori na česta pitanja početnika: dozvole, override frequency,
    odabir uređaja, domet, MQTT, baterije
  - `docs/postavke/prvi-koraci.md` — vodič korak-po-korak za novi uređaj: flashanje
    firmware-a, instalacija aplikacije, osnovna konfiguracija, provjera rada, savjeti za
    bateriju
  - `docs/hardver/` — nova sekcija: `montaza-i-zastita.md` (brtvljenje, kondenzacija,
    gromobranska zaštita, dozvole za vanjske nodeove) i `3d-print.md` (popis STL modela)
  - `docs/mreza/` — nova sekcija: `standardi.md` (preset, kanali, regija), `kanali.md`
    (konfiguracija javnog i sekundarnog kanala), `uloge-i-imenovanje.md` (imenovanje i
    uloge nodeova)
  - `docs/zajednica/` — nova sekcija: `o-zajednici.md` (povijest i pregled zajednice),
    `pravila.md` (pravila ponašanja, HAKOM, ERP)
- **Izmijenjeno** (spojen novi sadržaj u postojeće stranice, bez dupliciranja teksta):
  - `docs/index.md` — dodana tablica poveznica i "Brzi start u 5 koraka"
  - `docs/odabir-uredaja/index.md` — dodana tablica nRF52 vs. ESP32 i pregled uređaja
    korištenih u zajednici, uz upozorenje o Heltec V4 reviziji 4.2
  - `docs/antene/index.md` i `docs/solarno/index.md` — bile su prazne stranice
    (samo naslov), popunjene punim vodičima
  - `docs/mqtt/index.md` ("Napredno o MQTT") — bila je prazna stranica, popunjena
    vodičem za spajanje na `mqtt.cromesh.eu` i tablicom najčešćih problema
- **Popravljeno:** interne poveznice unutar novog sadržaja usklađene s konačnim
  lokacijama stranica nakon spajanja
- **Konfiguracija:** ažuriran `nav:` blok u `mkdocs.yml`

### v3 — 2026-07-22 — restrukturiranje navigacije

- `Zajednica` uklonjena kao zaseban top-level tab — `O zajednici` i `Pravila` sada su
  ugniježđeni pod `❓ FAQ`
- Nova `💾 Software` sekcija — spojene `📱 Aplikacije`, `🔧 Firmware` i `🌐 MQTT` u jednu
- `🔧 Montaža i 3D print` preimenovana u `🔧 Hardver dodaci` i proširena sa
  `Solarni uređaji`
- Neto efekt: broj top-level tabova smanjen s 13 na **9**, bez gubitka sadržaja — sve
  je i dalje dostupno kao stavka u sidebaru

### v3.1 — 2026-07-22 — pretraga, opisi, logo, Uvod

- `plugins.search.lang` promijenjen s `en` na `hr`
- `theme.logo` i `theme.favicon` postavljeni na CroMesh logo (`assets/logo.png`)
- `📖 Uvod u Meshtastic` ugniježđen pod novu `📖 Početak` sekciju, zajedno s
  `Prvi koraci` (koji ostaje dostupan i pod `⚙️ Postavke` kao prije)
- Dodan `description:` u frontmatter za 9 stranica kojima je nedostajao — bolji
  link-previewi i konzistentniji SEO
- Bez promjena: FAQ sadržaj i raniji redirect/SSL problem, oboje potvrđeno u redu

### v3.1.1

- Ispravljen `search.lang` u `mkdocs.yml` (`hr` → `en`) — `hr` nije podržan pa je
  uzrokovao build warning
- Dodana copyright napomena u footeru (`copyright:` u `mkdocs.yml`)
- `@cromesh.eu` u Long Name pojašnjeno kao community identifikator, ne e-mail
- Dodan Telegram pozivni link (`o-zajednici.md`, `index.md`)
- Dodana overview stranica za Hardver dodatke (`docs/hardver/index.md`)
- Uklonjen zalutali zip fajl s master brancha
- Ispravljeno git autorstvo commitova

### v3.1.2

- Dodan vodič "Oživljavanje LiIon" u sekciju Hardver dodaci
  (`docs/hardver/ozivljavanje-18650.md`)

### v3.1.3

- Dodana licenca CC BY-SA 4.0 (`LICENSE` datoteka)
- Sekcija "Struktura dokumentacije" premještena s `docs/index.md` u README

### v3.2

- Omogućen built-in tags plugin (`docs/tags.md`) — oznake sada rade i klikabilne su
- Ispravljen mrtvi `extra.copyright` ključ — licenca se sada stvarno prikazuje u
  footeru (koristi se ispravan top-level `copyright:`)
- Dodana napomena o neslužbenom statusu u odnosu na Meshtastic LLC u footeru svake
  stranice (usput ispravljen i bug u `pymdownx.snippets` `auto_append` putanji)
- Ažurirani statistički podaci zajednice u "Kratka povijest" (120 članova,
  200+ nodeova, srpanj 2026.)
- Dovršen MQTT vodič — dodane točne putanje postavki po platformi (Android,
  iOS/iPadOS/macOS, Web client, CLI)
- Dodana napomena o postavljanju na državne/javne objekte u `pravila.md` i
  `montaza-i-zastita.md`
- Očišćeni interni `TODO:` markeri kroz cijelu dokumentaciju
- Dodan nacrt stranice zaštite privatnosti (`docs/privatnost.md`) — **nije povezan u
  navigaciju**, čeka pravnu provjeru i odluku o kontakt podacima
- Nav duplikat "Prvi koraci" (Početak + Postavke) označen kao namjeran komentarom u
  `mkdocs.yml`

### v3.2.1

- Uklonjena tvrdnja o aktivnosti grupe u odnosu na globalni službeni Meshtastic kanal
  (`zajednica/o-zajednici.md`)
- Uklonjen tab "Oznake" iz glavne navigacije — tags plugin ostaje aktivan, oznake su i
  dalje klikabilne na stranicama, samo bez zasebnog nav taba
- Dodana nedostajuća poveznica na vodič "Oživljavanje LiIon" na pregledoj stranici
  `hardver/index.md`
- Smanjena veličina fonta napomene o zaštitnom znaku (Meshtastic®) u footeru
  (`<small>` oznaka u `includes/mkdocs.md`)

### v3.2.2

- Tekst dokumentacije lekturiran (terminologija i gramatika)
- Lekturu odradio kolega Damir

### v3.2.3

- Dodane postavke kanala `cromesh.eu` (kanal 1) u `postavke/channel-postavke.md` —
  Uplink i Downlink isključeni
- Izmijenjen tekst kartice "Odabir uređaja" na naslovnici
- Nastavljena lektura teksta (Damir) — gramatika, interpunkcija i red riječi na više
  stranica (MQTT postavke, Zaključak, Hardver, Antene)
- Svi padežni oblici riječi "node" sada su dosljedno pisani s crticom
  (`node-a`, `node-u`, `node-om`, `node-ovi`, `node-ove`, `node-ova`, `node-ovima`)
  kroz cijelu dokumentaciju

### v3.3.0

- Treći krug lekture (Damir): ispravci na `hardver/ozivljavanje-18650.md`,
  `aplikacije/index.md`, `firmware/index.md`, `mreza/standardi.md` i `uvod.md`
- Terminološka dosljednost oko "flashanja" — usklađeno na `flash-anje`/`flash-ati`
  kroz `firmware/index.md`, uključujući preimenovanu OTA metodu
- `Pripazi:` → `Upozorenje:` (usklađeno kroz `standardi.md`, `solarno/index.md`,
  `mreza/kanali.md`)
- Svih 8 naslova na `uvod.md` usklađeno iz title-case u hrvatski rečenični case

### v3.3.1

- Naslov `Opće Preporuke` → `Opće preporuke` u `postavke/index.md`
- Nav tab `FAQ` preimenovan u `Česta pitanja` (`mkdocs.yml`, uz usklađenu poveznicu
  na naslovnici i opis u README "Struktura dokumentacije")

### v3.3.2

- Uklonjeni suvišni zarezi i točka u popisu prava ispitanika u `privatnost.md`
  ("Tvoja prava")
- Svi padežni oblici riječi "Meshtastic" sada su dosljedno pisani s crticom
  (`Meshtastic-a`, `Meshtastic-u`, `Meshtastic-om`) kroz cijelu dokumentaciju

### v3.3.3 — Meshcore HR linkovi

- Dodane poveznice na Hrvatsku MeshCore zajednicu u "Naše poveznice"
  (`meshcore.com.hr` i `map.meshcore.com.hr`)
- Dodan opis Telegram poveznici; usput ispravljen nepotpun redak tablice
  (nedostajao stupac "Opis" i završni znak `|`)

### v3.4.0

- Dodana oznaka (tag) `MeshCore` na naslovnicu
- Dodana nova stranica/nav tab "MeshCore" (desno od "Mreža") — kratak opis MeshCore
  mreže u Hrvatskoj, usporedba usmjeravanja poruka Meshtastic-a i MeshCore-a, te
  poveznice na meshcore.com.hr i map.meshcore.com.hr

### v3.4.1 — trenutna verzija

- MeshCore stranica premještena iz zasebnog top-level nav taba u temu unutar
  "Česta pitanja" (nakon "Pravila")
- Uklonjena dva MeshCore linka iz tablice "Naše poveznice" na naslovnici — MeshCore
  poveznice ostaju dostupne na samoj MeshCore stranici
- Dodana nova FAQ tema "Nejasnoće u Meshtastic tehnologiji" na kraju sekcije "Osnove"
  — objašnjenje zašto službena Meshtastic dokumentacija zna biti nejasna početnicima,
  uz dvije preporučene YouTube poveznice
- Uklonjena oznaka (tag) `MeshCore` s naslovnice — ostaje vidljiva na samoj MeshCore
  stranici (sada pod "Česta pitanja")
- Dodana napomena o autorskim pravima na MeshCore stranicu (zaštitni znak, MIT licenca,
  isključenje jamstva) — sažeta i stilizirana verzija istog obrasca kao postojeća
  Meshtastic napomena u footeru
