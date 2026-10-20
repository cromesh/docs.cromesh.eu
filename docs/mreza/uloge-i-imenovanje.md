---
title: Uloge i imenovanje node-ova
description: Preporučene Meshtastic uloge (CLIENT, ROUTER, CLIENT_MUTE, CLIENT_BASE) u CroMesh mreži i konvencije imenovanja node-ova.
---

# Uloge i imenovanje node-ova

## Uloge (Device Role)

Pogrešno odabrana uloga jedan je od najčešćih uzroka nestabilnosti mesh mreža. Vodi se
ovim pravilima:

| Uloga | Kada je koristiti | Napomena |
|---|---|---|
| `CLIENT` | **Zadana uloga za gotovo sve node-ove**, uključujući krovne i stupne node-ove bez značajne elevacije | Normalno retransmitira pakete; ako čuje da je poruku već proslijedio drugi node, ne prosljeđuje je ponovno |
| `CLIENT_MUTE` | Mobilni uređaji (džepni, u autu) i sekundarni kućni node-ovi | Šalje i prima, ali **ne retransmitira** — ključno za smanjenje zagušenja kad imaš više uređaja na maloj udaljenosti |
| `CLIENT_BASE` | Dobro pozicioniran "bazni" node (npr. tavan, krov) kojemu su ostali tvoji node-ovi označeni kao favoriti | Prometu s/prema favoriziranim node-ovima daje prioritet slično kao `ROUTER_LATE`, dok sav ostali promet tretira kao običan `CLIENT` |
| `ROUTER` | **Isključivo infrastrukturni node-ovi na istaknutim pozicijama** (brda, tornjevi, visoke zgrade) s dobrom antenom | Retransmitira bez nasumične odgode — "šiba dalje odmah". U praksi razlika prema CLIENT-u na običnim pozicijama je zanemariva, zato ROUTER nema smisla u stanu |
| `ROUTER_CLIENT` | ❌ Zastarjelo od firmware 2.3.15 | Koristi `ROUTER` ili `CLIENT` umjesto ovoga |
| `REPEATER` | ❌ Zastarjelo od firmware 2.7.11 | Uklonjena iz novijih verzija aplikacije; povremeno se na mreži pojavi node s tom ulogom konfiguriran starom aplikacijom |

> **Upozorenje:** Nemoj stavljati `ROUTER` ulogu "jer zvuči jače". Node u prizemlju u
> ROUTER modu samo dodaje kolizije. ROUTER je rezerviran za pozicije tipa Cepeliš,
> Sv. Križ ili krov radiokluba — dogovori se u grupi prije postavljanja.

Za infrastrukturne node-ove kojima nitko ne šalje izravne poruke može se dodatno uključiti
oznaka *Unmessageable*. Formalni dogovor zajednice o ovoj postavci trenutno ne postoji —
koristi po vlastitoj procjeni.

### Odabir uloge prema položaju

Zajednica CroMesh preporučuje ulogu birati prema **položaju noda, a ne prema modelu
uređaja**. Hardver je isti, razlikuje se konfiguracija i način obrade poruka.

- Prema iskustvu dijela članova, `CLIENT_BASE` je dobar izbor za fiksni node na krovu ili
  kući kada si i sam spojen na taj node.
- `ROUTER` ima smisla tek na lokaciji gdje ih ima mnogo u blizini. Krov kuće najčešće
  nije dobra lokacija za router. Vidi službeni članak:
  <https://meshtastic.org/blog/choosing-the-right-device-role/>.
- Meshtastic je dizajniran tako da node koji slabije čuje izvornu poruku prosljeđuje
  **prije** onoga koji je čuje bolje (ideja je maksimalan domet). Zbog toga na istoj
  lokaciji slabiji unutarnji node može preuzeti promet umjesto jačeg vanjskog.

!!! note "CLIENT ili CLIENT_BASE za fiksni node?"
    Oba izbora su prihvatljiva. Korisnici CroMesha za fiksni node na krovu ili tavanu
    preporučuju `CLIENT_BASE`, dok dokumentacija (tablica gore i
    [službeni Meshtastic članak](https://meshtastic.org/blog/choosing-the-right-device-role/))
    kao sigurnu zadanu opciju navodi `CLIENT` („when in doubt, simply sticking with Client
    is a safe bet”).

    Prema službenom članku, `CLIENT_BASE` ima prioritet pri retransmisiji poruka od i prema
    svojim favoritiziranim node-ovima: za node na tavanu ili krovu postavlja se
    `CLIENT_BASE`, a ostali tvoji node-ovi (`CLIENT` ili `CLIENT_MUTE`) označavaju se kao
    favoriti na njemu. Članak ne navodi verziju firmwarea od koje ova uloga postoji.

### Slučaj: unutarnji node preuzima promet umjesto krovnog

Dva noda na istoj adresi: slabiji unutar zgrade i krovni solarni node s antenom većeg
dobitka. Svi traceroute i promet idu kroz unutarnji node.

**Rješenje koje je potvrdila zajednica:** unutarnji node postaviti na `CLIENT_MUTE`.
Uzrok može biti i to što su ta dva noda međusobno označena kao favoriti.

### Fiksna lokacija

Za fiksne nodove postavi fiksnu lokaciju (ako nema GPS-a, može se koristiti lokacija
mobitela).

## Imenovanje node-ova

> **Napomena:** Formalno pravilo imenovanja **ne postoji** (pitanje je eksplicitno
> postavljeno u zajednici) — dolje je opisana ustaljena praksa.

### Ustaljena praksa

- **Infrastrukturni node-ovi (routeri):** `<Lokacija> R<broj>` — primjeri iz mreže:
  `KaR1`, `KaR2`, `KaR3` (Karlovac), `Petrinja R1`, `Sisak R1`, `BROD R1`
  (Slavonski Brod).
- **Long name** poželjno sadrži lokaciju, a mnogi dodaju i `CroMesh.eu` radi promocije
  mreže (npr. `CroMesh.eu KaR2 (MQTT)`, `9A1FAB solar RK Kutina CroMesh.eu`).
- **Short name** (4 znaka): kratica lokacije ili zadnja 4 hex znaka ID-a uređaja.

### Radioamaterski pozivni znakovi u imenima

Stav iskusnih radioamatera u zajednici:

- Meshtastic **nije radioamaterska služba** — infrastrukturne node-ove nemoj nazivati
  `9A...` jer to zbunjuje korisnike koji nisu radioamateri. Preporuka je geografsko
  imenovanje (`BROD R1` umjesto pozivnog znaka).
- Ako pozivni znak ipak koristiš u imenu svog osobnog node-a, koristi **isključivo
  pozivni znak koji stvarno posjeduješ** (provjerivo u HAKOM evidenciji dozvola).
  Blok `9A1**` rezerviran je za klubove odnosno zahtijeva posebne uvjete.

### Zamjena hardware-a

Kod prelaska na novi uređaj **ne pokušavaj prenijeti stari identitet**: NodeID je vezan
uz hardware i bit će novi, pa forsiranje starih ključeva vodi u *key mismatch* /
*device spoofed* upozorenja kod drugih korisnika. Preporuka zajednice: novi hardware =
novi ID i ključevi + novi short name (dovoljna je i varijacija velikog/malog slova);
long name slobodno zadrži.
