---
title: Punjenje i oživljavanje 18650 Li-ion ćelija
description: Kratke upute za sigurno oživljavanje i punjenje duboko ispražnjenih 18650 ćelija.
tags:
  - hardver
  - baterije
---

# <font color="#50EB97">Punjenje i oživljavanje 18650 Li-ion ćelija</font>

!!! warning
    Kod sumnje u stanje ili povijest ćelije, sigurnije je reciklirati je nego
    pokušati oživljavanje.

## Kada oživljavati

- **Iznad ~0,2V** — razuman kandidat za oživljavanje.
- **Točno 0,0V** — vjerojatno trajno aktivirana unutarnja zaštita, baciti.
- **Bila ispod ~1,5V dulje od tjedan dana** — ne oživljavati (rizik unutarnjeg
  kratkog spoja).
- **Vidljivo oštećenje** (probušeno kućište, ulubljenje, napuhanost, korozija) —
  nikad ne oživljavati.

## Postupak

1. Nakratko (~15 s) spojiti niskonaponski izvor (5V, struja ograničena na
   10–100mA) na kontakte ćelije — pazeći na polaritet (+ na vrh, − na kućište).
2. Odspojiti i izmjeriti napon u mirovanju.
3. Ponavljati dok napon ne dosegne ~3,6–3,9V, zatim nastaviti standardnim
   punjačem.

Neki punjači (XTAR, Nitecore i slični) imaju ugrađen način "aktivacija na 0V" /
"boost" koji ovo radi automatski.

## Punjenje

CC-CV do 4,20V (±0,05V). Nikad ne ostavljati na trajnom trickle punjenju nakon
pune napunjenosti.

## Unutarnji otpor

| Unutarnji otpor | Stanje ćelije |
|---|---|
| ~50–100 mΩ | Zdrava / kao nova |
| 100–250 mΩ | Korištena, ali upotrebljiva |
| 250–400 mΩ | Granično |
| preko 400 mΩ | Istrošena |

## Skladištenje

Za dugoročno skladištenje: napon mirovanja ~3,7–3,9V.

*Hobbyist priručnik, ne sigurnosna certifikacija.*
