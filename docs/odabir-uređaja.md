---
title: Odabir pravog uređaja za Meshtastic
description: Vodič kroz najčešće mikrokontrolere i uređaje koji se koriste s Meshtasticom
tags:
  - Hardver
  - Uređaji
  - Početnici
---

# <font color="#50EB97">Odabir Pravog Uređaja</font>

Odabir pravog uređaja za Meshtastic ključan je korak za svakog početnika.  
Iako na prvu svi uređaji djeluju slično, razlikuju se po **srcu svoje elektronike — mikrokontroleru (MCU)**.  
U nastavku slijedi vodič koji će vam pomoći razumjeti razlike i donijeti pravu odluku.

---

## ESP32 — Svestranost uz Veću Potrošnju

ESP32 je stariji, ali i dalje vrlo popularan čip. Njegova glavna prednost je **svestranost**, jer u sebi ima ugrađen **WiFi i Bluetooth**.  
To znači da se uređaji s ESP32 čipom mogu povezati na kućnu mrežu ili koristiti za naprednije funkcionalnosti.

Međutim, ta svestranost ima svoju cijenu — **veću potrošnju energije**.  
Ako vam je najvažnije trajanje baterije, imajte na umu da će uređaji s ovim čipom trošiti više.

### Primjeri Uređaja

- **LILYGO® TTGO T-Beam**  
- **Heltec V3**

---

## nRF52 — Učinkovitost kao Prioritet

Ako vam je **trajanje baterije** najvažnije, **nRF52** je pravi izbor.  
Ovaj moderniji čip je znatno **štedljiviji od ESP32** i idealan za uređaje koji će raditi na baterije dulje vrijeme.

Glavna razlika je što **nRF52 nema ugrađen WiFi**, već samo **Bluetooth**.  
Zbog toga je jednostavniji, ali se ne može izravno povezati na WiFi mrežu.

### Primjeri Uređaja

- **LILYGO® TTGO T-Echo**  
- **RAK4631 Core modul**

---

## RP2040 — Niska Potrošnja i Dvojezgreni Pogon

RP2040 je čip tvrtke **Raspberry Pi**.  
Poput nRF52, štedljiv je i pogodan za uređaje kod kojih je važna **niska potrošnja energije**.

Ipak, imajte na umu da na nekim uređajima, poput **Raspberry Pi Pico W**,  
**Bluetooth podrška za Meshtastic još nije dostupna**.

### Primjeri Uređaja

- **Raspberry Pi Pico** + **Waveshare LoRa modul**

---

## Zaključak

Kao što vidite, **ne postoji univerzalno najbolji čip** — odabir ovisi o vašim potrebama.

Ako planirate koristiti uređaj **na terenu i na baterije**,  
onda je **nRF52** ili **RP2040** bolji izbor zbog niže potrošnje energije.  
Ako pak uređaj planirate koristiti kao **fiksnu točku s konstantnim napajanjem**,  
tada se možete odlučiti za **ESP32**, koji nudi dodatne funkcionalnosti poput WiFi povezivanja.

---

## <font color="#EB5050">Važna Napomena</font>

Bez obzira na odabrani uređaj, **nikada ga ne uključujte bez spojene antene!**  
To može **trajno oštetiti radio čip** i učiniti uređaj neupotrebljivim.

---
