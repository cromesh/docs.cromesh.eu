---
title: Napredno o MQTT
description: Detaljnije objašnjenje MQTT-a i njegove uloge u Meshtasticu — kako spojiti node na mqtt.cromesh.eu i pojaviti se na karti map.cromesh.eu.
tags:
  - MQTT
  - Server
  - karta
  - planiranje
---

# <font color="#50EB97">Napredno o MQTT</font>

CroMesh održava vlastitu infrastrukturu:

- **`mqtt.cromesh.eu`** — MQTT server zajednice (hostan u Karlovcu, objavljen preko
  Cloudflare tunela). U praksi se pokazao stabilnijim od službenog
  `mqtt.meshtastic.org`, a karta prati **oba** servera.
- **[map.cromesh.eu](https://map.cromesh.eu)** — Meshview instanca s kartom node-ova i
  uvidom u promet mreže.

## Čemu služi MQTT u Meshtasticu

Node spojen na MQTT (preko WiFi-ja ili Bluetooth proxyja kroz mobitel) radi kao
**gateway**: prijavljuje serveru sebe **i sve node-ove koje čuje preko LoRa-e**. To je
jedini način da se node pojavi na karti. MQTT **nije potreban za rad mreže** — poruke
između node-ova putuju isključivo radiovezom; MQTT služi za kartu, statistiku i
dijagnostiku.

> **Napomena:** Dovoljno je da **jedan** node u tvom području ima MQTT — on će na kartu
> prijaviti i sve susjede (pod uvjetom da susjedi imaju uključen *OK to MQTT* i dijele
> lokaciju na javnom kanalu).

## Točne postavke (modul MQTT)

| Postavka | Vrijednost |
|---|---|
| MQTT omogućen (Enabled) | ✅ |
| Adresa servera (Address) | `mqtt.cromesh.eu` |
| Korisničko ime (Username) | `meshdev` |
| Lozinka (Password) | zadana Meshtastic lozinka (ista kao za službeni server) |
| Root topic | `msh/EU_868/9A` |
| OK to MQTT | ✅ uključi (u LoRa/kanal postavkama, ovisno o verziji aplikacije) |
| Kanal `LongFast` → Uplink | ✅ uključi |
| Kanal `LongFast` → Downlink | ❌ isključi (vidi [Kanali](../mreza/kanali.md)) |

> **Upozorenje:** Najčešći uzrok "ne vidim se na karti" je **krivi root topic** — bez
> sufiksa `/9A` node šalje na topic koji karta ne prati. Provjeri da piše točno
> `msh/EU_868/9A`.

### Točne putanje po platformi

Postavke MQTT-a nalaze se na **tri različita mjesta** — MQTT modul, LoRa postavke
(za *OK to MQTT*) i postavke kanala (za *Uplink*/*Downlink*) — a putanje se razlikuju
po platformi:

| Platforma | MQTT modul | OK to MQTT | Uplink / Downlink kanala |
|---|---|---|---|
| **Android** | Settings → MQTT (ili ⋮ u gornjem desnom kutu → Radio Configuration → MQTT) | Settings → LoRa, na dnu ekrana (Advanced) | Settings → Channels → odaberi kanal |
| **iOS / iPadOS / macOS** | Settings → Module Configuration → MQTT | Settings → Radio Configuration → LoRa | Settings → Radio Configuration → Channels |
| **Web client** (client.meshtastic.org) | Radio Configuration → MQTT → uključi Enabled → Send | Radio Configuration → LoRa | Radio Configuration → Channels |
| **Python CLI** | `meshtastic --set mqtt.enabled true` (i dalje `mqtt.address`, `mqtt.username` itd.) | `meshtastic --set lora.config_ok_to_mqtt true` | `meshtastic --ch-set uplink_enabled true --ch-index 0` (downlink analogno) |

> **Napomena:** Na iOS-u/iPadOS-u/macOS-u sve tri kategorije postavki nalaze se pod
> istim "Settings" izbornikom (samo u različitim podsekcijama), dok na Androidu MQTT
> modul može biti dostupan i kao zaseban unos i kroz Radio Configuration ovisno o
> verziji aplikacije — ako ne vidiš MQTT izravno u Settings, provjeri Radio
> Configuration.

## Uvjeti da se node pojavi na karti

1. MQTT postavljen kako je opisano gore (ili node u dometu nekog CroMesh gatewaya),
2. uključen **OK to MQTT**,
3. uključen **Uplink** na kanalu `LongFast`,
4. node ima **lokaciju** — GPS ili ručno postavljenu fiksnu poziciju (*Fixed position*).

Nakon ispravne konfiguracije pojava na karti može potrajati — node-ovi svoje podatke
(poziciju, node info) odašilju periodično, tipično svakih nekoliko sati. Iskustveno:
1–2 sata do prve pojave, promjena preseta ili imena zna se propagirati i sporije.

## Mogućnosti karte

| URL | Sadržaj |
|---|---|
| `map.cromesh.eu/map` | Karta node-ova |
| `map.cromesh.eu/chat` | Poruke s javnog kanala `LongFast` |
| `map.cromesh.eu/nodegraph` | Graf povezanosti mreže (tko koga čuje) |
| `map.cromesh.eu/firehose` | Svi paketi u stvarnom vremenu |
| `map.cromesh.eu/packet_list/<node_id>` | Povijest paketa pojedinog node-a |

> **Napomena:** Karta posjeduje **samo ključ javnog kanala `LongFast`** — jedino njegove
> poruke može dekriptirati i prikazati u `/chat`. Promet ostalih kanala (uključujući
> `cromesh.eu`) vidljiv je samo kao šifrirani paketi.

Crte (strelice) između node-ova na grafu znače da se node-ovi **relativno često čuju** —
ne jamče stabilnu vezu u svakom trenutku.

## Najčešći problemi

| Simptom | Uzrok / rješenje |
|---|---|
| Node se ne pojavljuje na karti | Krivi root topic (nedostaje `/9A`); isključen *OK to MQTT*; nema lokacije; DNS/mreža blokira `mqtt.cromesh.eu` |
| Susjedi mi se ne pojavljuju | Susjedi nemaju *OK to MQTT* i dijeljenje lokacije na javnom kanalu — bez toga ih gateway ne smije prijaviti |
| Poruke s MQTT-a ne idu dalje u RF mrežu | Očekivano ponašanje (zero-hop politika); za primanje s MQTT-a potreban je Downlink na kanalu |
| Node ima "MQTT" oznaku iako sam downlink ugasio | Oznaka ostaje u lokalnoj bazi node-ova; nestaje tek brisanjem node DB-a |
