---
title: Kanali
description: Popis kanala CroMesh mreže — javni LongFast i kanal zajednice cromesh.eu — s uputama za ispravno dodavanje kanala bez gubitka postojećih.
---

# Kanali CroMesh mreže

## Pregled kanala

| Kanal | Tip | Namjena |
|---|---|---|
| `LongFast` | Primarni, javni (zadani ključ) | Glavni kanal cijele mreže — tu se odvija većina komunikacije i tu su vidljivi svi Meshtastic korisnici u dometu |
| `cromesh.eu` | Sekundarni, kanal zajednice | Interni kanal CroMesh zajednice — za razgovor, testiranje i dogovore bez spamanja susjednih (npr. slovenskih) mreža |

## Kanal `cromesh.eu`

Kanal dodaješ putem službene poveznice (QR/URL):

```
https://meshtastic.org/e/#CgcSAQE6AggNCi4SIOG-EYxkPo3V43tylMQ0YPmk_Stbu-g7hFpkH7V43FkdGgpjcm9tZXNoLmV1Eg8IATgDQANIAVAbaAHABgE
```

> **Upozorenje — najčešća greška početnika:** Prilikom otvaranja poveznice ili skeniranja
> QR koda aplikacija nudi opcije **"Replace"** i **"Add"**. **NIKADA ne klikaj "Replace"**
> — time ćeš pregaziti (obrisati) svoj primarni `LongFast` kanal i nestat ćeš s mreže.
> Uvijek odaberi samo kanal `cromesh.eu` i klikni **"Add"**.

Ako si greškom pregazio LongFast: obriši kanal koji ga je zamijenio i ponovno dodaj
`LongFast` sa zadanim (default) postavkama — poruke i kontakti ostaju sačuvani.

## Postavke uplink/downlink po kanalu

Za nodeove spojene na MQTT (vidi [MQTT i karta](../mqtt/index.md)):

| Kanal | Uplink | Downlink | Obrazloženje |
|---|---|---|---|
| `LongFast` | ✅ Uključi | ❌ Isključi | Uplink je potreban da tvoj node i nodeovi koje čuje završe na karti. Downlink na javnom kanalu povlači promet s interneta u lokalni RF kanal — uključuj samo svjesno i privremeno. |
| `cromesh.eu` | Po želji | Po želji | Uz uključen uplink i downlink poruke kanala putuju i preko interneta između udaljenih dijelova mreže. |

> **Napomena:** Poruke poslane putem MQTT-a sa zadanim postavkama servera **ne
> retransmitiraju se dalje u RF mrežu** (zero-hop politika službenog servera) — MQTT ne
> može "spamati" lokalnu LoRa mrežu.

## Privatni kanali

Za vlastito testiranje i eksperimente slobodno kreiraj privatni (šifrirani) kanal kao
dodatni sekundarni kanal — to je i preporuka zajednice da se testni promet ne slijeva u
javni `LongFast`. Pripazi: ako na privatnom kanalu uključiš uplink/downlink, njegov
(šifrirani) promet izlazi na MQTT server.
