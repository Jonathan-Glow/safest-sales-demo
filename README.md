# QM Welt QM-Portal — Clickable Sales-Demo

Statischer HTML-Prototyp für Verkaufsgespräche mit KMU-Kunden, die an einer
ISO-Zertifizierung interessiert sind. Zeigt, wie das QM-System des Kunden
später aussieht: ordentlich, übersichtlich, delegierbar — kein Papierchaos.

Keine Build-Tools, keine Dependencies.

## Starten

```bash
# Direkt öffnen
open index.html

# Oder lokaler Server
python3 -m http.server 8765
```

Live: https://jonathan-glow.github.io/qm-welt-demo/

## Aufbau

| Datei | Inhalt |
|---|---|
| `index.html` | **Startseite** — Fortschritt, offene Aufgaben, Aktivitäten |
| `qm-system.html` | **QM-System-Bereich** mit 4 Reitern (JS-gerendert, Hash-Routing) |
| `data.js` | Alle Demo-Daten (Dokumente, Aufgaben, Nachweise, Archiv, Personen) |
| `app.js` | Rendering, Tab-Routing, Suche, Status-Filter |
| `styles.css` | Design-System (clean Business-SaaS, hell, tabellen-fokussiert) |

## Reiter im QM-System

- **QM-Arbeitsbereich** — Dokumente in Bearbeitung (Entwürfe, Reviews, fällige Aufgaben)
- **QM-Praxisnachweise** — ausgefüllte Formblätter als gelebte Nachweise
- **QM-System** — Ordnerstruktur → Klick öffnet Tabellenansicht mit Suche + Status-Filter
  - A-QM Handbuch (18 Dokumente)
  - B-PA Prozessanweisungen (7)
  - C-VA Verfahrensanweisungen (17)
  - E-FB Formblätter (22)
- **QM-System Archiv** — abgelöste Dokumentversionen (revisionssicher)

Deep-Links über Hash: `qm-system.html#system/aqm`, `#arbeitsbereich`, `#praxisnachweise`, `#archiv`

## Demo-Daten

Dokumentstruktur und -namen entsprechen dem echten QM-System der GlowMedia GmbH
(64 Dokumente). Status, Versionen, Daten und Personen (außer J. Glasow) sind
fiktive Demo-Werte. Simuliertes Datum: 10. Juni 2026.

## Design

- **Schrift:** Plus Jakarta Sans (UI) · Geist Mono (IDs, Versionen, Daten)
- **Farben:** Helles Grau (#F6F7F9) · Weiß-Panels · Grün-Akzent (#0BB56B)
- **Stil:** Clean Business-SaaS — Tabellen, Status-Pills, Icon-Tiles
