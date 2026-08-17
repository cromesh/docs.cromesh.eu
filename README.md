# CroMesh Dokumentacija

Ova dokumentacija koristi [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) za generiranje modernog, responzivnog web sučelja. Stranicu uređuju CroMesh članovi, uz pomoć ChatGPT engine-a za izradu, restrukturiranje, lekturu i provjeru dokumentacijskog sadržaja od verzije v3.4.2.

## Struktura dokumentacije
- **Home** — naslovnica s brzim poveznicama i pregledom zajednice
- **Početak** — uvod u Meshtastic i prvi koraci za nove korisnike
- **Česta pitanja** — česta pitanja početnika, o zajednici, pravila ponašanja i regulativa, MeshCore (hrvatska zajednica i usporedba s Meshtastic-om)
- **Postavke** — konfiguracija uređaja (LoRa, kanali, korisnik, uređaj, MQTT)
- **Odabir uređaja** — usporedba čipova (ESP32, nRF52, RP2040) i preporuke uređaja
- **Hardware** — antene, montaža i zaštita, 3D print kućišta, solarno napajanje
- **Software** — aplikacije, firmware, MQTT
- **Mreža** — dogovoreni standardi, kanali, uloge node-ova

## Licenca

Sadržaj ove dokumentacije dostupan je pod licencom [Creative Commons Imenovanje-Dijeli pod istim uvjetima 4.0 (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/), osim ako je za pojedini dio izričito navedeno drugačije. Detalji u [LICENSE](./LICENSE) datoteci.

© CroMesh zajednica

## Verzije

```text
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
   ├─ v3.4.1        MeshCore integracija u Česta pitanja
   └─ v3.4.2        Restrukturiranje FAQ-a, MeshCore grana i ChatGPT-assisted dokumentacijski rad
```

## Changelog

### v3.4.2 — FAQ restrukturiranje i ChatGPT-assisted dokumentacija

- **FAQ:** dodana nova tema **„MeshCore - kako i zašto?”** između „MQTT i karta” i „Ostalo”
- **MeshCore:** sadržaj je premješten iz stare teme u „Ostalo” i strukturiran kao neutralna FAQ tema
- **MeshCore:** dodane poveznice na hrvatsku zajednicu i kartu te sažeta napomena o neovisnosti, žigu, MIT licenci i isključenju jamstva
- **Navigacija:** uklonjen zasebni MeshCore nav unos; MeshCore je sada dio FAQ sadržaja
- **Kompatibilnost:** postojeća `docs/meshcore/index.md` stranica zadržana kao poveznica prema novoj FAQ temi
- **Dokumentacijski proces:** od v3.4.2 CroMesh dokumentacija izrađuje se i održava uz pomoć **ChatGPT engine-a**, uz pregled i odluke CroMesh zajednice.

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

### v3.4.0
- Dodana oznaka (tag) `MeshCore` na naslovnicu
- Dodana nova stranica/nav tab "MeshCore" — kratak opis MeshCore mreže u Hrvatskoj,
  usporedba usmjeravanja poruka Meshtastic-a i MeshCore-a, te poveznice na meshcore.com.hr
  i map.meshcore.com.hr

### v3.3.3 — Meshcore HR linkovi
- Dodane poveznice na Hrvatsku MeshCore zajednicu u "Naše poveznice"
- Dodan opis Telegram poveznici; usput ispravljen nepotpun redak tablice

### v3.3.2
- Uklonjeni suvišni zarezi i točka u popisu prava ispitanika u `privatnost.md`
- Svi padežni oblici riječi "Meshtastic" sada su dosljedno pisani s crticom
  (`Meshtastic-a`, `Meshtastic-u`, `Meshtastic-om`) kroz cijelu dokumentaciju

### v3.3.1
- Naslov `Opće Preporuke` → `Opće preporuke` u `postavke/index.md`
- Nav tab `FAQ` preimenovan u `Česta pitanja`

### v3.3.0
- Treći krug lekture (Damir)
- Terminološka dosljednost oko "flashanja" — usklađeno na `flash-anje`/`flash-ati`
- `Pripazi:` → `Upozorenje:`
- Naslovi na `uvod.md` usklađeni na hrvatski rečenični case

### v3.2.3
- Dodane postavke kanala `cromesh.eu`
- Nastavljena lektura teksta
- Svi padežni oblici riječi "node" dosljedno pisani s crticom

### v3.2.2
- Tekst dokumentacije lekturiran (terminologija i gramatika)
- Lekturu odradio kolega Damir

### v3.2.1
- Uklonjena tvrdnja o aktivnosti grupe u odnosu na globalni službeni Meshtastic kanal
- Uklonjen tab "Oznake" iz glavne navigacije
- Dodana poveznica na vodič "Oživljavanje LiIon"
- Smanjena veličina fonta napomene o zaštitnom znaku Meshtastic®

### v3.2
- Omogućen built-in tags plugin
- Ispravljen footer copyright ključ
- Dodana napomena o neslužbenom statusu u odnosu na Meshtastic LLC
- Dovršen MQTT vodič
- Dodan nacrt stranice zaštite privatnosti

### v3.1.3
- Dodana licenca CC BY-SA 4.0
- Sekcija "Struktura dokumentacije" premještena u README

### v3.1.2
- Dodan vodič "Oživljavanje LiIon"

### v3.1.1
- Ispravljen `search.lang` u `mkdocs.yml`
- Dodana copyright napomena u footeru
- Dodan Telegram pozivni link
- Dodana overview stranica za Hardver dodatke

### v3.1
- Pretraga, opisi stranica, logo i restrukturiran Uvod

### v3
- Restrukturirana navigacija (13 → 9 top-level tabova)

### v2
- Prve tematske sekcije: Hardver, Mreža, Zajednica i FAQ
