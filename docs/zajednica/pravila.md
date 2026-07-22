---
title: Pravila i bonton
description: Pravila ponašanja na CroMesh mreži i u zajednici te regulatorni okvir za 868 MHz ISM pojas u Hrvatskoj (HAKOM, ERP limiti).
---

# Pravila i bonton

> **Napomena:** CroMesh nema formalni pravilnik — ovo je kodifikacija ustaljene prakse i
> dogovora iz zajednice. 

## Bonton na mreži (RF)

1. **Ne spamaj javni `LongFast`** — to je zajednički resurs cijele mreže (i susjednih
   zemalja u dometu). Za testiranje i eksperimente koristi privatni kanal ili kanal
   `cromesh.eu`.
2. **Drži zadani hop limit (3)** — povećanje hopova množi svaki paket kroz mrežu.
3. **Smanji intervale odašiljanja**: lokacija ~2 h, node info ~3 h (vidi
   [Standardi](../mreza/standardi.md)).
4. **Mobilne i sekundarne uređaje drži u `CLIENT_MUTE`**, a `ROUTER` ulogu koristi samo
   uz dogovor u grupi (vidi [Uloge](../mreza/uloge-i-imenovanje.md)).
5. **Ne uključuj MQTT downlink na `LongFast`** bez razloga — povlačiš internetski promet
   u RF kanal.
6. Umjerenost s traceroute paketima — višestruko opterećuju kanal.

## Bonton u Telegram grupi

- **Offtopic je dozvoljen i poželjan** u topicu Chat — cilj grupe nije isključivo
  Meshtastic, nego zajednica. Za specifične teme koristi odgovarajuće topice.
- Novi članovi: predstavi se, pitaj slobodno — "glupa pitanja" ne postoje, a većina
  odgovora već postoji u ovoj dokumentaciji i u topicima grupe.
- Kupoprodaja isključivo u topicu **Tržnica Novo/Rabljeno**.

## Regulatorni okvir (Hrvatska / EU)

### Osnovno

- Meshtastic radi u **868 MHz ISM pojasu** — korištenje je **slobodno, bez dozvole**
  (nije potrebna radioamaterska licenca).
- Nacionalni regulator: **HAKOM** ([hakom.hr](https://www.hakom.hr)); evidencija
  važećih dozvola (uključujući radioamaterske):
  [dozvole.hakom.hr:8443](https://dozvole.hakom.hr:8443/).

### Ograničenja koja moraš poštovati

| Ograničenje | Vrijednost | Napomena |
|---|---|---|
| Maksimalni ERP | **27 dBm (500 mW)** u podpojasu LongFast kanala (869,4–869,65 MHz) | ERP = snaga TX + dobitak antene − gubici. 22 dBm + 10 dBi antena = prekršaj |
| Duty cycle | EU ISM pravila ograničavaju udio vremena odašiljanja po podpojasu | Meshtastic firmware s regijom `EU_868` poštuje limite — još jedan razlog da regija bude ispravno postavljena |

> **Upozorenje:** Ne koristi "boostane" uređaje ili kombinacije uređaj+antena preko
> zakonskog ERP-a. Osim što je nezakonito, jači predajnik bez bolje pozicije ne
> rješava problem dometa — mreži trebaju **više pozicije i više nodeova**, ne više
> snage.

### Meshtastic i radioamaterizam

- Meshtastic — 868 MHz nije radioamaterski pojas i
  pozivni znak nije potreban.
- Radioamateri u zajednici su dobrodošli i čine značajan dio članstva, ali: pozivni
  znak u imenu nodea koristi samo ako ga stvarno posjeduješ; infrastrukturu mreže
  imenuj geografski (vidi [Imenovanje](../mreza/uloge-i-imenovanje.md)).

### Postavljanje nodeova na objekte

- Uvijek s dozvolom vlasnika objekta.
- Za državne/javne objekte procedura nije razjašnjena — TODO (vidi
  [Montaža i zaštita](../hardver/montaza-i-zastita.md)).
