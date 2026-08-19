---
title: Antene
description: Vodič za odabir 868 MHz antena za Meshtastic — testirani modeli u CroMesh mreži, SWR, montaža i zakonska ograničenja ERP-a.
tags:
  - Osnove
  - Omni
  - Yagi
---

# <font color="#50EB97">Antene</font>

## Antene – kako odabrati antenu prema SWR-u i dBi

Pri odabiru antene nije dovoljno gledati samo njezinu frekvenciju ili nazivni dobitak. Važno je razumjeti nekoliko osnovnih karakteristika, prije svega **SWR/VSWR**, **impedanciju** i **dobitak antene izražen u dBi**.

## SWR – prilagodba antene

**SWR (Standing Wave Ratio)**, odnosno omjer stojnog vala, opisuje koliko je dobro antena prilagođena RF sustavu na određenoj frekvenciji. Kod većine suvremenih RF uređaja ciljana impedancija sustava iznosi **50 Ω**.

Općenito vrijedi: **što je SWR manji, to je prilagodba bolja**. Manji SWR znači da se manji dio odašiljane snage reflektira natrag prema odašiljaču.

Orijentacijske vrijednosti su:

- **1,0:1** – idealna prilagodba
- **1,2:1** – izvrsna prilagodba
- **1,5:1** – vrlo dobra prilagodba
- **2,0:1** – često prihvatljivo
- **3,0:1 i više** – loša prilagodba

### Važno kod SWR-a

SWR uvijek treba promatrati u odnosu na **frekvenciju**. Niska vrijednost SWR-a bez navedene frekvencije nije osobito korisna informacija.

Pri odabiru antene provjerite je li navedeni SWR/VSWR izmjeren upravo na vašoj radnoj frekvenciji ili barem unutar frekvencijskog raspona koji obuhvaća vašu radnu frekvenciju.

## dBi – dobitak antene

**dBi** označava dobitak antene u odnosu na idealni izotropni izvor zračenja.

Veći dobitak ne znači da antena stvara dodatnu snagu. Antena samo **raspoređuje odnosno koncentrira zračenje u određenim smjerovima**.

Kao praktično pravilo:

- **manji dBi** → šire područje pokrivanja i širi obrazac zračenja
- **veći dBi** → usmjerenije i uže područje pokrivanja

Međutim, sam podatak o dBi-ju nije dovoljan za potpuno razumijevanje karakteristika antene. Na stvarni obrazac zračenja utječu i **širina snopa (beamwidth)** te **orijentacija antene**.

## Što provjeriti pri kupnji antene?

| Specifikacija | Što tražiti | Zašto je važno |
|---|---|---|
| **Frekvencija** | Vaš stvarni radni frekvencijski pojas | Osigurava da je antena predviđena za vašu primjenu |
| **Impedancija** | **50 Ω** | Odgovara uobičajenom RF sustavu, odašiljaču i koaksijalnom vodu |
| **VSWR / SWR** | Po mogućnosti **≤ 1,5:1** na vašoj frekvenciji | Ukazuje na dobru impedancijsku prilagodbu |
| **Dobitak** | Odaberite prema potrebnom području pokrivanja | Veći dobitak općenito znači usmjerenije zračenje |
| **Konektor** | Kompatibilan s uređajem i kabelom | Izbjegava potrebu za adapterima i moguće mehaničke probleme |

## Primjer: antena za 433 MHz

Za uređaj koji radi na **433 MHz**, primjer odgovarajuće specifikacije mogao bi biti:

**Frekvencija:** 400–470 MHz  
**Impedancija:** 50 Ω  
**VSWR:** ≤ 1,5:1  
**Dobitak:** 2–3 dBi

Takve specifikacije pokazuju da je antena predviđena za navedeni frekvencijski pojas, prilagođena uobičajenom sustavu impedancije od 50 Ω te da pruža relativno široko područje pokrivanja.

## Ukratko

**SWR = prilagodba**  
Što je SWR niži, to je prilagodba općenito bolja. Uvijek provjerite SWR na svojoj radnoj frekvenciji.

**dBi = dobitak**  
Veći dBi općenito znači izraženije usmjereno zračenje, dok manji dBi obično daje šire pokrivanje.

**50 Ω = uobičajena impedancija RF sustava**  
To je tipična ciljana impedancija za RF odašiljače, koaksijalne kabele i antene.

## Antena u stvarnoj ugradnji

Podatak o SWR-u naveden u specifikaciji antene ne mora biti jednak rezultatu nakon ugradnje u stvarni uređaj.

Na konačne karakteristike antennog sustava mogu utjecati:

- PCB vodovi i njihova izvedba
- konektori
- kućište uređaja
- uzemljivačka odnosno referentna ploha (*ground plane*)
- metalni predmeti u blizini antene
- položaj i orijentacija antene

Zbog toga je pri odabiru antene važno promatrati **antenu i uređaj kao cjelokupan RF sustav**, a ne samo pojedinačnu vrijednost iz kataloga.


Antena i njezina **visina** važniji su od uređaja. Osnovno pravilo zajednice: visina +
linija optičke vidljivosti (LOS) + okomita montaža.

## Testirani i preporučeni modeli

| Antena | Dobitak | Cijena (okvirno) | Iskustvo zajednice |
|---|---|---|---|
| **MikroTik 868 Omni** | 6,5 dBi | ~50 € | **Najbolji rezultati u praksi** — referentna antena mreže (višestruko uspoređivana s drugima na istim pozicijama). Dostupna u HR (getic.com, adm.hr) |
| **Interline Horizon 868 Helium** | 8 dBi | — | Solidna, korištena na više node-ova; dostupna u HR (uzishop.hr, makromedia.hr) |
| **Alfa 868 omni / kit** | 5–10 dBi | — | Renomirani proizvođač; kvaliteta opravdava cijenu |
| **TX868-BLG-40** | — | ~13 € | Povoljna opcija |
| **Gizont (AliExpress)** | — | jeftino | Reputabilniji kineski proizvođač; 20 cm verzija dobra za T-Echo/mobilne; 55 cm verzije OK |
| **Ziisor 55 cm (AliExpress)** | — | jeftino | OK; **kineske antene kraće od 50 cm — loše** |
| **Seeed fiberglass 3 dBi (360 mm)** | 3 dBi | — | Razočaravajuća u praksi (iskustvo člana) |
| **Stock spring antena** | ~2 dBi | u paketu | Za početak sasvim dovoljna: 1–2 km kroz zgrade i drveće |
| **Yagi (usmjerena)** | visok | — | Za point-to-point linkove prema udaljenom omni routeru; kalkulator: DL6WU (changpuak.ch); na Aliju postoje 868 yagice s SWR 1.1 |

> **Napomena:** Deklarirani dobitak kineskih antena često je precijenjen ("8 dBi" je
> realno ~6). Ista serija istog prodavača zna imati primjerke ugođene na 912 MHz umjesto
> 868 MHz — razlika od 2 mm na vrhu elementa pomiče rezonanciju.

## SWR — jedina metrika koja se isplati mjeriti

- **SWR (stojni valovi) na 868 MHz** je ključni pokazatelj je li antena dobra; deklaracije
  proizvođača nisu pouzdane.
- Mjeri se **NanoVNA** analizatorom (povoljan uređaj; više članova zajednice ga ima —
  pitaj u grupi prije kupnje nove antene).
- Antena se može i ručno ugoditi skraćivanjem elementa milimetar po milimetar do
  prihvatljivog SWR-a na 868–869,5 MHz.
- Samogradnja je legitimna opcija — poluvalni dipol za 868 MHz (ukupna duljina ~164 mm
  praktično) uz SWR metar daje vrlo upotrebljive rezultate uz minimalan trošak.

## Montaža

1. **Okomito** — svaka kosa montaža direktno smanjuje domet (možeš "pucati na Mjesec"
   pod 5°, a ispod antene imati tišinu). Antene visokog dobitka (dugačke) imaju spljošten
   dijagram zračenja pa je okomitost još kritičnija.
2. **Što više** — iznad sljemena krova; visina tipično donosi više od skupljeg uređaja.
3. Dijagram zračenja: viši dobitak = energija usmjerena horizontalno umjesto u nebo —
   zato duža antena "radi" kao veća snaga.
4. Zabrtvi konektore i spojeve! — vidi [Montaža i zaštita](../hardver/montaza-i-zastita.md).

## Zakonsko ograničenje snage (ERP)

> **Upozorenje:** Zakonski limit u podpojasu koji koristi LongFast je **27 dBm (500 mW)
> ERP**. ERP = snaga predajnika + dobitak antene − gubici kabela. Uređaj na 22 dBm s
> antenom od 10 dBi daje 32 dBm ERP — **debelo preko zakonskog limita**. Uz antene
> visokog dobitka smanji TX snagu uređaja. Vidi [Pravila](../zajednica/pravila.md).

## Kabeli i konektori

- Pripazi na tip konektora pri kupnji: SMA vs RP-SMA, N-tip za vanjske antene, U.FL/IPEX
  pigtailovi za module — krivi konektor je najčešća greška prve narudžbe.
- Svaki dodatni adapter i metar lošeg kabela = gubitak; na 868 MHz koristi što kraći
  kvalitetan kabel.

Tablica preporučenih pigtailova i kabela s provjerenim linkovima trenutno se
ne održava — provjeri topic **Hardware preporuke** u Telegram grupi za trenutne
preporuke i iskustva zajednice.
