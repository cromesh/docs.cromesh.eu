---
title: Mapiranje i nadzor
description: Alati za mapiranje pokrivenosti i nadzor CroMesh mreže — karta i traceroute, Meshview, MeshMonitor, MeshMapper, planiranje pokrivenosti i provjera čuje li te repetitor.
tags:
  - Software
  - Karta
  - Nadzor
---

# <font color="#50EB97">Mapiranje i nadzor</font>

## Alati

| Alat | Namjena |
|---|---|
| [map.cromesh.eu](https://map.cromesh.eu) | Karta, graf veza (`/nodegraph`), traceroute (`/graph/traceroute/...`) i chat |
| [Meshview](https://github.com/pablorevilla-meshtastic/meshview) | Novi MQTT/karta poslužitelj (migracija servisa u kolovozu 2026.) |
| [MeshMonitor](https://meshmonitor.org) | Nadzor, prosljeđivanje poruka (uključujući MC i MT) i OTA priprema |
| [MeshMapper](https://osi.meshmapper.net) | Aplikacija za mobitel koja svakih 30 s šalje ping repetiterima i crta pokrivenost |
| [ve2dbe.com](https://www.ve2dbe.com) | Planiranje i prikaz pokrivenosti |
| [RelayMesh](https://mesh.relaymonkey.com) | CroMesh je dodan kao mreža |

## Savjeti

- Provjera da je poruku neki repetitor čuo može se napraviti i bez ikoga na drugoj
  strani. Šalje se poruka na javni ili `#test` kanal i traži se oznaka "heard by".
- Nakon postavljanja novog repetitora, mapiranje je potrebno ponoviti zbog refleksija
  signala.
- Ako se ne koristi MQTT, privatni kanal s uključenom lokacijom svim članovima kanala
  prikazuje GPS lokaciju noda neovisno o MQTT-u.

<!-- TODO: dodati upute za Store & Forward (radi na ESP32 s 8 MB PSRAM-a uz odgovarajući firmware) i potvrditi hardverske zahtjeve. -->

## Povezano

- [MQTT i karta](../mqtt/index.md) — postavke i uvjeti za prikaz na karti
- [Infrastruktura](../mreza/infrastruktura.md) — poznati routeri i repetitori
- [MeshCore poveznice](../meshcore/poveznice.md) — karte i alati za MeshCore
