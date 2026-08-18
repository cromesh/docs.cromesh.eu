---
title: MeshCore
description: MeshCore — hrvatska zajednica i mreža temeljena na LoRa tehnologiji, alternativa ili nadopuna Meshtastic mreži.
tags:
  - MeshCore
---

# MeshCore - kako i zašto?

## Što je MeshCore?

MeshCore je lagan sustav za sigurnu tekstualnu komunikaciju putem LoRa radija na
868 MHz. Svaki node u Hrvatskoj može biti dio mreže, a repetitori prosljeđuju poruke
dalje — bez centralnog operatera i bez internetske veze.

Poput Meshtastica, MeshCore omogućuje autonomnu komunikaciju između node-ova. MeshCore
mreža trenutačno se razvija i gradi na području Republike Hrvatske.

Sudjelovanje nije vezano uz jedan protokol: korisnici mogu odabrati Meshtastic ili
MeshCore prema vlastitim potrebama i preferencijama, a moguće je koristiti oba protokola
na neovisnim uređajima.

## Razlika između Meshtastic-a i MeshCore-a

Najveća razlika je u načinu usmjeravanja poruka.

**Meshtastic** koristi tzv. "managed flood" routing — svaki uređaj u ulozi Client prima
i prosljeđuje tuđe poruke. To mrežu čini jednostavnom za postavljanje i vrlo otpornom,
ali može povećati zauzeće radio-kanala u gušćim mrežama.

**MeshCore** razdvaja uređaje po ulogama: obični uređaji (Companion) ne prosljeđuju tuđe
poruke, već to rade isključivo namjenski postavljeni repetitori. Rezultat je tiša i
predvidljivija mreža, ali uz potrebu za pažljivijim planiranjem pokrivenosti repetitorima.

Oba protokola su otvorenog koda i mogu raditi na istom LoRa hardveru, ali
**međusobno nisu kompatibilna**.

## Poveznice

| Resurs | Adresa | Opis |
|---|---|---|
| MeshCore HR | [meshcore.com.hr](https://meshcore.com.hr/) | Hrvatska MeshCore zajednica |
| MeshCore HR karta | [map.meshcore.com.hr](https://map.meshcore.com.hr/) | Karta MeshCore mreže u Hrvatskoj |

## Napomena o neovisnosti, žigu i licenci

!!! note "MeshCore — pravna napomena"
    **Neovisnost i žig:** Naziv „MeshCore”, logotipi i povezani vizualni identiteti
    pripadaju svojim autorima, vlasnicima žigova i doprinositeljima zajednici.
    docs.cromesh.eu je neovisan projekt i nije povezan, podržan niti službeno povezan
    s tvrtkom MeshCore Technologies Limited, službenim razvojnim timom na meshcore.io
    niti bilo kojim drugim komercijalnim subjektom koji djeluje pod imenom MeshCore.
    Nazivi i logotipi koriste se isključivo radi identifikacije i edukacije.

    **Otvoreni kod:** MeshCore softver i protokol izvorno su djelo Scotta Powella i
    suradnika iz zajednice te se distribuiraju pod [MIT licencijom](https://github.com/meshcore-dev/MeshCore/blob/main/license.txt).
    Korištenjem, izmjenom ili distribucijom koda treba zadržati izvorne napomene o
    autorskim pravima u skladu s uvjetima licence.

    **Isključenje jamstva i odgovornosti:** Softver, firmware i informacije na ovoj
    stranici pružaju se u obliku „kakvi jesu” (AS IS), bez jamstava. Autori ove
    dokumentacije i vlasnici autorskih prava ne odgovaraju za štetu, gubitak podataka
    ili kvarove hardvera nastale korištenjem materijala ili koda sa stranice.
