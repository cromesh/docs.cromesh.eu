---
title: MeshCore u CroMeshu
description: Pregled MeshCore protokola u CroMesh zajednici — što je MeshCore, razlike prema Meshtasticu i kratka usporedba dvaju protokola.
tags:
  - MeshCore
  - Početnici
---

# MeshCore u CroMeshu

CroMesh je zajednica koja razvija i Meshtastic i MeshCore mrežu. Obje se razvijaju
**paralelno** i nijedna nije obvezna. Prednosti pojedinog protokola ovise o načinu
korištenja.

## Što je MeshCore?

MeshCore je lagan sustav za sigurnu tekstualnu komunikaciju putem LoRa radija na
868 MHz. Svaki node u Hrvatskoj može biti dio mreže, a repetitori prosljeđuju poruke
dalje — bez centralnog operatera i bez internetske veze.

Poput Meshtastica, MeshCore omogućuje autonomnu komunikaciju između node-ova. MeshCore
mreža trenutačno se razvija i gradi na području Republike Hrvatske.

Sudjelovanje nije vezano uz jedan protokol: korisnici mogu odabrati Meshtastic ili
MeshCore prema vlastitim potrebama i preferencijama, a moguće je koristiti oba protokola
na neovisnim uređajima.

## Razlika između Meshtastic-a i MeshCore-a

Najveća razlika je u načinu usmjeravanja poruka.

**Meshtastic** koristi tzv. "managed flood" routing — svaki uređaj u ulozi Client prima
i prosljeđuje tuđe poruke. To mrežu čini jednostavnom za postavljanje i vrlo otpornom,
ali može povećati zauzeće radio-kanala u gušćim mrežama.

**MeshCore** razdvaja uređaje po ulogama: obični uređaji (Companion) ne prosljeđuju tuđe
poruke, već to rade isključivo namjenski postavljeni repetitori. Rezultat je tiša i
predvidljivija mreža, ali uz potrebu za pažljivijim planiranjem pokrivenosti repetitorima.

Oba protokola su otvorenog koda i mogu raditi na istom LoRa hardveru, ali
**međusobno nisu kompatibilna**.

## Kratki pregled razlika

| | Meshtastic | MeshCore |
|---|---|---|
| Usmjeravanje | Flooding, uz ograničenje hopova (zadano 3) | Prvi put flood, zatim se pamti put |
| Repetitori | Prosljeđuju poruke po pravilima flood-a | Prosljeđuju samo ako su na putu poruke |
| MQTT | Uplink na kartu i nadzor | Nema MQTT-a (mreža je namijenjena radu bez interneta) |
| Hardver | Isti moduli (npr. XIAO nRF52 + Wio-SX1262, Heltec V4) | Isti moduli, drugi firmware |

> **Napomena:** Zajednica nije jedinstvena u ocjeni koji je protokol "bolji". Dio članova
> izvještava o znatno boljoj isporuci poruka na MeshCoreu u gustim mrežama (npr. Osijek),
> a dio navodi prednosti Meshtastica u izvanrednim situacijama i veću zajednicu.
> Dokumentacija ostaje neutralna.

## Što se nalazi u ovom tabu

- **[Usmjeravanje](usmjeravanje.md)** — kako MeshCore pronalazi i pamti put poruke
- **[Postavke](postavke.md)** — preporučene postavke za CroMesh i imenovanje repetitora
- **[Meshtastic i MeshCore](meshtastic-i-meshcore.md)** — rad oba protokola na istom
  uređaju i (ne)mogućnost međusobne komunikacije
- **[Povezivanje i observeri](povezivanje-i-observeri.md)** — spajanje udaljenih dijelova
  mreže i observeri
- **[Poznati problemi](problemi.md)**
- **[Poveznice i pravna napomena](poveznice.md)** — MeshCore HR, karte, alati, licenca

Poznati MeshCore repetitori u Hrvatskoj navedeni su na stranici
[Infrastruktura](../mreza/infrastruktura.md).

> Pravna napomena o neovisnosti, žigu i licenci nalazi se na stranici
> [Poveznice i pravna napomena](poveznice.md#napomena-o-neovisnosti-zigu-i-licenci).
