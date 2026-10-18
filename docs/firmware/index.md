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

Meshtastic Firmware je službeni software (open‑source) koji pokreće Meshtastic uređaje.

### Metode flash-anja firmware-a

- **Web Flasher**  
  Najlakši način za ESP32 (i druge) uređaje: koristi se web sučelje koje komunicira preko serijskog porta. [Više o tome ovdje](https://flasher.meshtastic.org/)
- **CLI skripte**  
  Za naprednije korisnike: koristi se `esptool` i skripte koje su dio Meshtastic alata. [Više o tome ovdje](https://meshtastic.org/docs/getting-started/flashing-firmware/esp32/cli-script/)
- **UF2 Drag & Drop**  
  Za nRF52 i RP2040: uređaj postane USB disk, i .uf2 datoteka se jednostavno kopira na disk. [Više o tome ovdje](https://meshtastic.org/docs/getting-started/flashing-firmware/nrf52/drag-n-drop/)
- **OTA (Over-The-Air) flash-anje**  
  Kod nRF52 uređaja podržano je flash-anje firmware-a preko Bluetootha. [Više o tome ovdje](https://meshtastic.org/docs/getting-started/flashing-firmware/nrf52/ota/)

### Verzije firmware-a

Meshtastic firmware se izdaje u nekoliko verzija, kako bi korisnici mogli birati između stabilnosti i novih funkcionalnosti:

- **Beta (stabilna)**  
  Preporučena za većinu korisnika. Testirana i pouzdana verzija firmware-a.
- **Alpha**  
  Najnovije promjene i netestirane funkcionalnosti. Može sadržavati bugove i ne preporučuje se za svakodnevnu upotrebu.

### Poznati problemi pri ažuriranju

- Prije OTA ažuriranja potrebno je jednokratno flashati **OTA bootloader**:
  <https://meshmonitor.org/firmware-ota-prerequisites.html#one-time-ota-bootloader-setup>.
- WiFi OTA ažuriranje prema iskustvima nije pouzdano.
- Za XIAO nRF52 koristi **web flasher**. Ako se uređaj ne oporavi, na MeshCore web
  flasheru pod XIAO nRF52 + Wio Kit postoji opcija popravka bootloadera, nakon čega
  slijedi puno brisanje (full erase) i flashanje Meshtasticom.
- **Beta 2.7.26:** različita iskustva. Za jedan XIAO nRF uređaj nakon nadogradnje node
  više nije radio ni nakon full erasea (vraćanje na 2.7.15 pomoglo je), dok je drugim
  članovima na XIAO nRF52 i Heltec V4 radila bez problema.
- Alat zajednice za OTA: <https://github.com/vedranius/meshtastic-ota-updater> (nije
  službeni, koristiti oprezno).

<!-- TODO: provjeriti verzije i uzrok razlika (beta 2.7.26). -->

Ostali problemi s uređajima: [Rješavanje problema](../rjesavanje-problema.md).

### Razvoj i doprinos

- Firmware je razvijen uz pomoć **PlatformIO** alata, što omogućava [buildanje](https://meshtastic.org/docs/development/firmware/build/) za različite platforme i mikrokontrolere.  
- Kao open-source projekt, članovi zajednice mogu sudjelovati u poboljšanjima,
  dodavanju novih značajki te podršci za nove tipove uređaja.

Za više informacija i detaljne upute o tome **kako flash-ati firmware**, možete posjetiti službenu dokumentaciju:  
[Meshtastic - Flashing Firmware](https://meshtastic.org/docs/getting-started/flashing-firmware/)
