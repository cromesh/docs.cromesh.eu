# CroMesh Dokumentacija

Ova dokumentacija koristi [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) za generiranje modernog, responzivnog web sučelja. Stranicu uređuju CroMesh članovi, uz pomoć ChatGPT engine-a za izradu, restrukturiranje, lekturu i provjeru dokumentacijskog sadržaja od verzije v2. Debugirano te djelomično izrađeno Claude-om.

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
   └─ v3.5.3  MeshCore spojen u faq.md
└─ v3.6.0  Ispravljen prijelom riječi na naslovnici
   ├─ v3.6.1  Community fotografije hardvera i uređaja
   ├─ v3.6.2  Stilizirane SVG ikone u navigaciji
   └─ v3.6.3  Home poveznice, klikabilne kućice i 18650 fotografija
└─ v3.7.0  Povećana tablica Naše poveznice
   ├─ v3.7.1  Nove fotografije: postavke, hardver, aplikacije
   ├─ v3.7.2  QR kod kanala i dovršen 18650 vodič
   └─ v3.7.3  Trenutna verzija — Final — Migration to a new server
```

## Changelog

### v3.7.3 — Final — Migration to a new server
- **Prvi koraci:** ispravljen tekst o preglednicima za flasher.meshtastic.org —
  "u Chromeu ili Edgeu (WebSerial ne radi u Firefoxu/Safariju)" promijenjeno u
  "u Chrome, Chromium ili Edge pregledniku (WebSerial ne radi u Firefox / Safari)".

### v3.7.2 — QR kod kanala i dovršen 18650 vodič
- **Naše poveznice:** dodan red "MeshCore Hrvatska" ([meshcore.com.hr](https://meshcore.com.hr/)) u tablicu na naslovnici.
- **QR kod kanala:** dodana slika QR koda za `cromesh.eu` kanal (dekodirano i
  potvrđeno da odgovara postojećem invite linku) na dvije stranice —
  [Postavke → Channels](https://docs.cromesh.eu/postavke/channel-postavke/) i
  [Mreža → Kanali](https://docs.cromesh.eu/mreza/kanali/#kanal-cromesheu) —
  po zahtjevu zajednice, radi lakšeg dodavanja kanala skeniranjem umjesto
  ručnog upisa/kopiranja dugog URL-a.
- **18650 vodič dovršen:**
    - Naslov sekcije okrenut s "Kada oživljavati" na "Kada ne oživljavati",
      uklonjen pozitivan (zavaravajući) primjer.
    - Dodan kriterij visokog samopražnjenja (~0,5V pad unutar nekoliko dana
      bez opterećenja) kao znak internog kvara.
    - Cijela stranica reorganizirana: nova sekcija "Očitanje napona ćelije"
      s punom tablicom raspona (0,00V do 4,5V+), i nova sekcija "Praćenje
      nakon oživljavanja" (trend stabilizacije, prepoznavanje unutarnjeg
      kratkog spoja).

### v3.7.1 — Nove fotografije: postavke, hardver, aplikacije
- **Sadržaj:** 3 nove fotografije zajednice — `v371-pocetak.jpg`,
  `v371-hardver.jpg`, `v371-software.jpg` — dodane na stranice Postavke,
  Hardware i Aplikacije.
- **Bug 1 — pogrešna dubina putanje:** `postavke/prvi-koraci.md` nije `index.md`
  pa se gradi dvije razine ispod `site/` (`postavke/prvi-koraci/index.html`), ali
  je koristio `../` (jednu razinu) umjesto `../../`.
- **Bug 2 — nedostaje `../` u markdown sintaksi:** `aplikacije/index.md` je
  sliku umetnuo standardnom `![]()` markdown sintaksom bez ijednog `../`.
  `mkdocs build --strict` je ovo sam uhvatio kao grešku, jer MkDocs validira
  markdown-style putanje (za razliku od raw HTML `<img>` tagova, koje nikad ne
  validira).
- **Bug 3 — slike nikad nisu bile pushane:** provjerom preko
  `raw.githubusercontent.com` utvrđeno da sve tri slike vraćaju 404 na masteru,
  neovisno o ispravnosti putanja — binarni fajlovi nikad nisu stigli u prvi
  push. Dodani naknadno.
- **Bug 4 — nedostajala cijela datoteka u pushu:** `hardver/index.md` je već
  imao ispravnu putanju pa nije trebao izmjenu, ali kao nova datoteka
  (u odnosu na tadašnji master) nikad nije bila uključena niti u jedan paket za
  push — otkriveno tek kad je stranica ostala bez slike unatoč ispravnom kodu.
- **Premještanje sadržaja:** `v371-pocetak.jpg` premještena s
  `/postavke/prvi-koraci/` na `/postavke/` (sekcijsku naslovnu stranicu), na
  zahtjev.
- Sve četiri stranice potvrđene stvarnim browser testom (Playwright) — slike se
  učitavaju (`naturalWidth/Height > 0`), ne samo da putanja postoji na disku.
- Debugirano putem Claude-a

### v3.7.0 — Povećana tablica Naše poveznice
- **Naše poveznice:** tablica na naslovnici povećana — font unutar tablice
  podignut za 50% (s 0.64rem na 0.96rem). Padding u ćelijama definiran je u `em`
  jedinicama u MkDocs Material temi, pa raste proporcionalno s fontom, čime cijela
  tablica (ne samo tekst) postaje vidno veća.
- **Uzrok potrebe za `!important`:** temeljno pravilo teme
  (`.md-typeset table:not([class])`) ima veću CSS specifičnost (2 klase) od
  prvotnog pravila (`.cromesh-home-links table`, 1 klasa), pa je font-size bez
  `!important` bio tiho ignoriran — potvrđeno usporedbom computed stilova prije
  i poslije ispravka.

### v3.6.3 — Home, poveznice i 18650 fotografija
- **Navigacija:** uvedene minimalističke monokromatske SVG ikone u glavnoj navigaciji.
- **Home:** dodane klikabilne kućice za brzi pristup.
- **Naše poveznice:** vraćena tablica poveznica na naslovnicu i postavljena iznad odjeljka **Brzi pristup**.
- **Telegram:** ažurirana Telegram pozivna poveznica na svim relevantnim mjestima.
- **Home fotografija:** uklonjena problematična fotografija s početne stranice.
- **18650:** fotografija za „Punjenje i oživljavanje 18650 Li-ion ćelija” zamijenjena novom slikom.

### v3.6.2 — Stilizirane SVG ikone u glavnoj navigaciji
- **Zamjena:** emoji u nav tabovima (🏠 📖 ❓ ⚙️ 💻 🔧 💾 🌍) zamijenjeni monokromatskim
  SVG ikonama iz Material Design Icons seta (Apache-2.0), umetnutim kroz CSS
  `mask-image` — ikone prate boju teksta i automatski se prilagođavaju light/dark
  temi.
- **Otkriveno usput:** `:material-xxx:` shortcode sintaksa radi unutar sadržaja
  stranica (admonitions, tablice), ali se **ne renderira** u nav naslovima —
  poznato ograničenje MkDocs Material teme, potvrđeno lokalnim buildom prije nego
  je pogrešan pristup dospio u produkciju.
- **Bug uhvaćen tijekom razvoja:** prvi pokušaj koristio je `[href="hardver/"]`
  CSS selektore, no MkDocs generira relativne putanje (`../`, `../..`) ovisno o
  dubini trenutne stranice, a aktivni tab dodatno koristi generički `"./"` href
  neovisno o sekciji — što je činilo href-based targetiranje nepouzdanim.
  Riješeno prelaskom na pozicijski (`nth-child`) CSS odabir temeljen na fiksnom
  redoslijedu iz `mkdocs.yml`, testirano na 12 stranica na različitim dubinama.
- **Opseg:** ikone su primijenjene na desktop tab traku (`.md-tabs__link`).
  Mobilni hamburger-drawer i dalje prikazuje čist tekst bez ikona.

### v3.6.1 — Community fotografije hardvera i uređaja
- **Sadržaj:** 11 fotografija zajednice dodano kroz Hardware, Odabir uređaja,
  Antene, Solarno i naslovnicu, unutar `<figure class="cromesh-doc-photo">`
  blokova.
- **Bug:** slike se nisu prikazivale na 7 od 11 stranica. `use_directory_urls`
  gradi ne-index stranice kao `stranica/index.html`, dvije razine ispod `site/`,
  ali `<img src="../assets/images/...">` je pretpostavljao samo jednu razinu
  (kao index.md stranice).
- **Popravak:** putanje ispravljene u `../../assets/images/...` na svim
  pogođenim stranicama; potvrđeno s `mkdocs build --clean --strict` i ručnom
  provjerom da svih 11 slika resolvea na stvarnu datoteku.
- **Dodatni sitni bug:** `esp32.md` i `zakljucak.md` nisu imali prazan red prije
  `<figure>` bloka, pa Markdown parser HTML blok nije prepoznao — dodan blank
  line.
- **CSS:** `.cromesh-doc-photo` klasa (zaobljeni rubovi, sjena, responzivni
  max-width) dodana u `extra.css`.

### v3.6.0 — Ispravljen prijelom riječi na naslovnici
- **Bug:** na desktop širinama (4-stupčani grid, ~901–1280px+), riječi poput
  "Decentralizirana", "besplatno" i "dokumentacija" lomile su se usred riječi
  (npr. "Decentraliz-irana") jer su kartice bile samo ~142px široke.
- **Uzrok:** `docs/index.md` nije skrivao lijevi i desni sidebar (nav stablo i TOC
  "Sadržaj"), pa su zajedno oduzimali 484px prostora sadržaju, iako stranica već
  koristi vlastite gornje tabove i nema vlastiti TOC koji bi trebao ostati vidljiv.
- **Popravak:** dodano `hide: [navigation, toc]` u frontmatter naslovnice. Širina
  sadržaja porasla s 688px na 1188px (na 1280px viewportu), kartice s 142px na
  267px — riječi se sada lome isključivo na granicama riječi, na svim testiranim
  širinama (901px, 1280px, tablet, mobitel).

### v3.5.3 — MeshCore spojen u FAQ
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
