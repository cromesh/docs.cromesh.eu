---
title: Aplikacije
description: Više o klijent aplikacijama
tags:
  - Android
  - ios
  - web
---

# <font color="#50EB97">Aplikacije</font>

Pregled razlika između Meshtastic softvera na web sučelju, GTK klijentu, Android i iPhone
aplikaciji — sličnosti, poznati bugovi i najčešći problemi.

## Web klijent (client.meshtastic.org)

Radi izravno u pregledniku bez instalacije, ali oslanja se na **Web Bluetooth** i **Web
Serial API**, koje podržavaju samo preglednici bazirani na Chromiumu (Chrome, Edge) —
Firefox i Safari ne rade. Spajanje je moguće preko HTTP-a (kad je node na istoj mreži),
Bluetootha ili serijskog USB kabela. Najveći nedostatak: **web klijent je efemeran** —
osvježiš li stranicu, izgubiš prikazane poruke jer se ništa lokalno ne sprema, a node u
memoriji drži tek ograničen broj zadnjih poruka (kružni buffer). Poznati bugovi
uključuju povremeni neuspjeh u prosljeđivanju Bluetooth postavki na uređaj nakon
spremanja te grešku "This connection type requires Web Bluetooth" na Linuxu čak i uz
podržani Chrome (obično zbog isključenog Bluetootha na razini OS-a ili blokiranog
`chrome://flags` eksperimenta).

## GTK klijent (Linux desktop)

Ovo je **neslužbena**, zajednička aplikacija (`gtk-meshtastic-client`, GTK4/Libadwaita,
autor kop316), dostupna kroz Debian/Ubuntu pakete i Flatpak. Radi preko istog Python
API-ja kao CLI, pa podržava Serial, Bluetooth i TCP/IP spajanje. Dizajn joj je
adaptivan — radi jednako dobro na Linux mobilnim uređajima (npr. Librem 5) kao i na
desktopu. Kako nije službeni Meshtastic proizvod, funkcijski katkad kasni za
Android/iOS aplikacijama (nove postavke firmwarea stižu prvo tamo), a dokumentacija i
broj korisnika su znatno manji, pa je rješavanje problema sporije.

## Android aplikacija

Najzrelija je i najkorištenija aplikacija — bogata funkcijama, s kartom, upravljanjem
cijelom mrežom i mogućnošću spajanja preko Bluetootha, USB-a i WiFi-ja. Uobičajeni
problemi: BLE veza zna otpasti nakon nadogradnje firmwarea (rješenje je zaboraviti
Bluetooth uređaj u sistemskim postavkama i ponovno ga upariti — sigurnosna mjera bez
zaobilaznog rješenja), a razlike među proizvođačkim Android nadogradnjama ponekad
utječu na pouzdanost pozadinskog BLE skeniranja.

## iPhone/iPad/macOS aplikacija (Apple)

Funkcijski prati Android, ali s manjim zaostatkom u pojedinim značajkama (dugogodišnja
pritužba zajednice da Android i iOS timovi ne uvode nove opcije istovremeno). Podržava
zadnje dvije glavne verzije iOS-a/iPadOS-a/macOS-a. Isti BLE re-pairing problem kao na
Androidu — nakon ponovnog flash-anja firmwarea treba zaboraviti uređaj u Bluetooth
postavkama sustava i ponovno ga upariti.

## Zajedničko svima

Sve četiri koriste isti temeljni protokol i istu logiku konfiguracije (LoRa regija,
kanali, uloge nodeova), pa QR kod/URL za pridruživanje kanalu generiran u jednoj
aplikaciji radi i u ostalima. **PKC (Public Key Cryptography) enkripcija za direktne
poruke** aktivno se uvodi u svim klijentima, ali brzina uvođenja varira. Najčešći opći
problem korisnika: nepodudaranje verzije firmwarea i verzije aplikacije/web klijenta —
nakon nadogradnje firmwarea gotovo uvijek treba i najnoviju verziju klijenta, inače
dolazi do neuspjelog spajanja ili netočno prikazanih postavki.
