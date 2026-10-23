---
title: Meshtastic i MeshCore zajedno
description: Razlike između Meshtastica i MeshCorea i kratka usporedba; mogu li isti uređaj i antena koristiti Meshtastic i MeshCore istodobno, izvedbe s dvostrukim nodom i (ne)mogućnost izravne komunikacije dvaju protokola.
tags:
  - MeshCore
  - Hardware
---

# Meshtastic i MeshCore zajedno

## Razlika između Meshtastic-a i MeshCore-a

Najveća razlika je u načinu usmjeravanja poruka.

**Meshtastic** koristi "managed flood": svaki uređaj u ulozi Client prima i prosljeđuje
tuđe poruke. Mreža je jednostavna za postavljanje i otporna, ali u gušćim mrežama može
povećati zauzeće radio-kanala.

**MeshCore** razdvaja uloge: obični uređaji (Companion) ne prosljeđuju tuđe poruke, to rade
samo namjenski postavljeni repetitori. Mreža je tiša i predvidljivija, ali traži pažljivije
planiranje pokrivenosti repetitorima. Detalji su u [Postavkama](postavke.md#usmjeravanje-poruka-u-meshcoreu).

## Kratki pregled razlika

| | Meshtastic | MeshCore |
|---|---|---|
| Usmjeravanje | Flooding, uz ograničenje hopova (zadano 3) | Prvi put flood, zatim se pamti put |
| Repetitori | Prosljeđuju poruke po pravilima flood-a | Prosljeđuju samo ako su na putu poruke |
| MQTT | Uplink na kartu i nadzor | Nema ugrađenog MQTT-a (mreža radi bez interneta); observeri mogu slati pakete na MQTT, vidi [Povezivanje i observeri](postavke.md#povezivanje-mreze-i-observeri) |
| Hardver | Isti moduli (npr. XIAO nRF52 + Wio-SX1262, Heltec V4) | Isti moduli, drugi firmware |

> **Napomena:** Zajednica nije jedinstvena u ocjeni koji je protokol "bolji". Dio članova
> izvještava o znatno boljoj isporuci poruka na MeshCoreu u gustim mrežama (npr. Osijek),
> a dio navodi prednosti Meshtastica u izvanrednim situacijama i veću zajednicu.
> Dokumentacija ostaje neutralna.

## Mogu li isti uređaj i ista antena koristiti oba protokola istodobno?

**Ne.** Protokoli rade s različitim LoRa parametrima (bandwidth, spreading factor,
coding rate), a radio ne može istodobno slušati dvije konfiguracije. Postoje:

- **Dual-boot firmware** za Heltec V4 (prebacivanje na pokretanju, ne istodobno),
- **dva odvojena modula u istom kućištu** (npr. 2 × XIAO nRF52 + Wio-SX1262 s jednim
  solarom i baterijom).

Dijeljenje jedne antene preko razdjelnika nije praktično jer su frekvencije preblizu.

**Preporuka:** kanali Meshtastica i MeshCorea se preklapaju, pa je između dvije antene
potrebna visinska razlika od najmanje **1,5 m**.

## Mogu li MeshCore i Meshtastic međusobno razgovarati?

**Ne izravno.** Isti su na fizičkom sloju (LoRa) i rade na istom hardveru, ali protokoli
međusobno nisu kompatibilni. Neka mjesta u mreži zato imaju dvostruke nodove: dva noda, na
svakom po jedan sustav. Vidi [Infrastruktura](../mreza/infrastruktura.md#slavonija-i-podravina).

<figure class="cromesh-doc-photo">
  <img src="../../assets/images/meshcore-meshtastic-dva-noda.jpg" alt="Dva kućišta nodova montirana jedno uz drugo na istom stupu rukohvata, s antenom" loading="lazy">
  <figcaption>Zagreb router by Zrinko</figcaption>
</figure>

---

!!! info "Napomena o neovisnosti"
    docs.cromesh.eu je neovisan projekt i nije povezan s tvrtkom MeshCore Technologies
    Limited niti službenim MeshCore timom; „MeshCore” je naziv njegovih vlasnika. Sadržaj
    se pruža „kakav jest”, bez jamstva, a mjerodavna je službena dokumentacija na
    [docs.meshcore.io](https://docs.meshcore.io/). Cjelovita
    [pravna napomena](poveznice.md#napomena-o-neovisnosti-zigu-i-licenci).
