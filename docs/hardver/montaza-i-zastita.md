---
title: Montaža i zaštita
description: Vanjska montaža Meshtastic node-ova — brtvljenje, borba protiv kondenzacije, gromobranska zaštita i dozvole za postavljanje.
---

# Montaža i zaštita vanjskih node-ova

## Brtvljenje

Voda je najčešći ubojica vanjskih node-ova. Provjerene metode iz zajednice:

- **Antenski konektori:** omotaj **3M samovulkanizirajućom (rastezljivom gumenom)
  električarskom trakom** — rastezanjem se lijepi sama za sebe i brtvi. Obuhvati i dio
  iznad konektora da traka "ima mesa" za prihvat.
- **Prolazi kabela i spojevi kućišta:** Sika tekuća guma u tubi — provjereno drži 3+
  godine na krovu.
- Ako je antena montirana direktno na kućište, zabrtvi konektor **i iznutra**.
- Za konektore koje stock antena inače pokriva postoji 3D printani "gap filler" od
  fleksibilnog materijala — vidi [3D print](3d-print.md).

## Kondenzacija i vlaga

- Ugradi **breather valve** (ventil za izjednačavanje tlaka) u kućište — sprječava
  uvlačenje vlažnog zraka kod temperaturnih promjena.
- U kućište stavi **silica gel** (varijanta s indikatorom boje pokazuje kada je za
  sušenje; ~10 €/450 g).
- Oprez s očitanjima senzora vlage u zatvorenom kućištu: relativna vlaga ovisi o
  temperaturi pa "pad vlage" pri zagrijavanju može biti prividan.

## Gromobranska zaštita

> **Upozorenje:** Node **ne montiraj direktno na gromobransku instalaciju** 

Ispravna zaštita prema iskustvima zajednice:

1. **Plinski odvodnik prenapona (gas discharge arrester)** između antene i uređaja, s
   vlastitim izvodom na uzemljenje.
2. Nosač antene i izvod odvodnika spojiti na **ispravno uzemljenje** (gromobransku
   traku) — odvojeno od same gromobranske hvataljke.
3. Minimalna varijanta (bolja od ničega): izvod odvodnika na masu antenskog nosača radi
   pražnjenja statičkog elektriciteta od vjetra.

### Zaštita od statike i munje

- Najjednostavnija i najjeftinija zaštita od statike je **λ/4 kratkospojna dionica**
  (T-konektor i komad koaksijalnog kabela od λ/4, kratko spojen na kraju). DC ne prolazi,
  RF prolazi. Radi samo ako je masa dobro uzemljena.
- **Od izravnog udara munje ne štiti ništa.** Odvodnik prenapona i λ/4 dionica štite od
  prenapona i statike koje munja ili vjetar induciraju u kabelu, a ne od izravnog udara.
- Preporuka člana s iskustvom: za pouzdanost nužna je velika površina uzemljenja.
- Kvarovi zbog statike u node-ovima u plastičnim kutijama događaju se povremeno.

**Ispravna uporaba (prema stručnim izvorima):**

- **λ/4 dionica je ugođena na jednu frekvenciju:** proizvođači je izrađuju za radnu frekvenciju
  i propušta samo uski pojas oko nje (oko ±5%). Za Meshtastic mora biti izrađena za
  868–869,5 MHz. Za istosmjerne signale je potpuni kratki spoj prema masi, pa radi samo ako
  je sustav ispravno uzemljen. Nije za vodove kojima teče istosmjerni napon.
- **Plinski odvodnik prenapona** postavlja se na mjestu gdje kabel ulazi u zgradu, prije
  uređaja, i mora imati vlastiti kratak spoj na zajedničko uzemljenje (oplet kabela, kućište
  i uzemljenje spojeni u jednoj točki). Nakon udara može biti potrošen i treba ga zamijeniti.
- **Uzemljenje treba imati nizak otpor.** Profesionalne instalacije stupova navode više
  uzemljivača (npr. četiri šipke u prstenu oko stupa) i otpor ispod 5–10 Ω, uz provjeru pri
  postavljanju i jednom godišnje. To potkrjepljuje preporuku o velikoj površini uzemljenja.
- Hvataljku (gromobran) treba postaviti iznad najviše antene, tako da udar presretne ona, a
  ne antena. Ne montiraj node izravno na gromobransku instalaciju.

Izvori: [RF Essentials — lightning protection](https://rfessentials.com/rf-knowledge-base/what-is-the-recommended-lightning-protection-approach-for-a-tower-mounted-antenn/),
[PCS Electronics — λ/4 grounding stubs](https://www.pcs-electronics.com/it/shop/antennas-cable-connectors/broadcasting-antenna-accessories/lightning-protection-resonant-1-4-wave-grounding-stubs/).

## Pozicioniranje

- Presudni su **visina i linija optičke vidljivosti** — metar više na stupu zna donijeti
  više od promjene antene.
- Izbjegavaj neposrednu blizinu drugih odašiljača: zabilježen je slučaj node-a kojeg je
  zaglušivao UKV repetitor na istoj lokaciji svaki put kad bi se aktivirao. Za smetnje od
  LTE baznih stanica vidi [Antene — smetnje](../antene/index.md#smetnje-lte-i-bazne-stanice).
- Za udaljene solarne node-ove planiraj upravljanje unaprijed (Remote Admin, isključeni
  WiFi/BT) — vidi [Prvi koraci](../postavke/prvi-koraci.md).

## Dozvole za postavljanje

- **Privatni objekti:** dogovor s vlasnikom (u praksi zajednice: krovovi kuća, zgrada,
  radioklubovi, tvrtke članova).
- **Javni i državni objekti (napušteni dimnjaci, tornjevi i sl.):** formalna
  procedura ne postoji. Preporuka je izravan kontakt s lokalnim radioklubovima
  (često imaju uspostavljene veze i iskustvo s takvim lokacijama); za stambene
  zgrade dogovor s upravom zgrade/vlasnicima stanova, kao i kod privatnih kuća.
- Za regulatorna pitanja RF spektra nadležan je HAKOM — vidi
  [Pravila](../zajednica/pravila.md).

<figure class="cromesh-doc-photo">
  <img src="../../assets/images/v361-montaza-zastita.jpg" alt="Vanjska montaža antenskog node-a" loading="lazy">
  <figcaption>Novi Petrinja nod by Matija</figcaption>
</figure>
