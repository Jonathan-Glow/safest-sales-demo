# Safest Sales Demo — Clickable Prototype

Statischer HTML-Prototyp für Sales-Demos. Keine Build-Tools, keine Dependencies.

## Starten

**Option 1 — Direkt im Browser öffnen (einfachster Weg):**

```bash
open index.html
```

Funktioniert in jedem modernen Browser (Chrome, Safari, Firefox, Edge).

**Option 2 — Lokaler Server (empfohlen für realistisches Verhalten):**

```bash
# Python
python3 -m http.server 8000

# oder Node
npx serve .
```

Dann: `http://localhost:8000`

## Screens

| Datei | Screen | Wow-Moment |
|---|---|---|
| `index.html` | Übersicht | „Das ist ja schon meins" — personalisierte Landing |
| `geschaeftsfuehrer.html` | GF-Ansicht | „3 Aufgaben, 8 Minuten — der Rest läuft" |
| `dokument.html` | Dokument-Detail | „Markus hat das schon geschrieben — mit meinem Firmennamen drin" |
| `audit.html` | Audit-Simulator | „Ich kann das Audit vorher durchspielen" |

Navigation zwischen Screens über die linke Sidebar.

## Dummy-Daten

Vorgegeben für die Demo (alles hartkodiert):

- **Kunde:** Müller Werkzeugbau GmbH (Präzisionsteile, 18 MA)
- **Geschäftsführer:** Herr Müller
- **QM-Beauftragte:** Frau Schmidt
- **Berater:** Markus Brandt (Avatar: MB)
- **Zertifizierungs-Datum:** 18. März 2026
- **Heutiges Datum (simuliert):** 30. Januar 2026 → 47 Tage Countdown
- **Fortschritt:** 67 % · Audit-Bereitschaft: 87 %

Für eine echte Demo werden diese Werte aus den Setting-Call-Daten per Find&Replace in den HTML-Dateien ersetzt — bis ein automatisierter Personalisierungs-Workflow steht.

## Interaktive Elemente

- **Fortschrittsbalken & Audit-Score:** animieren beim Page-Load
- **Delegation-Toggle (GF-Ansicht):** klickbar, ändert AN ↔ AUS
- **„Freigeben"-Buttons (Dokument):** zeigen Erfolg mit Pulse-Animation
- **Audit-Simulator Vor/Zurück:** Counter springt durch 12 Fragen (Inhalt bleibt statisch)
- **Sidebar-Navigation:** wechselt zwischen Screens

## Design-System

- **Schrift:** Geist (Sans), Geist Mono (Daten), Instrument Serif Italic (Hero-Akzente)
- **Farben:** Warm-Cream Background · Tiefes Petrol Primary · Rust Accent
- **Layout:** 240 px Sidebar · 68 px Topbar · max-width 1240 px im Main
- **Schatten:** Sehr subtil, mehrlagig
- **Radii:** 12 px Cards · 8 px Buttons · 6 px Inputs

## Hosting

Statische Files — kann direkt auf Vercel, Netlify, GitHub Pages oder jedem Static-Hosting laufen. Für personalisierte Live-Demos pro Lead: ein Build-Skript erzeugt eine eindeutige URL pro Setting-Call-Datensatz (z.B. `safest-demo.vercel.app/d/abc123`).
