---
title: O zajednici
description: Povijest i organizacija CroMesh zajednice — hrvatska Meshtastic mreža, Telegram grupa, infrastruktura i meetupi.
---

# O zajednici

## Kratka povijest

- **17. 8. 2025.** — osnovana Telegram grupa **"CroMesh - Meshtastic Hrvatska"**;
  početna jezgra: Petrinja, Karlovac i Vrbovec, uz postojeće entuzijaste u Osijeku.
- **Rujan 2025.** — definiran kanal zajednice `cromesh.eu`; prve propagacije između
  gradova; pokrenut web [cromesh.eu](https://cromesh.eu).
- **18. 10. 2025.** — **prvi CroMesh meetup** u Karlovcu (Prostorija, Mije Krešića 4),
  u suradnji s Karlovac Developers Group, Radioklubom Karlovac i uz podršku Carpe Diem
  Karlovac.
- **Listopad–studeni 2025.** — podignuta vlastita infrastruktura: `mqtt.cromesh.eu`,
  karta `map.cromesh.eu` i dokumentacija `docs.cromesh.eu`
  ([GitHub repo](https://github.com/cromesh/docs.cromesh.eu) — prvi vanjski PR-ovi
  mergani već u studenom).
- **Siječanj 2026.** — zajednica prelazi 50 članova; nodeovi od Slavonije do Dalmacije;
  aktivnost grupe nadmašuje globalni službeni Meshtastic kanal.
- **Ožujak 2026.** — proveden test `MEDIUM_FAST` preseta; odluka: ostanak na `LongFast`
  (vidi [Standardi](../mreza/standardi.md)).

## Infrastruktura i tko je održava

| Komponenta | Detalji |
|---|---|
| Web (cromesh.eu) | Platforma carrd.co |
| MQTT + karta + docs | Hostano kod člana zajednice u Karlovcu, objavljeno preko Cloudflare tunela |
| Dokumentacija | MkDocs / GitHub — **doprinosi kroz pull requestove su izričito dobrodošli** |
| community.cromesh.eu | U pripremi / eksperimentalno |

Infrastruktura je volonterska — bez SLA, ali s puno entuzijazma.

## Telegram grupa — organizacija po topicima

Grupa je forum s tematskim topicima. Najvažniji za snalaženje:

| Topic | Namjena |
|---|---|
| Chat | Opća rasprava (offtopic izričito dozvoljen) |
| Hardware preporuke | Preporuke uređaja, posebno za početnike |
| Software | Softverska i firmware problematika |
| Naši kanali | Službene poveznice kanala mreže |
| Testiranje opreme / Debug opreme | Tx/Rx testovi novih nodeova, rješavanje problema |
| Routeri | Infrastrukturni nodeovi |
| Tržnica Novo/Rabljeno | Kupoprodaja opreme među članovima |
| 3D printanje i design | Kućišta, nosači, dizajn |
| Zanimljivi kontakti | Zabilježeni daleki/neobični kontakti na mreži |
| Meetups | Organizacija okupljanja |
| Developer topic | Za programere (firmware, alati, integracije) |
| Random ideje | Brainstorming ("flood" tema) |
| CroMesh patent office | Razrada ideja iz brainstorminga u konkretne projekte |
| Meshcore | Rasprave o MeshCore protokolu |
| Popis članova | Adresar članova (short/long name nodeova) |

## Susjedne zajednice

CroMesh održava prijateljske odnose sa slovenskom zajednicom
([meshnet.si](https://meshnet.si), MQTT `mqtt.meshnet.si`) — iskustva slovenske mreže
(regionalni MQTT topic, organizacija) bila su uzor pri postavljanju hrvatske. Zabilježene
su i prekogranične propagacije (Slovenija, Italija, Austrija, Srbija).

## Kako se uključiti

1. Pridruži se Telegram grupi (TODO: javni pozivni link).
2. Predstavi se u topicu **Chat** — lokacija (okvirno) i oprema.
3. Za upis u adresar mreže javi svoj **short i long name** u topic **Popis članova**.
4. Nabavi opremu ([vodič](../odabir-uredaja/index.md)), konfiguriraj node
   ([prvi koraci](../postavke/prvi-koraci.md)) i javi se na mreži.
