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
- Ekstremi: node-ovi u zrakoplovima primani na 150+ km.
- Propagacija je navečer osjetno bolja nego danju — normalna pojava.

Domet ovisi prije svega o **visini antene i liniji optičke vidljivosti**, ne o snazi.

### Nejasnoće u Meshtastic tehnologiji

**Zašto Meshtastic ne objašnjava sam sebe dovoljno dobro?**

Iako je koncept moćan, Meshtastic je primarno projekt za hobiste, entuzijaste i
tehnički potkovane korisnike. Zbog toga, službena dokumentacija i objašnjenja često
pretpostavljaju određeno predznanje, što može biti zbunjujuće za početnike. Neke od
glavnih prepreka su:

- **Žargon i tehnički detalji** — dokumentacija koristi previše tehničkog žargona.
  Bez dovoljno objašnjenja pojmova poput LoRa, mesh networking, node-ovi, enkripcija,
  `Coding Rate` i `Spreading Factor (SF)`, korisnicima je teško razumjeti o čemu se radi.
- **Fokus na "kako" umjesto na "što"** — dokumentacija se više fokusira na to kako
  instalirati firmware, konfigurirati postavke i riješiti probleme, nego na jasno
  objašnjenje temeljnog koncepta i praktične primjene.
- **Nejasne upute za početnike** — teško je pronaći jednostavan, korak-po-korak vodič
  za nekoga tko tek ulazi u svijet Meshtastica, pogotovo u smislu što točno kupiti i
  kako početi.

Mi preporučujemo ova dva YouTube videa:

1. [Što je Meshtastic? (eng)](https://www.youtube.com/watch?v=oAo2sb8LpFc&ab_channel=TheCommsChannel)
2. [Što je Meshtastic? (eng)](https://www.youtube.com/watch?v=P9G9hR3T4po&ab_channel=323Labs)

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

### Vidim node-ove sa 5–7 hopova — je li to dobro?

Nije. Zadani hop limit je 3; veće vrijednosti nepotrebno opterećuju mrežu. Ako vidiš
takve node-ove, vjerojatno je netko podigao limit — nemoj to raditi i ti. Vidi
[Standardi](mreza/standardi.md).

### Heltec V4 mi slabo čuje s vanjskom antenom

Poznat problem revizije ploče 4.2 (šum); revizija 4.3 to rješava. Provjeri i firmware
(2.7.13+, alpha s LNA fixom). Detalji: [Odabir uređaja](odabir-uredaja/index.md).

## MQTT i karta

### Hoće li uključivanje MQTT-a napraviti kaos na mreži?

**Ne** — ako slijediš upute (samo Uplink na LongFast). Tvoj node će tada samo
prijavljivati kartu, a MQTT server ne šalje promet natrag u RF mrežu (zero-hop
politika). Vidi [MQTT i karta](mqtt/index.md).

### Ima li zajednica koristi ako uključim MQTT na kućnom node-u?

Da — tvoj node će na kartu prijaviti i sve susjede koje čuje, čime karta (i slika
stvarnog stanja mreže) postaje točnija.

### Što znače crte između node-ova na karti?

Da se ti node-ovi **relativno često čuju**. Ne znači da su u savršenom kontaktu u svakom
trenutku.

## MeshCore - kako i zašto?

### Što je MeshCore?

MeshCore je lagan sustav za sigurnu tekstualnu komunikaciju putem LoRa radija na
868 MHz. Svaki node u Hrvatskoj može biti dio mreže, a repetitori prosljeđuju poruke
dalje — bez centralnog operatera i bez internetske veze.

Poput Meshtastica, MeshCore omogućuje autonomnu komunikaciju između node-ova. MeshCore
mreža trenutačno se razvija i gradi na području Republike Hrvatske.

Sudjelovanje nije vezano uz jedan protokol: korisnici mogu odabrati Meshtastic ili
MeshCore prema vlastitim potrebama i preferencijama, a moguće je koristiti oba protokola
na neovisnim uređajima.

### Razlika između Meshtastic-a i MeshCore-a

Najveća razlika je u načinu usmjeravanja poruka.

**Meshtastic** koristi tzv. "managed flood" routing — svaki uređaj u ulozi Client prima
i prosljeđuje tuđe poruke. To mrežu čini jednostavnom za postavljanje i vrlo otpornom,
ali može povećati zauzeće radio-kanala u gušćim mrežama.

**MeshCore** razdvaja uređaje po ulogama: obični uređaji (Companion) ne prosljeđuju tuđe
poruke, već to rade isključivo namjenski postavljeni repetitori. Rezultat je tiša i
predvidljivija mreža, ali uz potrebu za pažljivijim planiranjem pokrivenosti repetitorima.

Oba protokola su otvorenog koda i mogu raditi na istom LoRa hardveru, ali
**međusobno nisu kompatibilna**.

### Poveznice

| Resurs | Adresa | Opis |
|---|---|---|
| MeshCore HR | [meshcore.com.hr](https://meshcore.com.hr/) | Hrvatska MeshCore zajednica |
| MeshCore HR karta | [map.meshcore.com.hr](https://map.meshcore.com.hr/) | Karta MeshCore mreže u Hrvatskoj |

### Napomena o neovisnosti, žigu i licenci

!!! note "MeshCore — pravna napomena"
    **Neovisnost i žig:** Naziv „MeshCore”, logotipi i povezani vizualni identiteti
    pripadaju svojim autorima, vlasnicima žigova i doprinositeljima zajednici.
    docs.cromesh.eu je neovisan projekt i nije povezan, podržan niti službeno povezan
    s tvrtkom MeshCore Technologies Limited, službenim razvojnim timom na meshcore.io
    niti bilo kojim drugim komercijalnim subjektom koji djeluje pod imenom MeshCore.
    Nazivi i logotipi koriste se isključivo radi identifikacije i edukacije.

    **Otvoreni kod:** MeshCore softver i protokol izvorno su djelo Scotta Powella i
    suradnika iz zajednice te se distribuiraju pod [MIT licencijom](https://github.com/meshcore-dev/MeshCore/blob/main/license.txt).
    Korištenjem, izmjenom ili distribucijom koda treba zadržati izvorne napomene o
    autorskim pravima u skladu s uvjetima licence.

    **Isključenje jamstva i odgovornosti:** Softver, firmware i informacije na ovoj
    stranici pružaju se u obliku „kakvi jesu” (AS IS), bez jamstava. Autori ove
    dokumentacije i vlasnici autorskih prava ne odgovaraju za štetu, gubitak podataka
    ili kvarove hardvera nastale korištenjem materijala ili koda sa stranice.

## Ostalo

### Koliko traje baterija?

Ovisi o uređaju i postavkama; iskustvene brojke: 2× 18650 uz power save ≈ 10 %/dan;
RAK4631 s GNSS + BME280 senzorima ≈ 40–45 h na jednoj 18650. Za trajni rad — solar:
[Napajanje i solar](solarno/index.md).

### Mijenjam uređaj — mogu li prenijeti stari identitet (ID, ključeve)?

Ne preporučuje se — NodeID je vezan uz hardware i forsiranje starih ključeva izaziva
*key mismatch* upozorenja. Novi hardware = novi identitet. Vidi
[Uloge i imenovanje](mreza/uloge-i-imenovanje.md).

### Gdje mogu kupiti/prodati rabljenu opremu?

Topic **Tržnica Novo/Rabljeno** u Telegram grupi.

### Kako mogu doprinijeti ovoj dokumentaciji?

Pull requestom na
[github.com/cromesh/docs.cromesh.eu](https://github.com/cromesh/docs.cromesh.eu) —
posebno su dobrodošle dopune otvorenih pitanja (npr. postavljanje na javne/državne
objekte, PoE napajanje, materijali za 3D print) navedenih kroz dokumentaciju.
