# 📘 CroMesh Dokumentacija

Ova dokumentacija koristi [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) za generiranje modernog, responzivnog web sučelja.

Stranicu uređuju CroMesh članovi.

## Changelog

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
