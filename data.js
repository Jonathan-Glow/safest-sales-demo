/* ============================================
   SAFEST QM-PORTAL — DEMO-DATEN
   Echte Dokumentstruktur GlowMedia GmbH.
   Status, Versionen und Daten sind Demo-Werte.
   ============================================ */

const PEOPLE = {
  jg: { initials: "JG", name: "J. Glasow", role: "Geschäftsführung", color: "#2D5DE0" },
  lh: { initials: "LH", name: "L. Hoffmann", role: "QM-Beauftragte", color: "#7C3AED" },
  mb: { initials: "MB", name: "M. Berger", role: "Backoffice", color: "#0D9488" },
  sf: { initials: "M", name: "Markus (Safest)", role: "Ihr Berater", color: "#B45309" }
};

/* Status: ok = Freigegeben · review = In Prüfung · draft = Entwurf */
const FOLDERS = [
  {
    key: "aqm",
    code: "A-QM",
    name: "A-QM Handbuch",
    desc: "Grundsatzdokumente des Qualitätsmanagements",
    tile: "blue",
    docs: [
      { id: "A-QM01", title: "Inhaltsverzeichnis",                 status: "ok", v: "2.1", owner: "lh", updated: "18.05.2026" },
      { id: "A-QM02", title: "Benutzerhinweise",                   status: "ok", v: "1.2", owner: "lh", updated: "02.02.2026" },
      { id: "A-QM03", title: "Abkürzungen und Begriffe",           status: "ok", v: "1.1", owner: "lh", updated: "02.02.2026" },
      { id: "A-QM04", title: "Anwendungs- und Geltungsbereich",    status: "ok", v: "1.3", owner: "lh", updated: "14.03.2026" },
      { id: "A-QM05", title: "Qualitätspolitik",                   status: "ok", v: "2.0", owner: "jg", updated: "12.01.2026" },
      { id: "A-QM06", title: "Qualitätsziele",                     status: "ok", v: "2.2", owner: "jg", updated: "09.06.2026" },
      { id: "A-QM07", title: "Verpflichtungserklärung",            status: "ok", v: "1.0", owner: "jg", updated: "10.11.2025" },
      { id: "A-QM08", title: "Prozesslandschaft",                  status: "ok", v: "1.4", owner: "lh", updated: "22.04.2026" },
      { id: "A-QM09", title: "PDCA-Zyklus",                        status: "ok", v: "1.0", owner: "lh", updated: "10.11.2025" },
      { id: "A-QM10", title: "Turtle",                             status: "ok", v: "1.1", owner: "lh", updated: "08.01.2026" },
      { id: "A-QM11", title: "Ishikawa",                           status: "ok", v: "1.0", owner: "lh", updated: "10.11.2025" },
      { id: "A-QM12", title: "Stakeholder Riskanalyse",            status: "ok", v: "1.2", owner: "lh", updated: "19.02.2026" },
      { id: "A-QM13", title: "Swot Analyse",                       status: "ok", v: "1.1", owner: "jg", updated: "19.02.2026" },
      { id: "A-QM14", title: "Rechtskataster",                     status: "ok", v: "1.3", owner: "lh", updated: "07.05.2026" },
      { id: "A-QM15", title: "Auditprogramm",                      status: "ok", v: "1.2", owner: "lh", updated: "26.05.2026" },
      { id: "A-QM16", title: "Internes Audit",                     status: "ok", v: "1.1", owner: "lh", updated: "26.05.2026" },
      { id: "A-QM17", title: "Managementbewertung",                status: "ok", v: "1.1", owner: "jg", updated: "03.03.2026" },
      { id: "A-QM18", title: "Organigramm",                        status: "ok", v: "1.2", owner: "mb", updated: "05.05.2026" }
    ]
  },
  {
    key: "bpa",
    code: "B-PA",
    name: "B-PA Prozessanweisungen",
    desc: "Kernprozesse der Leistungserbringung",
    tile: "violet",
    docs: [
      { id: "B-PA01", title: "Erbringung Dienstleistung",          status: "ok",     v: "1.3", owner: "lh", updated: "11.03.2026" },
      { id: "B-PA02", title: "Führung und QM-System",              status: "ok",     v: "1.2", owner: "jg", updated: "03.03.2026" },
      { id: "B-PA03", title: "Q-Sicherung",                        status: "ok",     v: "1.1", owner: "lh", updated: "28.01.2026" },
      { id: "B-PA04", title: "Schulungen und Personal",            status: "ok",     v: "1.2", owner: "lh", updated: "16.04.2026" },
      { id: "B-PA05", title: "Einkauf und Ressourcen",             status: "ok",     v: "1.1", owner: "mb", updated: "16.04.2026" },
      { id: "B-PA06", title: "Vertrieb",                           status: "ok",     v: "1.1", owner: "jg", updated: "11.03.2026" },
      { id: "B-PA07", title: "Fulfillment Creative Content",       status: "review", v: "1.2", owner: "lh", updated: "08.06.2026" }
    ]
  },
  {
    key: "cva",
    code: "C-VA",
    name: "C-VA Verfahrensanweisungen",
    desc: "Geregelte Abläufe und Verfahren",
    tile: "teal",
    docs: [
      { id: "C-VA01", title: "Dokumentenlenkung",                  status: "ok",     v: "1.2", owner: "lh", updated: "08.01.2026" },
      { id: "C-VA02", title: "Datensicherung",                     status: "ok",     v: "1.3", owner: "mb", updated: "03.04.2026" },
      { id: "C-VA03", title: "Interne Kommunikation",              status: "ok",     v: "1.0", owner: "lh", updated: "10.11.2025" },
      { id: "C-VA04", title: "KVP",                                status: "ok",     v: "1.1", owner: "lh", updated: "19.02.2026" },
      { id: "C-VA05", title: "Chancen und Risiken",                status: "ok",     v: "1.1", owner: "lh", updated: "19.02.2026" },
      { id: "C-VA06", title: "Korrekturmaßnahmen und Umgang mit Abweichungen", status: "ok", v: "1.2", owner: "lh", updated: "30.04.2026" },
      { id: "C-VA07", title: "Lieferanten- und Kooperationspartnermanagement", status: "ok", v: "1.1", owner: "mb", updated: "28.03.2026" },
      { id: "C-VA08", title: "Managementbewertung",                status: "ok",     v: "1.1", owner: "jg", updated: "03.03.2026" },
      { id: "C-VA09", title: "Interne Audits",                     status: "ok",     v: "1.2", owner: "lh", updated: "26.05.2026" },
      { id: "C-VA10", title: "Qualitätspolitik und -ziele",        status: "ok",     v: "1.1", owner: "jg", updated: "12.01.2026" },
      { id: "C-VA11", title: "Vertragsgestaltung",                 status: "ok",     v: "1.0", owner: "jg", updated: "10.11.2025" },
      { id: "C-VA12", title: "Datenschutz und Verschwiegenheit",   status: "ok",     v: "1.1", owner: "lh", updated: "05.02.2026" },
      { id: "C-VA13", title: "Unterweisung",                       status: "ok",     v: "1.1", owner: "lh", updated: "02.12.2025" },
      { id: "C-VA14", title: "Qualifikation",                      status: "ok",     v: "1.0", owner: "lh", updated: "10.11.2025" },
      { id: "C-VA15", title: "Weiterbildung",                      status: "ok",     v: "1.0", owner: "lh", updated: "10.11.2025" },
      { id: "C-VA16", title: "Reklamationsmanagement",             status: "review", v: "1.3", owner: "lh", updated: "10.06.2026" },
      { id: "C-VA17", title: "Rechtliche Bestimmungen",            status: "ok",     v: "1.1", owner: "lh", updated: "07.05.2026" }
    ]
  },
  {
    key: "efb",
    code: "E-FB",
    name: "E-FB Formblätter",
    desc: "Vorlagen für gelebte Nachweise",
    tile: "orange",
    docs: [
      { id: "E-FB01",   title: "Unterschrift QM Ziele und Politik",            status: "ok",    v: "1.0", owner: "jg", updated: "10.11.2025" },
      { id: "E-FB02",   title: "Maßnahmenplan KVP",                            status: "ok",    v: "1.2", owner: "lh", updated: "12.05.2026" },
      { id: "E-FB03",   title: "Zielplanung & Zielüberwachung",                status: "ok",    v: "1.1", owner: "jg", updated: "31.03.2026" },
      { id: "E-FB04",   title: "Kompetenzmatrix",                              status: "draft", v: "2.0", owner: "lh", updated: "06.06.2026" },
      { id: "E-FB05",   title: "Schulungsplan und Nachweis",                   status: "ok",    v: "1.1", owner: "lh", updated: "02.06.2026" },
      { id: "E-FB06",   title: "Lieferantenbewertung",                         status: "ok",    v: "1.1", owner: "mb", updated: "20.02.2026" },
      { id: "E-FB07",   title: "Kundenzufriedenheit",                          status: "ok",    v: "1.0", owner: "mb", updated: "10.11.2025" },
      { id: "E-FB08",   title: "Mitarbeitergespräch",                          status: "ok",    v: "1.1", owner: "jg", updated: "15.01.2026" },
      { id: "E-FB08.1", title: "Feedback- & Entwicklungsgespräch Dienstleister", status: "ok",  v: "1.0", owner: "lh", updated: "15.01.2026" },
      { id: "E-FB09",   title: "Gefährdungsbeurteilung",                       status: "ok",    v: "1.1", owner: "lh", updated: "14.04.2026" },
      { id: "E-FB10",   title: "Kundenreklamation",                            status: "ok",    v: "1.1", owner: "lh", updated: "30.04.2026" },
      { id: "E-FB11",   title: "Schriftliche Unterweisung zur Arbeitssicherheit", status: "ok", v: "1.0", owner: "lh", updated: "14.04.2026" },
      { id: "E-FB12",   title: "Datenschutzverpflichtungserklärung",           status: "ok",    v: "1.0", owner: "lh", updated: "10.11.2025" },
      { id: "E-FB13",   title: "Verpflichtung zur Vertraulichkeit",            status: "ok",    v: "1.0", owner: "lh", updated: "10.11.2025" },
      { id: "E-FB14.1", title: "Stellenbeschreibung Geschäftsführung",         status: "ok",    v: "1.0", owner: "jg", updated: "08.12.2025" },
      { id: "E-FB14.2", title: "Aufgabenbeschreibung Terminierer (Setter)",    status: "ok",    v: "1.1", owner: "jg", updated: "22.04.2026" },
      { id: "E-FB14.3", title: "Aufgabenbeschreibung Closer (Vertrieb)",       status: "ok",    v: "1.1", owner: "jg", updated: "22.04.2026" },
      { id: "E-FB14.4", title: "Aufgabenbeschreibung Fulfillment (Creative & Content)", status: "ok", v: "1.0", owner: "lh", updated: "08.12.2025" },
      { id: "E-FB14.5", title: "Aufgabenbeschreibung Kundenbetreuung (CSM)",   status: "ok",    v: "1.0", owner: "lh", updated: "08.12.2025" },
      { id: "E-FB14.6", title: "Aufgabenbeschreibung Backoffice",              status: "ok",    v: "1.0", owner: "mb", updated: "08.12.2025" },
      { id: "E-FB15",   title: "Mitarbeiterinfo QM",                           status: "ok",    v: "1.1", owner: "lh", updated: "02.02.2026" },
      { id: "E-FB16",   title: "TOM Technische Organisatorische Maßnahmen",    status: "ok",    v: "1.2", owner: "mb", updated: "03.04.2026" }
    ]
  }
];

/* ── QM-Arbeitsbereich: Dokumente in Bearbeitung ── */
const ARBEITSBEREICH = [
  { id: "C-VA16", title: "Reklamationsmanagement",        task: "Freigabe ausstehend",            owner: "jg", due: "12.06.2026", status: "wait",   statusLabel: "Wartet auf Sie" },
  { id: "E-FB04", title: "Kompetenzmatrix",               task: "Entwurf v2.0 fertigstellen",     owner: "lh", due: "17.06.2026", status: "draft",  statusLabel: "Entwurf" },
  { id: "B-PA07", title: "Fulfillment Creative Content",  task: "Jahres-Review durchführen",      owner: "lh", due: "24.06.2026", status: "review", statusLabel: "In Prüfung" },
  { id: "E-FB05", title: "Schulungsplan und Nachweis",    task: "Schulungsnachweise Q2 erfassen", owner: "mb", due: "30.06.2026", status: "open",   statusLabel: "Offen" }
];

/* ── QM-Praxisnachweise: ausgefüllte Formblätter ── */
const PRAXISNACHWEISE = [
  { title: "Lieferantenbewertung Q2/2026",                    form: "E-FB06", owner: "mb", date: "05.06.2026", status: "done",   statusLabel: "Abgeschlossen" },
  { title: "Schulungsnachweis — Onboarding L. Weber",         form: "E-FB05", owner: "lh", date: "02.06.2026", status: "done",   statusLabel: "Abgeschlossen" },
  { title: "Kundenzufriedenheitsabfrage Mai 2026",            form: "E-FB07", owner: "mb", date: "28.05.2026", status: "done",   statusLabel: "Abgeschlossen" },
  { title: "Mitarbeitergespräch M. Berger",                   form: "E-FB08", owner: "jg", date: "15.05.2026", status: "done",   statusLabel: "Abgeschlossen" },
  { title: "Maßnahme #14 — Übergabeprotokoll Fulfillment",    form: "E-FB02", owner: "lh", date: "12.05.2026", status: "open",   statusLabel: "In Umsetzung" },
  { title: "Kundenreklamation #2026-03",                      form: "E-FB10", owner: "lh", date: "30.04.2026", status: "done",   statusLabel: "Geschlossen" },
  { title: "Unterweisung Arbeitssicherheit 2026",             form: "E-FB11", owner: "lh", date: "14.04.2026", status: "done",   statusLabel: "Abgeschlossen" },
  { title: "Vertraulichkeitsverpflichtung L. Weber",          form: "E-FB13", owner: "mb", date: "01.04.2026", status: "done",   statusLabel: "Unterschrieben" },
  { title: "Zielüberwachung Q1/2026",                         form: "E-FB03", owner: "jg", date: "31.03.2026", status: "done",   statusLabel: "Abgeschlossen" },
  { title: "Lieferantenbewertung Q1/2026",                    form: "E-FB06", owner: "mb", date: "28.03.2026", status: "done",   statusLabel: "Abgeschlossen" }
];

/* ── QM-System Archiv: abgelöste Versionen ── */
const ARCHIV = [
  { id: "A-QM18", title: "Organigramm",          v: "1.1", replaced: "05.05.2026", by: "v1.2" },
  { id: "C-VA02", title: "Datensicherung",       v: "1.2", replaced: "03.04.2026", by: "v1.3" },
  { id: "B-PA06", title: "Vertrieb",             v: "1.0", replaced: "11.03.2026", by: "v1.1" },
  { id: "E-FB06", title: "Lieferantenbewertung", v: "1.0", replaced: "20.02.2026", by: "v1.1" },
  { id: "A-QM05", title: "Qualitätspolitik",     v: "1.0", replaced: "12.01.2026", by: "v2.0" },
  { id: "C-VA13", title: "Unterweisung",         v: "1.0", replaced: "02.12.2025", by: "v1.1" }
];
