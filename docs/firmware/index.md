---
title: Meshtastic firmware
description: Deep dive u Meshtastic firmware
tags:
  - Firmware
  - github
  - compile
  - build
---

## <font color="#50EB97">Meshtastic Firmware</font>

Meshtastic Firmware je službeni softver (open‑source) koji pokreće Meshtastic uređaje.

### Metode flashanja firmwarea

- **Web Flasher**  
  Najlakši način za ESP32 (i druge) uređaje: koristi se web sučelje koje komunicira preko serijskog porta. [Više o tome ovdje](https://flasher.meshtastic.org/)
- **CLI skripte**  
  Za naprednije korisnike: koristi se `esptool` i skripte koje su dio Meshtastic alata. [Više o tome ovdje](https://meshtastic.org/docs/getting-started/flashing-firmware/esp32/cli-script/)
- **UF2 Drag & Drop**  
  Za nRF52 i RP2040: uređaj postane USB disk, i .uf2 datoteka se jednostavno kopira na disk. [Više o tome ovdje](https://meshtastic.org/docs/getting-started/flashing-firmware/nrf52/drag-n-drop/)
- **OTA (Over-The-Air) ažuriranje**  
  Kod nRF52 uređaja podržano je ažuriranje firmwarea preko Bluetootha. [Više o tome ovdje](https://meshtastic.org/docs/getting-started/flashing-firmware/nrf52/ota/)

### Verzije firmwarea

Meshtastic firmware se izdaje u nekoliko verzija, kako bi korisnici mogli birati između stabilnosti i novih funkcionalnosti:

- **Beta (stabilna)**  
  Preporučena za većinu korisnika. Testirana i pouzdana verzija firmwarea.
- **Alpha**  
  Najnovije promjene i netestirane funkcionalnosti. Može sadržavati bugove i ne preporučuje se za svakodnevnu upotrebu.

### Razvoj i doprinos

- Firmware je razvijen uz pomoć **PlatformIO** alata, što omogućava [buildanje](https://meshtastic.org/docs/development/firmware/build/) za različite platforme i mikrokontrolere.  
- Kao open-source projekt, zajednica može pomoći: poboljšanja, nove značajke, podrška za nove tipove uređaja.

Za više informacija i detaljne upute o tome **kako flashati firmware**, možete posjetiti službenu dokumentaciju:  
[Meshtastic - Flashing Firmware](https://meshtastic.org/docs/getting-started/flashing-firmware/)
