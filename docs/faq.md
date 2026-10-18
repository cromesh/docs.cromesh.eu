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

## Snaga, regulativa i propusnost

### Koja je najveća dopuštena snaga?

Meshtastic dokumentacija navodi za EU 868 MHz maksimalnih **+27 dBm ERP (500 mW)**.
Standardni SX1262 moduli daju 22 dBm (oko 160 mW). Veća snaga nije nužno bolja: važniji su
visina i optička vidljivost, kvaliteta antene, a tek zatim snaga. Jači nodovi znatno više
troše. Vidi [Pravila](zajednica/pravila.md) i
[Antene](antene/index.md#zakonsko-ogranicenje-snage-erp).

<!-- TODO: potvrditi s HAKOM-om / nacionalnom regulativom (u chatu se pojavila i tvrdnja o 25 mW). Dodati točan propis i frekvencijsku podjelu. -->

### Postoji li ograničenje zauzeća kanala (duty cycle)?

U raspravi je navedeno da je u EU za ovaj dio spektra dopušten duty cycle od oko 10%.
Vidi [Pravila](zajednica/pravila.md#ogranicenja-koja-moras-postovati).

<!-- TODO: potvrditi izvorom (ETSI EN 300 220 / HAKOM) prije objave. -->

### Može li se preko LoRa slati slike, audio ili veće datoteke?

U praksi ne. Prema procjenama članova, LongFast ima sirovu propusnost od oko 1 kB/s, uz
duty cycle od 10% to je oko 100 B/s za jedan uređaj, a uz protokolarni overhead i
retransmisije realno **ne više od 30 bps** u idealnim uvjetima. Prikladne su kratke
tekstualne poruke i telemetrija. Eksperimenti s kompresijom (Codec2, EnCodec) opisani su
samo kao istraživački.

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

### Zašto se moj node na karti nalazi kraj afričke obale (koordinate 0°, 0°)?

To je tzv. *Null Island*. Node je izgubio ili obrisao GPS koordinate pa se prijavljuje s
0,0. Postavi fiksnu lokaciju ili provjeri GPS.

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

Više slučajeva (resetiranje, Bluetooth, firmware, test dometa):
[Rješavanje problema](rjesavanje-problema.md).

## Poruke i potvrde isporuke

### Što znači kvačica ili ikona potvrde uz poruku?

Potvrda u aplikaciji znači da je tvoj node **čuo da je barem jedan drugi node proslijedio
poruku**. To ne znači da je poruka stigla na odredište. Pojedinog "slušatelja" ne možeš
vidjeti, a za provjeru puta možeš koristiti *traceroute*.

### Zašto piše "Max Retransmission Reached" i prikazuje se uskličnik?

Node je poslao poruku i nije dobio nikakvu potvrdu (ACK) da ju je netko čuo. Najčešće nema
nikoga u dometu. Provjeri radi li poruka na `LongFast` kanalu i pojavljuje li se na
[map.cromesh.eu/chat](https://map.cromesh.eu/chat).

### Poruka je prošla, a traceroute nije. Je li to greška?

Ne nužno. Traceroute se ponaša drukčije od običnih poruka, a prolaznost u mreži varira od
trenutka do trenutka. Isti put može jednom proći, a nekoliko sekundi kasnije ne.

### Kako najjednostavnije provjeriti čuje li me netko?

Pošalji poruku na javni `LongFast` kanal ili na zajednički test kanal. Ako se pojavi oznaka
da je neki repetitor čuo poruku, doseg postoji. Ne moraš nikoga posebno pitati. Više o
alatima: [Mapiranje i nadzor](mapiranje/index.md).

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

## Uloge noda

### Koju ulogu (role) postaviti?

Kratko:

- **Client** je zadana opcija za osobne i prijenosne uređaje.
- **Client Base** je za fiksne nodove na krovu ili kući. Dobro ga je koristiti kad si i sam
  spojen na taj node.
- **Router** je samo za strateške lokacije (npr. vrhovi, tornjevi) na kojima postoji velik
  broj nodova u dometu.

Detalji su u [Uloge i imenovanje](mreza/uloge-i-imenovanje.md).

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

## MeshCore

Sve o MeshCoreu — što je, razlike prema Meshtasticu, usmjeravanje, preporučene postavke,
poveznice i pravna napomena — nalazi se u zasebnom tabu
[MeshCore](meshcore/index.md).

### Što je MeshCore?

Lagan sustav za sigurnu tekstualnu komunikaciju putem LoRa radija na 868 MHz, bez
centralnog operatera i bez internetske veze. Pregled: [MeshCore u CroMeshu](meshcore/index.md).

### Mogu li isti uređaj i ista antena koristiti oba protokola istodobno?

**Ne.** Protokoli rade s različitim LoRa parametrima, a radio ne može istodobno slušati
dvije konfiguracije. Dual-boot firmware i dva odvojena modula u istom kućištu:
[Meshtastic i MeshCore zajedno](meshcore/meshtastic-i-meshcore.md).

### Mogu li MeshCore i Meshtastic međusobno razgovarati?

**Ne izravno.** Kompatibilni su na fizičkom sloju (LoRa), ali ne na razini protokola.
Detalji: [Meshtastic i MeshCore zajedno](meshcore/meshtastic-i-meshcore.md).

### Poveznice i pravna napomena

[MeshCore HR, karte i alati, licenca i isključenje odgovornosti](meshcore/poveznice.md).
