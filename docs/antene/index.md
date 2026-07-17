---
title: Antene
description: Vodič za odabir 868 MHz antena za Meshtastic — testirani modeli u CroMesh mreži, SWR, montaža i zakonska ograničenja ERP-a.
tags:
  - Osnove
  - Omni
  - Yagi
---

# <font color="#50EB97">Antene</font>

Antena i njezina **visina** važnije su od uređaja. Osnovno pravilo zajednice: visina +
linija optičke vidljivosti (LOS) + okomita montaža.

## Testirani i preporučeni modeli

| Antena | Dobitak | Cijena (okvirno) | Iskustvo zajednice |
|---|---|---|---|
| **MikroTik 868 Omni** | 6,5 dBi | ~50 € | **Najbolji rezultati u praksi** — referentna antena mreže (višestruko uspoređivana s drugima na istim pozicijama). Dostupna u HR (getic.com, adm.hr) |
| **Interline Horizon 868 Helium** | 8 dBi | — | Solidna, korištena na više nodeova; dostupna u HR (uzishop.hr, makromedia.hr) |
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
4. Konektore i spojeve **zabrtvi** — vidi [Montaža i zaštita](../hardver/montaza-i-zastita.md).

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

TODO: dodati tablicu preporučenih pigtailova i kabela s konkretnim linkovima (u grupi
dijeljeno više AliExpress linkova — potrebno ih je verificirati prije uvrštavanja).
