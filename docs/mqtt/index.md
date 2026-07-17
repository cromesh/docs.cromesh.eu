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
- **[map.cromesh.eu](https://map.cromesh.eu)** — Meshview instanca s kartom nodeova i
  uvidom u promet mreže.

## Čemu služi MQTT u Meshtasticu

Node spojen na MQTT (preko WiFi-ja ili Bluetooth proxyja kroz mobitel) radi kao
**gateway**: prijavljuje serveru sebe **i sve nodeove koje čuje preko LoRa-e**. To je
jedini način da se node pojavi na karti. MQTT **nije potreban za rad mreže** — poruke
između nodeova putuju isključivo radiovezom; MQTT služi za kartu, statistiku i
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

> **Napomena:** Na iOS-u su neke opcije (*OK to MQTT*, *Ignore MQTT*) raspoređene
> drugačije nego na Androidu ili ih pojedine verzije aplikacije nemaju — konfiguracija
> iste stvari nalazi se na više mjesta, provjeri sve tri lokacije (LoRa config, MQTT
> modul, postavke kanala). TODO: dopuniti točne putanje po platformama i verzijama
> aplikacije.

## Uvjeti da se node pojavi na karti

1. MQTT postavljen kako je opisano gore (ili node u dometu nekog CroMesh gatewaya),
2. uključen **OK to MQTT**,
3. uključen **Uplink** na kanalu `LongFast`,
4. node ima **lokaciju** — GPS ili ručno postavljenu fiksnu poziciju (*Fixed position*).

Nakon ispravne konfiguracije pojava na karti može potrajati — nodeovi svoje podatke
(poziciju, node info) odašilju periodično, tipično svakih nekoliko sati. Iskustveno:
1–2 sata do prve pojave, promjena preseta ili imena zna se propagirati i sporije.

## Mogućnosti karte

| URL | Sadržaj |
|---|---|
| `map.cromesh.eu/map` | Karta nodeova |
| `map.cromesh.eu/chat` | Poruke s javnog kanala `LongFast` |
| `map.cromesh.eu/nodegraph` | Graf povezanosti mreže (tko koga čuje) |
| `map.cromesh.eu/firehose` | Svi paketi u stvarnom vremenu |
| `map.cromesh.eu/packet_list/<node_id>` | Povijest paketa pojedinog nodea |

> **Napomena:** Karta posjeduje **samo ključ javnog kanala `LongFast`** — jedino njegove
> poruke može dekriptirati i prikazati u `/chat`. Promet ostalih kanala (uključujući
> `cromesh.eu`) vidljiv je samo kao šifrirani paketi.

Crte (strelice) između nodeova na grafu znače da se nodeovi **relativno često čuju** —
ne jamče stabilnu vezu u svakom trenutku.

## Najčešći problemi

| Simptom | Uzrok / rješenje |
|---|---|
| Node se ne pojavljuje na karti | Krivi root topic (nedostaje `/9A`); isključen *OK to MQTT*; nema lokacije; DNS/mreža blokira `mqtt.cromesh.eu` |
| Susjedi mi se ne pojavljuju | Susjedi nemaju *OK to MQTT* i dijeljenje lokacije na javnom kanalu — bez toga ih gateway ne smije prijaviti |
| Poruke s MQTT-a ne idu dalje u RF mrežu | Očekivano ponašanje (zero-hop politika); za primanje s MQTT-a potreban je Downlink na kanalu |
| Node ima "MQTT" oznaku iako sam downlink ugasio | Oznaka ostaje u lokalnoj bazi nodeova; nestaje tek brisanjem node DB-a |
