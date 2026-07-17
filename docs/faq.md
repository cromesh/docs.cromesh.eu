---
title: Česta pitanja (FAQ)
description: Odgovori na najčešća pitanja početnika u CroMesh Meshtastic mreži — dozvole, domet, karta, MQTT, baterije i odabir opreme.
---

# Česta pitanja (FAQ)

## Osnove

### Trebam li dozvolu ili radioamatersku licencu?

**Ne.** Meshtastic radi u slobodnom 868 MHz ISM pojasu. Jedino moraš poštovati limite
snage (ERP) i imati regiju postavljenu na `EU_868` — vidi
[Pravila](zajednica/pravila.md).

### Moram li ručno postaviti frekvenciju (override frequency) na 868 MHz?

**Ne.** Odabirom regije `EU_868` frekvencija je automatski definirana — LongFast radi na
**869,525 MHz**. Override frequency služi samo za posebne (custom) postavke i ne diraj
ga.

### Koji uređaj kupiti za početak?

Za mobilno korištenje: uređaj s **nRF52** čipom (T-Echo, ThinkNode M1, Wio Tracker…).
Najjeftiniji ulaz: **Heltec V3**. Detaljna usporedba s cijenama i poznatim problemima:
[Odabir uređaja](odabir-uredaja/index.md).

### Koliki je domet?

- Stock antena, urbana sredina: **1–2 km** kroz zgrade i drveće.
- Dobra vanjska antena na visini s optičkom vidljivošću: deseci kilometara
  (u mreži zabilježene veze Karlovac–Zagreb–Slunj, ovisno o propagaciji).
- Ekstremi: nodeovi u zrakoplovima primani na 150+ km.
- Propagacija je navečer osjetno bolja nego danju — normalna pojava.

Domet ovisi prije svega o **visini antene i liniji optičke vidljivosti**, ne o snazi.

## "Ne radi mi"

### Poslao sam poruku i nitko ne odgovara. Što je krivo?

Najvjerojatnije ništa u tvojim postavkama — **nisi u dometu mreže**. Rijetka pokrivenost
trenutno je glavni problem CroMesha. Provjeri:

1. Regija `EU_868`, preset `LongFast`?
2. Na [map.cromesh.eu](https://map.cromesh.eu) — gdje je najbliži node?
3. Pošalji test na `LongFast` i gledaj [map.cromesh.eu/chat](https://map.cromesh.eu/chat)
   — ako se poruka pojavi, tvoj uređaj radi.
4. Javi se u Telegram grupu — netko će potvrditi čuje li te.

### Zašto se ne vidim na karti?

Najčešći uzroci redom: krivi MQTT root topic (mora biti `msh/EU_868/9A`), isključen
*OK to MQTT*, isključen Uplink na LongFast kanalu, node nema lokaciju. Kompletna
checklista: [MQTT i karta](mqtt/index.md). Nakon ispravne konfiguracije pričekaj
1–2 sata.

### Dodao sam kanal i nestao mi je LongFast!

Kliknuo si **"Replace"** umjesto **"Add"** pri dodavanju kanala. Obriši kanal koji je
pregazio LongFast i dodaj LongFast natrag sa zadanim postavkama — poruke ostaju. Vidi
[Kanali](mreza/kanali.md).

### Vidim nodeove sa 5–7 hopova — je li to dobro?

Nije. Zadani hop limit je 3; veće vrijednosti nepotrebno opterećuju mrežu. Ako vidiš
takve nodeove, vjerojatno je netko podigao limit — nemoj to raditi i ti. Vidi
[Standardi](mreza/standardi.md).

### Heltec V4 mi slabo čuje s vanjskom antenom

Poznat problem revizije ploče 4.2 (šum); revizija 4.3 to rješava. Provjeri i firmware
(2.7.13+, alpha s LNA fixom). Detalji: [Odabir uređaja](odabir-uredaja/index.md).

## MQTT i karta

### Hoće li uključivanje MQTT-a napraviti kaos na mreži?

**Ne** — ako slijediš upute (samo Uplink na LongFast). Tvoj node će tada samo
prijavljivati kartu, a MQTT server ne šalje promet natrag u RF mrežu (zero-hop
politika). Vidi [MQTT i karta](mqtt/index.md).

### Ima li zajednica koristi ako uključim MQTT na kućnom nodeu?

Da — tvoj node će na kartu prijaviti i sve susjede koje čuje, čime karta (i slika
stvarnog stanja mreže) postaje točnija.

### Što znače crte između nodeova na karti?

Da se ti nodeovi **relativno često čuju**. Ne znači da su u savršenom kontaktu u svakom
trenutku.

## Ostalo

### Koliko traje baterija?

Ovisi o uređaju i postavkama; iskustvene brojke: 2× 18650 uz power save ≈ 10 %/dan;
RAK4631 s GNSS + BME280 senzorima ≈ 40–45 h na jednoj 18650. Za trajni rad — solar:
[Napajanje i solar](solarno/index.md).

### Mijenjam uređaj — mogu li prenijeti stari identitet (ID, ključeve)?

Ne preporučuje se — NodeID je vezan uz hardver i forsiranje starih ključeva izaziva
*key mismatch* upozorenja. Novi hardver = novi identitet. Vidi
[Uloge i imenovanje](mreza/uloge-i-imenovanje.md).

### Što je s MeshCore? Zašto smo na Meshtasticu?

MeshCore je alternativni protokol s drugačijim (usmjerenim) rutiranjem preko namjenskih
repeatera — teoretski bolji za guste urbane mreže. Stav zajednice: **ostajemo na
Meshtasticu** jer (a) svi novi uređaji dolaze s Meshtasticom "out of the box", dok
MeshCore traži reflash svega, (b) hardver je isti pa MeshCore ne rješava naš stvarni
problem — domet i rijetku pokrivenost, (c) čak i mala promjena (MediumFast test)
pokazala je koliko je teško koordinirati prelazak cijele mreže. Pojedini članovi
paralelno eksperimentiraju s MeshCoreom (postoji zaseban topic) i to je dobrodošlo.

### Gdje mogu kupiti/prodati rabljenu opremu?

Topic **Tržnica Novo/Rabljeno** u Telegram grupi.

### Kako mogu doprinijeti ovoj dokumentaciji?

Pull requestom na
[github.com/cromesh/docs.cromesh.eu](https://github.com/cromesh/docs.cromesh.eu) —
posebno su dobrodošle dopune mjesta označenih s `TODO:`.
