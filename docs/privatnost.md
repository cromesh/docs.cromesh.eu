---
title: Zaštita privatnosti
description: Informacije o obradi osobnih podataka u sklopu CroMesh mreže — map.cromesh.eu, mqtt.cromesh.eu i docs.cromesh.eu.
tags:
  - privatnost
  - GDPR
---

# <font color="#50EB97">Zaštita privatnosti</font>

!!! warning "Nacrt — potrebna pravna provjera"
    Ova stranica je nacrt izrađen prema strukturi članka 13. Opće uredbe o zaštiti
    podataka (GDPR). Nije zamjena za pravni savjet. Prije objave, polja označena
    s `[POPUNITI]` treba popuniti stvarnim podacima, a cijeli tekst treba pregledati
    osoba s pravnim znanjem o GDPR-u.

Ovom stranicom CroMesh zajednica objašnjava koji se osobni podaci obrađuju u sklopu
korištenja CroMesh mreže (Meshtastic uređaji, `mqtt.cromesh.eu`, `map.cromesh.eu`) i
ove dokumentacije (`docs.cromesh.eu`), te koja prava pritom imaš.

## Voditelj obrade

CroMesh je neformalna zajednica bez pravne osobnosti (nije registrirano udruženje ni
tvrtka). Prema GDPR-u, to ne isključuje primjenu propisa — u nedostatku pravne osobe,
voditelj obrade su **fizičke osobe koje stvarno upravljaju infrastrukturom** i
odlučuju o svrsi i načinu obrade.

Infrastrukturu (`mqtt.cromesh.eu`, `map.cromesh.eu`) zajednički vodi više
administratora zajednice — riječ je o **zajedničkim voditeljima obrade** (čl. 26
GDPR-a). Svaki od njih odgovoran je za obradu u dijelu koji administrira.

- Administratori: `[POPUNITI — imena/nadimci administratora]`
- Zajednički kontakt: `[POPUNITI — e-mail]`
- Telegram: [t.me/cromesh](https://t.me/cromesh)
- GitHub: [github.com/CroMesh](https://github.com/CroMesh)

Za sve upite vezane uz obradu osobnih podataka (pristup, ispravak, brisanje) obratite
se putem gornjih kontakata — administratori će uputiti zahtjev nadležnoj osobi.

> **Napomena za administratore:** Čl. 26 GDPR-a zahtijeva da postoji **dogovor** među
> zajedničkim voditeljima obrade o tome tko je za što odgovoran (npr. tko odgovara na
> zahtjeve ispitanika, tko je zadužen za sigurnost servera), te da **bit tog dogovora**
> (ne nužno svaki detalj) bude dostupna ispitanicima — otud gornji odlomak. Preporučeno
> je kratko to zapisati interno (npr. u privatnom repo wikiju), čak i neformalno.

## Koji se podaci obrađuju

Kad uređaj spojiš na `mqtt.cromesh.eu` i omogućiš prikaz na karti, sljedeći podaci
postaju **javno vidljivi** na [map.cromesh.eu](https://map.cromesh.eu):

- **Long Name / Short Name** tvog node-a (naziv koji sam odabireš — može, ali ne mora,
  sadržavati tvoje ime)
- **GPS pozicija** node-a (točna ili ručno postavljena fiksna pozicija)
- Tehnički podaci o node-u: verzija firmware-a, razina baterije, metrika signala
- Poruke poslane na javnom kanalu `LongFast` (vidljive u `/chat` na karti)

Ovi podaci **nisu privatni** — svatko na internetu može pristupiti karti i vidjeti ih.

## Svrha obrade i pravna osnova

Podaci se obrađuju radi:

- prikaza pokrivenosti i topologije CroMesh mreže na javnoj karti,
- dijagnostike i planiranja mreže od strane zajednice.

Pravna osnova je **privola** — podaci se objavljuju isključivo ako korisnik sam
uključi *OK to MQTT* i *Uplink* na svom uređaju te postavi poziciju. Isključivanjem
tih postavki node prestaje slati podatke na `mqtt.cromesh.eu`.

## Primatelji podataka

- **`mqtt.cromesh.eu`** — MQTT server zajednice.
- **[map.cromesh.eu](https://map.cromesh.eu)** — javno dostupna karta (Meshview),
  vidljiva bilo kome bez prijave.
- Podaci se paralelno mogu pojaviti i na službenom `mqtt.meshtastic.org` / drugim
  javnim Meshtastic kartama, ovisno o postavkama uređaja — to je izvan kontrole
  CroMesh zajednice.

## Prijenos podataka izvan EU/EGP

`mqtt.cromesh.eu` hostan je unutar EU. Ako koristiš i službeni `mqtt.meshtastic.org`
ili druge treće servise, provjeri njihove uvjete — CroMesh nema kontrolu nad njima.

## Razdoblje čuvanja

Node-ovi koji se ne čuju **7 dana** automatski se uklanjaju s karte. Isključivanje
prijave pozicije sprječava ponovni prikaz.

## Tvoja prava

Kao ispitanik imaš pravo na:

- **pristup** svojim podacima,
- **ispravak** netočnih podataka,
- **brisanje** ("pravo na zaborav"),
- **ograničenje obrade**,
- **prigovor** na obradu,
- **prenosivost** podataka.

Budući da su podaci koje šalješ na kartu pod tvojom izravnom kontrolom (Long Name,
pozicija, MQTT postavke), najbrži način ostvarivanja ovih prava je **isključivanje
odgovarajuće postavke na vlastitom uređaju** (vidi [MQTT postavke](mqtt/index.md)).
Za sve ostalo, obrati se kontaktu naznačenom gore.

## Pravo na pritužbu

Ako smatraš da je obrada tvojih podataka u suprotnosti s GDPR-om, imaš pravo podnijeti
pritužbu nadzornom tijelu:

**Agencija za zaštitu osobnih podataka (AZOP)**
Ulica Metela Ožegovića 16, HR-10000 Zagreb
Tel: +385 (0)1 4609-000
E-mail: azop@azop.hr
Web: [azop.hr](https://azop.hr)

## Kolačići i analitika na docs.cromesh.eu

Ova dokumentacijska stranica (MkDocs Material) ne koristi kolačiće za praćenje niti
alate poput Google Analyticsa. Pretraga radi lokalno u tvom pregledniku.

## Preporuka za korisnike

Ako ne želiš da tvoja GPS pozicija ili ime budu javno vidljivi:

- ne uključuj *OK to MQTT* i *Uplink* na kanalu koji se prijavljuje na
  `mqtt.cromesh.eu`, ili
- koristi pseudonim umjesto stvarnog imena u Long Name / Short Name polju, ili
- ne postavljaj fiksnu poziciju / isključi dijeljenje GPS-a.

## Izmjene ove stranice

Ova stranica može se mijenjati. Datum zadnje izmjene vidljiv je u
[povijesti commitova na GitHubu](https://github.com/cromesh/docs.cromesh.eu/commits/master/docs/privatnost.md).
