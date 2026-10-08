# Notenrechner als App auf iPhone und Windows

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
2. Oben rechts **+ → New repository**, Name z. B. `notenrechner`, **Public**, **Create repository**.
3. Auf **uploading an existing file** klicken und die Dateien von oben (inkl. Ordner `icons`)
   hineinziehen, dann **Commit changes**.
4. **Settings → Pages**: unter *Branch* `main` und `/ (root)` wählen, **Save**.
5. Nach 1–2 Minuten steht oben die Adresse, z. B.
   `https://DEIN-NAME.github.io/notenrechner/`

## Variante B: Netlify (Drag & Drop)

1. Auf <https://app.netlify.com/drop> gehen und ein kostenloses Konto anlegen.
2. Einen Ordner mit den Dateien von oben in das Feld ziehen.
3. Die angezeigte Adresse (`https://….netlify.app`) ist die App.
   Unter *Site configuration → Change site name* lässt sich der Name ändern,
   z. B. `notenrechner-franzi`.

---

## Auf dem iPhone installieren

1. Die Adresse in **Safari** öffnen.
2. Unten auf **Teilen** (Quadrat mit Pfeil) tippen.
3. **„Zum Home-Bildschirm“** → **Hinzufügen**.

Der Notenrechner erscheint mit eigenem Symbol und startet im Vollbild, auch offline.

## Unter Windows installieren

1. Die Adresse in **Edge** oder **Chrome** öffnen.
2. In der Adressleiste auf das Symbol **„App installieren“** klicken
   (bei Edge: Menü **… → Apps → Diese Website als App installieren**).

Danach gibt es den Notenrechner im Startmenü und in der Taskleiste.

> Wichtig: Die Datei `index.html`, die direkt vom Desktop geöffnet wird, hat einen
> **eigenen** Speicher. Noten von dort mit **Sicherung speichern** exportieren und in der
> installierten App mit **Sicherung laden** übernehmen.

---

## Daten zwischen iPhone und Windows abgleichen

Oben rechts im Notenrechner gibt es den Knopf mit den zwei Pfeilen:

- **Sicherung speichern:** Alle Klassen, Arbeiten und Noten werden als Datei gespeichert.
  Auf dem iPhone öffnet sich das Teilen-Menü, dort **„In Dateien sichern“ → iCloud Drive**.
- **Sicherung laden:** Die Datei vom anderen Gerät wird **zusammengeführt**, nicht
  überschrieben. Neue Noten, Schüler:innen und Arbeiten von beiden Geräten bleiben erhalten.
  Wurde dieselbe Note auf beiden Geräten geändert, gewinnt die neuere Änderung.
  Gelöschtes bleibt gelöscht. Direkt danach lässt sich alles mit **Widerrufen** rückgängig machen.

Typischer Ablauf: Am iPhone Noten eintragen → *Sicherung speichern* in iCloud Drive →
am PC über iCloud Drive (oder per Mail/OneDrive) *Sicherung laden*. Umgekehrt genauso.

**Tipp:** Regelmäßig eine Sicherung speichern. Wird die App vom Home-Bildschirm gelöscht,
sind die Daten auf diesem Gerät weg.

---

## Updates veröffentlichen

Nach Änderungen an der App:

1. In `sw.js` die Zeile `const VERSION = 'v1';` hochzählen (`'v2'`, `'v3'`, …).
2. Die geänderten Dateien erneut hochladen.

Beim nächsten Öffnen zeigt die App **„Neue Version verfügbar – Aktualisieren“**.
