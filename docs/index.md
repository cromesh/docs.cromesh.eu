---
title: Dobrodošli u CROMESH dokumentaciju
description: Službena dokumentacija za CROMESH — sustav temeljen na Meshtastic tehnologiji.
tags:
  - CROMESH
  - Dokumentacija
  - Meshtastic
  - MeshCore
hide:
  - navigation
---

# <font color="#50EB97">Dobrodošli u CroMesh dokumentaciju</font>

Ovdje se nalaze svi priručnici, vodiči i tehničke upute za CroMesh.  
Možete slobodno preporučiti promjene u dokumentaciji na github.

**CroMesh** je hrvatska zajednica [Meshtastic](https://meshtastic.org) entuzijasta koja gradi
decentraliziranu, off-grid LoRa mesh mrežu na području Republike Hrvatske. Mreža radi na
**868 MHz ISM pojasu (regija EU_868)** i za korištenje **nije potrebna radioamaterska dozvola**.

!!! info ""
    cromesh.eu i docs.cromesh.eu su neovisni, neslužbeni projekti CroMesh zajednice i
    nisu službeno povezani s niti odobreni od strane Meshtastic LLC. "Meshtastic®" je
    registrirani zaštitni znak tvrtke Meshtastic LLC.

<div class="grid cards" markdown>

-   :book:{ .lg .middle } __Uvod u 5 minuta__

    ---

    Pogledaj naš kratki uvod u Meshtastic i nauči o čemu se radi.

    [:octicons-arrow-right-24: Uvod u Meshtastic](uvod.md)

-   :gear:{ .lg .middle } __Preporučene postavke za Hrvatsku__

    ---

    Osnovne postavke uz koje ćeš lako započeti svoju Meshtastic priču u Hrvatskoj.

    [:octicons-arrow-right-24: Postavke](postavke/index.md)

-   :computer:{ .lg .middle } __Odabir uređaja__

    ---

    Ako nemaš uređaj odaberi koji ti odgovara, i kupi, recimo za početak neki od
    gotovih KIT-ova.

    [:octicons-arrow-right-24: Odabir Uređaja](odabir-uredaja/index.md)

-   :map:{ .lg .middle } __Karta CroMesh__

    ---

    Pogledaj našu kartu i vidi gdje je sve prisutan CroMesh.

    [:octicons-arrow-right-24: CroMesh Map](https://map.cromesh.eu/)

</div>

## Naše poveznice

| Resurs | Adresa | Opis |
|---|---|---|
| Glavni web | [cromesh.eu](https://cromesh.eu) | Predstavljanje zajednice |
| Dokumentacija | [docs.cromesh.eu](https://docs.cromesh.eu) | Ova stranica |
| Karta mreže | [map.cromesh.eu](https://map.cromesh.eu) | Meshview instanca — node-ovi, paketi, chat |
| MQTT server | `mqtt.cromesh.eu` | Zajednički MQTT za kartu i gateway node-ove |
| GitHub | [github.com/cromesh/docs.cromesh.eu](https://github.com/cromesh/docs.cromesh.eu) | Izvor ove dokumentacije — PR-ovi su dobrodošli |
| Telegram | [t.me/+q1MRpiblCNswNDlk](https://t.me/+q1MRpiblCNswNDlk) | Poveznica za ulaz u Telegram grupu |
| MeshCore HR | [meshcore.com.hr](https://meshcore.com.hr/) | Hrvatska MeshCore zajednica |
| MeshCore HR karta | [map.meshcore.com.hr](https://map.meshcore.com.hr/) | Karta MeshCore Hrvatska |

## Brzi start u 5 koraka

1. **Nabavi uređaj** — za početnike preporučujemo uređaje s **nRF52** čipom (štedljiviji) ili
   Heltec V3 kao najjeftiniji ulaz. Vidi [Odabir uređaja](odabir-uredaja/index.md).
2. **Flashaj firmware** — putem [flasher.meshtastic.org](https://flasher.meshtastic.org)
   (Chrome/Edge, USB kabel). Vidi [Prvi koraci](postavke/prvi-koraci.md).
3. **Postavi regiju na `EU_868`** — bez toga uređaj ne odašilje.
4. **Ostani na zadanom presetu `LongFast`** — to je dogovoreni standard mreže
   (vidi [Standardi mreže](mreza/standardi.md)) i dodaj sekundarni kanal
   [cromesh.eu](mreza/kanali.md).
5. **(Opcionalno) Spoji se na MQTT** da se tvoj node pojavi na
   [karti](mqtt/index.md).

> **Napomena:** Ako imaš pitanja, slobodno pitaj u Telegram grupi — zajednica je aktivna i
> rado pomaže novim članovima. Prije pitanja preporučujemo pregledati [Česta pitanja](faq.md).
