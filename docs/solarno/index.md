---
title: Solarni uređaji
description: Napajanje Meshtastic nodeova — 18650 baterije, BMS zaštita, MPPT solarni regulatori (CN3791) i punjenje litijskih baterija na niskim temperaturama.
tags:
  - Hardver
  - Uređaji
  - Solar
  - Battery
---

# <font color="#50EB97">Solarni uređaji</font>

## Baterije

Standard zajednice za autonomne nodeove: **18650 Li-Ion ćelije** (jedna ili dvije u
paraleli).

| Preporučena ćelija | Kapacitet | Zašto |
|---|---|---|
| Sanyo UR18650ZM2 | 2420 mAh | Prošireni temperaturni raspon (−20 do +60 °C) — bitno za vanjske nodeove |
| Panasonic NCR18650B | 3400 mAh | Prošireni temperaturni raspon; veći kapacitet |

- Uzimaj ćelije s deklariranim proširenim temperaturnim rasponom (dostupne npr. na
  Conradu). Takve ćelije obično **nemaju ugrađenu zaštitu** — obavezno dodaj zasebnu
  **BMS/zaštitnu pločicu** (štiti od predubokog pražnjenja i prepunjavanja).
- Iskustvena potrošnja: 2× 18650 s uključenim power save (GPS/BT/WiFi isključeni)
  ≈ 10 % dnevno; RAK4631 s GNSS + BME280 ≈ 40–45 h na jednoj staroj 18650.

> **Upozorenje — punjenje ispod 0 °C:** Li-Ion baterije **ne smiju se puniti na
> temperaturama ispod nule** (trajno oštećenje ćelije). Za zimske uvjete opcije su:
> regulator s temperaturnim senzorom koji blokira punjenje, ili grijanje kućišta prije
> punjenja. LiFePO4 je alternativa, ali traži poseban punjač, a SoC očitanje je
> nepouzdano zbog ravne krivulje napona.

## Solarni regulatori

Preporučena arhitektura autonomnog nodea: **solarni panel → MPPT regulator → baterija
(s BMS-om) → node**. Odvojeni regulator (umjesto ugrađenog na ploči nodea) pokazao se
pouzdanijim — referentni node na Cepelišu s tom kombinacijom mjesecima ne pada ispod
95 % baterije.

| Komponenta | Detalji |
|---|---|
| **CN3791 MPPT modul** | ~2,6 €; verzije za 6 V / 9 V / 12 V panele — kupi verziju koja odgovara naponu panela; najkorišteniji regulator u zajednici |
| **Zaštita baterije (BMS pločica)** | Obavezna uz nezaštićene ćelije |
| **Jači solarni regulator** | Za routere: kvalitetnija varijanta ~25 €/kom (korištena na Cepelišu) |

> **Napomena:** Kod modula temeljenih na CN37xx zabilježeni su (neprovjereni) slučajevi
> "zablokiranja" nakon dubokog pražnjenja — regulator ne nastavi punjenje povratkom
> sunca. Ako node zimi "umre", prvo provjeri regulator. TODO: potvrditi i dokumentirati
> uvjete pod kojima se to događa.

## Solarni paneli

- Za tipičan node dovoljan je panel od nekoliko W (5–10 W za router s rezervom);
  primjeri iz mreže: 12 V/10 W panel + CN3791 (12 V verzija), gotovi 868 solarni
  paneli s kućištem (~4 W) s AliExpressa, pa čak i TP-Link Tapo A200 panel (stabilna
  ~3 W).
- **RAK WisBlock base ploče imaju ugrađen solarni ulaz** — najjednostavnija integracija.
- Seeed XIAO kitovi nemaju solarni ulaz: solar ide preko vanjskog MPPT-a na bateriju,
  baterija s BMS-om na node. Pripazi: potrošnja nodea tijekom punjenja zbunjuje
  regulator pri procjeni napunjenosti.
- Neke ploče s ugrađenim kontrolerom (npr. AXP192) po testovima ne pune iznad 4,15 V —
  to je normalno i produžuje život ćelije.

## Mrežno napajanje

Za fiksne nodeove na stalnom napajanju (ESP32 + WiFi kao MQTT gateway) sasvim je u redu
običan USB adapter; baterija tada nije nužna. TODO: PoE napajanje RAK WisBlocka
spominjano je u grupi, ali bez dokumentiranog rješenja.
