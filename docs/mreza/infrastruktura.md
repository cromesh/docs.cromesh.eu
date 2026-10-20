---
title: Infrastruktura — poznati routeri i repetitori
description: Poznati fiksni routeri i repetitori CroMesh mreže (Meshtastic i MeshCore) — Zagreb i okolica, Velebit i Jadran, Slavonija i Podravina te lokacije u izgradnji.
tags:
  - Mreža
  - Infrastruktura
---

# Poznati fiksni routeri i repetitori

!!! note
    Popis je iz iskaza članova u grupi i nije službeni. Koordinate i status provjeriti na
    [map.cromesh.eu](https://map.cromesh.eu).

## Zagreb i okolica

| Lokacija | Protokol | Detalji |
|---|---|---|
| **Malo Sljeme** (toranj Radiokluba Zagreb) | Meshtastic | Solarni router postavljen 9. 9. 2026., node `CroMesh 9A3CYD RKZ (ZGJ3)`. Pri postavljanju bio u client modu; planirano prebacivanje na router |
| **Malo Sljeme** (isti objekt) | MeshCore | Repetitor postavljen 14. 10. 2026., `HR-ZG-M.Sljeme`, 2-bajtni path hash, CR 8 |

Prvi izvještaji nakon postavljanja Meshtastic routera: direktne veze s Donjom Dubravom,
Petrinjom i Samoborom te povremeno austrijski nodovi i slovenski nodovi.

Za MeshCore je u prvim testovima iz automobila u zagrebačkom urbanom području prolaznost
bila mala. Za pouzdan rad u pokretu bit će potrebna veća gustoća repetitora.

## Velebit i Jadran

Tri noda postavljena na Velebitu (među njima Budakovo Brdo). Prvotno su postavljeni za
potrebe speleološke ekspedicije, a konfigurirani su u ulozi routera pa sudjeluju u
cjelokupnoj mreži. Preko Budakovog Brda zabilježene su veze prema srednjoj Dalmaciji,
otocima, Istri (Pula) te izravne veze prema Italiji.

Zabilježene udaljenosti:

- oko 400 km najduža veza preko Velebita,
- Visoka (Split) – Dugi Rat oko 15 km, odnosno oko 50 km direktno s Medvednice
  prijenosnim uređajem T-Echo.

## Slavonija i Podravina

Osijek, Donji Miholjac i Slatina su primarno na MeshCoreu. Neka mjesta imaju dvostruke
nodove: dva noda, svaki sa svojim sustavom (jedan Meshtastic, jedan MeshCore). Detalji su na [map.meshcore.com.hr](https://map.meshcore.com.hr).

## Ostalo

Lokacije u izgradnji ili u testu: Krk, Rovinj, Pula, Karlovac, Varaždin.

## Povezano

- Imenovanje routera i repetitora: [Uloge i imenovanje](uloge-i-imenovanje.md) i
  [MeshCore postavke](../meshcore/postavke.md#imenovanje-repetitora).
- Pregled MeshCore mreže: [MeshCore u CroMeshu](../meshcore/index.md).
