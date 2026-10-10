# Franzis Schulapp auf iPhone und Windows

Die App muss einmal im Internet liegen (kostenlos, über eine `https://`-Adresse).
Danach wird sie auf dem iPhone und unter Windows wie eine normale App installiert.

**Datenschutz:** Hochgeladen wird nur die leere App. Klassen, Namen und Noten
bleiben immer auf dem jeweiligen Gerät.

## Diese Dateien hochladen

```
index.html
manifest.webmanifest
sw.js
icons/            (ganzer Ordner)
```

Nicht nötig sind `ANLEITUNG.md` und der Ordner `.claude`.

---

## Variante A: GitHub Pages (kostenlos, dauerhaft)

1. Auf <https://github.com> ein kostenloses Konto anlegen.
2. Oben rechts **+ → New repository**, Name z. B. `schulapp`, **Public**, **Create repository**.
3. Auf **uploading an existing file** klicken und die Dateien von oben (inkl. Ordner `icons`)
   hineinziehen, dann **Commit changes**.
4. **Settings → Pages**: unter *Branch* `main` und `/ (root)` wählen, **Save**.
5. Nach 1–2 Minuten steht oben die Adresse, z. B.
   `https://DEIN-NAME.github.io/schulapp/`

## Variante B: Netlify (Drag & Drop)

1. Auf <https://app.netlify.com/drop> gehen und ein kostenloses Konto anlegen.
2. Einen Ordner mit den Dateien von oben in das Feld ziehen.
3. Die angezeigte Adresse (`https://….netlify.app`) ist die App.
   Unter *Site configuration → Change site name* lässt sich der Name ändern,
   z. B. `franzis-schulapp`.

---

## Auf dem iPhone installieren

1. Die Adresse in **Safari** öffnen.
2. Unten auf **Teilen** (Quadrat mit Pfeil) tippen.
3. **„Zum Home-Bildschirm“** → **Hinzufügen**.

Franzis Schulapp erscheint mit eigenem Symbol und startet im Vollbild, auch offline.

## Unter Windows installieren

1. Die Adresse in **Edge** oder **Chrome** öffnen.
2. In der Adressleiste auf das Symbol **„App installieren“** klicken
   (bei Edge: Menü **… → Apps → Diese Website als App installieren**).

Danach gibt es Franzis Schulapp im Startmenü und in der Taskleiste.

> Wichtig: Die Datei `index.html`, die direkt vom Desktop geöffnet wird, hat einen
> **eigenen** Speicher. Noten von dort mit **Sicherung speichern** exportieren und in der
> installierten App mit **Sicherung laden** übernehmen.

---

## Daten zwischen iPhone und Windows abgleichen

Oben rechts in der App gibt es den Knopf mit den zwei Pfeilen:

- **Sicherung speichern:** Alle Stundenpläne, Klassen, Arbeiten und Noten werden als Datei gespeichert.
  Auf dem iPhone öffnet sich das Teilen-Menü, dort **„In Dateien sichern“ → iCloud Drive**.
- **Sicherung laden:** Die Datei vom anderen Gerät wird **zusammengeführt**, nicht
  überschrieben. Neue Noten, Schüler:innen, Arbeiten und Stundenpläne von beiden Geräten bleiben erhalten.
  Wurde dieselbe Note auf beiden Geräten geändert, gewinnt die neuere Änderung.
  Gelöschtes bleibt gelöscht. Direkt danach lässt sich alles mit **Widerrufen** rückgängig machen.

Typischer Ablauf: Am iPhone Noten eintragen → *Sicherung speichern* in iCloud Drive →
am PC über iCloud Drive (oder per Mail/OneDrive) *Sicherung laden*. Umgekehrt genauso.

**Tipp:** Regelmäßig eine Sicherung speichern. Wird die App vom Home-Bildschirm gelöscht,
sind die Daten auf diesem Gerät weg.

---

## Wecker (nur iPhone)

Im Stundenplan-Menü unter **Weckzeiten** für jeden Wochentag eine Uhrzeit einstellen.
Am Vorabend erscheint oben neben der ersten Stunde ein **Wecker-Knopf**. Er startet den
Kurzbefehl **„Schulwecker“** und übergibt die Uhrzeit.

**Kurzbefehl einmalig einrichten** (auch über den **?**-Knopf im Fenster *Weckzeiten*):

1. App **Kurzbefehle** öffnen → **+** → Name `Schulwecker`. Erscheint oben „Erhält … Eingabe“: **Text** wählen.
2. **„Daten aus Eingabe abrufen“** → Eingabe: *Kurzbefehleingabe* (macht aus „07:00“ eine Uhrzeit).
3. **„Wecker suchen“** ohne Filter (ältere Versionen: „Alle Wecker abrufen“).
4. **„Wiederholen mit jedem Objekt“** in *Wecker*, darin:
   - **„Datum formatieren“** → *Wiederholungsobjekt* → **Uhrzeit**, Format **Eigene** `HH:mm`
   - **„Wenn“** *Formatiertes Datum* **ist** *Kurzbefehleingabe*:
     - **„Wecker umschalten“** → *Wiederholungsobjekt* auf **Ein**
     - **„Text“** `ja` → **„Variable festlegen“** `gefunden`
5. Nach „Ende Wiederholen“: **„Wenn“** *gefunden* **hat keinen Wert** →
   **„Wecker hinzufügen“** (ältere Versionen: „Wecker erstellen“): Uhrzeit *Daten*, Name `Schule`.
6. **„Mitteilung anzeigen“** → `Wecker` *Kurzbefehleingabe* `ist aktiv ✓`.

Ergebnis: Es wird **nie ein Wecker gelöscht**. Gibt es schon einen Wecker zu dieser Uhrzeit,
wird er nur eingeschaltet (falls er aus war); sonst wird ein neuer angelegt.
Heißt eine Aktion etwas anders, findet man sie über die Suche „Wecker“.

---

## Verbindungen (DVB)

In der Karte oben gibt es den Knopf **Fahrt**. Er sucht Verbindungen zum ersten Termin des
nächsten Schultags: Minuten „vorher ankommen“ einstellen – die App zeigt Beginn und
spätestmögliche Ankunft – und **Verbindungen suchen** liefert drei passende Fahrten der DVB/des VVO
(mit Echtzeit, sofern verfügbar). Mit **↑ Früher** und **↓ Später** lassen sich weitere
Verbindungen nachladen. **Orange** = kommt nach der gewünschten Zeit, aber vor Beginn an (knapp);
**Rot** = kommt erst nach Beginn der ersten Stunde an. Antippen einer Verbindung zeigt alle
Abfahrts- und Ankunftssteige sowie die Umsteigezeiten – unter 5 Minuten rot markiert. Das 📍 neben einem Steig öffnet
Apple Karten mit Fußweg dorthin; **Auf Karte zeigen** zeigt die ganze Verbindung mit allen Steigen
(Kartendaten © OpenStreetMap).

Start und Ziel je Wochentag stehen im Stundenplan-Menü unter **Verbindungen (DVB)**
(vorbelegt: Start Voglerstraße 46; Mo–Do Rudolf-Bergander-Ring 3; Fr Glacisstraße 2).
Für die Suche werden nur diese Adressen an die Fahrplanauskunft des VVO übermittelt.

---

## Updates veröffentlichen

Nach Änderungen an der App:

1. In `sw.js` die Zeile `const VERSION = 'v15';` hochzählen (`'v16'`, `'v17'`, …).
2. Die geänderten Dateien erneut hochladen.

Beim nächsten Öffnen zeigt die App **„Neue Version verfügbar – Aktualisieren“**.
