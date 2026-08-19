# CroMesh Dokumentacija

Ova dokumentacija koristi [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) za generiranje modernog, responzivnog web sučelja. Stranicu uređuju CroMesh članovi, uz pomoć ChatGPT engine-a za izradu, restrukturiranje, lekturu i provjeru dokumentacijskog sadržaja od verzije v3.4.2.

## Struktura dokumentacije

- **Home** — naslovnica s brzim poveznicama i pregledom zajednice
- **Početak** — uvod u Meshtastic i prvi koraci za nove korisnike
- **Česta pitanja**
  - **Česta pitanja** — opća pitanja i odgovori; MeshCore tema na dnu stranice
  - **O zajednici** — informacije o zajednici
  - **Pravila** — pravila ponašanja i regulativa
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
v2   2026-07-17  Prve tematske sekcije
v3   2026-07-22  Restrukturirana navigacija
├─ v3.1  Pretraga, logo i restrukturiran Uvod
├─ v3.2  Tags, MQTT i pravne napomene
├─ v3.3  Lektura i terminološka dosljednost
├─ v3.4  MeshCore integracija i FAQ restrukturiranje
└─ v3.5  Vizualni redizajn i mrežne pozadine
   ├─ v3.5.0  Redizajn naslovnice
   ├─ v3.5.1  Vizualne sekcije, pozadine po granama
   ├─ v3.5.2  Antene vodič, MeshCore na dno FAQ grane
   └─ v3.5.3  Trenutna verzija
```

## Changelog

### v3.5.3 — MeshCore spojen u FAQ, uklonjena zasebna stranica
- **Česta pitanja:** MeshCore tema (Što je MeshCore?, Razlika prema Meshtastic-u,
  Poveznice, pravna napomena) sada je fizički dio `faq.md`, kao zadnja sekcija na
  stranici — ne samo zadnja stavka u nav popisu.
- **Nav:** uklonjena zasebna stavka „MeshCore” iz skupine „Česta pitanja”; `faq.md`
  ostaje jedina i glavna stranica te skupine.
- **Čišćenje:** obrisana samostalna stranica `docs/meshcore/index.md` — sadržaj sada
  postoji samo na jednom mjestu.

### v3.5.2 — Struktura pozadina grana i završnih stranica
- **Home:** postojeća pozadina naslovnice ostaje nepromijenjena.
- **Zelena obitelj:** Uvod, Česta pitanja, Postavke, Odabir uređaja, Hardware, Software i Mreža koriste zelenu pozadinu na svojim glavnim granama.
- **Plava obitelj:** MQTT, Solarno, Firmware, Antene i MeshCore koriste plavu pozadinu.
- **Završne stranice:** ostale ne-početne leaf/end stranice koriste plavu pozadinu.
- **Antene:** dodan vodič za odabir antene prema SWR-u, impedanciji i dBi.
- **Česta pitanja:** MeshCore je jasno označen kao zasebna stavka i premješten na dno FAQ grane.

### v3.5.1 — Vizualne sekcije i završne dorade
- **Pozadine:** plava obitelj za Početak, Česta pitanja, Postavke i Odabir uređaja; zelena za Hardware, Software i Mreža.
- **Naslovnica:** kartice ostaju na `80rem`; tekst kartica je smanjen radi boljeg prijeloma.
- **Tekst:** „Neovisan” i „Montaža čvora” zamijenili su prethodne nazive.
- **FAQ:** zadržana i usklađena revidirana FAQ struktura, uz MeshCore kao zasebnu temu unutar skupine „Česta pitanja”.

### v3.5.0 — Vizualni redizajn naslovnice
- Nova mrežna pozadina i redizajnirane informativne kartice.
- Uvedena vizualna osnova za moderniji izgled dokumentacije.
- Dodana poveznica na CroMesh kartu.

### v3.4 — MeshCore integracija i FAQ
- **v3.4.3:** MeshCore dobio vlastiti podtab unutar „Česta pitanja”.
- **v3.4.2:** FAQ restrukturiran i dodana strukturirana MeshCore tema; uveden ChatGPT-assisted dokumentacijski proces.
- **v3.4.1:** MeshCore premješten u FAQ i uklonjeni suvišni linkovi s naslovnice.
- **v3.4.0:** uvedena MeshCore stranica, usporedba s Meshtastic-om i HR poveznice.

### v3.3 — Lektura i standardizacija
- Terminologija, naslovi, FAQ i MeshCore HR poveznice usklađeni.

### v3.2 — Funkcionalnost i sadržaj
- Tags, MQTT vodič, pravne napomene, lektura i dodatne postavke.

### v3.1 — Temeljna struktura
- Pretraga, logo, Uvod, licenca i hardverski vodiči.

### v3
- Restrukturirana navigacija i smanjen broj glavnih tabova.

### v2
- Uvedene prve tematske sekcije: Hardver, Mreža, Zajednica i FAQ.
