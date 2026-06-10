/* ============================================
   SAFEST QM-PORTAL — APP-LOGIK
   Hash-Routing, Tabellen-Rendering, Suche/Filter
   ============================================ */

(function () {
  "use strict";

  /* ── Helpers ─────────────────────────────── */

  const DOC_STATUS = {
    ok:     { label: "Freigegeben", cls: "ok" },
    review: { label: "In Prüfung",  cls: "review" },
    draft:  { label: "Entwurf",     cls: "draft" }
  };

  const docIcon = `<div class="doc-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>`;
  const folderIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`;
  const dotsIcon = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`;

  const ownerHtml = (key) => {
    const p = PEOPLE[key];
    return `<span class="owner"><span class="avatar" style="background:${p.color};">${p.initials}</span>${p.name}</span>`;
  };

  const pill = (cls, label) => `<span class="pill ${cls}">${label}</span>`;

  const lastUpdate = (docs) => {
    const parse = (d) => { const [t, m, j] = d.split("."); return new Date(`${j}-${m}-${t}`); };
    return docs.map(d => d.updated).sort((a, b) => parse(b) - parse(a))[0];
  };

  /* ════════════════════════════════════════
     DASHBOARD (index.html)
     ════════════════════════════════════════ */

  const dashTasks = document.getElementById("dash-tasks");
  if (dashTasks) {
    dashTasks.innerHTML = ARBEITSBEREICH.map(t => `
      <div class="task-row">
        <div class="task-doc">
          ${docIcon}
          <div class="task-doc-text">
            <div class="task-doc-title">${t.title}</div>
            <div class="task-doc-sub"><span class="doc-id" style="display:inline;">${t.id}</span> · ${t.task}</div>
          </div>
        </div>
        ${ownerHtml(t.owner)}
        ${pill(t.status, t.statusLabel)}
      </div>
    `).join("");
  }

  const dashFolders = document.getElementById("dash-folders");
  if (dashFolders) {
    dashFolders.innerHTML = FOLDERS.map(f => `
      <a class="folder-card" href="qm-system.html#system/${f.key}">
        <div class="folder-tile ${f.tile}">${folderIcon}</div>
        <div class="folder-info">
          <div class="folder-name">${f.name}</div>
          <div class="folder-meta"><strong>${f.docs.length}</strong> Dokumente</div>
        </div>
      </a>
    `).join("");
  }

  /* ════════════════════════════════════════
     QM-SYSTEM (qm-system.html)
     ════════════════════════════════════════ */

  const view = document.getElementById("view");
  if (!view) return;

  /* Tab-Counter */
  document.getElementById("count-ab").textContent = ARBEITSBEREICH.length;
  document.getElementById("count-pn").textContent = PRAXISNACHWEISE.length;
  document.getElementById("count-sys").textContent = FOLDERS.reduce((s, f) => s + f.docs.length, 0);
  document.getElementById("count-ar").textContent = ARCHIV.length;

  /* ── View: QM-System (Ordnerübersicht) ──── */
  function renderFolders() {
    view.innerHTML = `
      <section class="folder-grid fade">
        ${FOLDERS.map(f => `
          <a class="folder-card" href="#system/${f.key}">
            <div class="folder-tile ${f.tile}">${folderIcon}</div>
            <div class="folder-info">
              <div class="folder-name">${f.name}</div>
              <div class="folder-desc">${f.desc}</div>
              <div class="folder-meta">
                <span><strong>${f.docs.length}</strong> Dokumente</span>
                <span>Aktualisiert ${lastUpdate(f.docs)}</span>
              </div>
            </div>
            <svg class="folder-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
        `).join("")}
      </section>
    `;
  }

  /* ── View: Ordner-Tabelle ─────────────────── */
  function renderFolderTable(key) {
    const folder = FOLDERS.find(f => f.key === key);
    if (!folder) { location.hash = "system"; return; }

    view.innerHTML = `
      <div class="crumbs fade">
        <a href="#system">QM-System</a>
        <span class="sep">/</span>
        <strong>${folder.name}</strong>
      </div>

      <section class="panel fade d1">
        <div class="toolbar">
          <div class="search-field">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="tbl-search" placeholder="Suchen in ${folder.code}…" />
          </div>
          <div class="select-field">
            <select id="tbl-status">
              <option value="">Alle Status</option>
              <option value="ok">Freigegeben</option>
              <option value="review">In Prüfung</option>
              <option value="draft">Entwurf</option>
            </select>
          </div>
          <div class="spacer"></div>
          <button class="btn btn-ghost btn-sm">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export
          </button>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th style="width:44%">Dokument</th>
                <th>Status</th>
                <th>Version</th>
                <th>Zuständig</th>
                <th>Aktualisiert</th>
                <th style="width:48px"></th>
              </tr>
            </thead>
            <tbody id="tbl-body"></tbody>
          </table>
        </div>
        <div class="table-footer">
          <span id="tbl-count"></span>
          <span>Zuletzt aktualisiert ${lastUpdate(folder.docs)}</span>
        </div>
      </section>
    `;

    const body = document.getElementById("tbl-body");
    const count = document.getElementById("tbl-count");
    const search = document.getElementById("tbl-search");
    const statusSel = document.getElementById("tbl-status");

    function draw() {
      const q = search.value.trim().toLowerCase();
      const st = statusSel.value;
      const rows = folder.docs.filter(d =>
        (!q || d.id.toLowerCase().includes(q) || d.title.toLowerCase().includes(q)) &&
        (!st || d.status === st)
      );

      if (!rows.length) {
        body.innerHTML = `<tr><td colspan="6"><div class="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <div>Keine Dokumente gefunden</div>
        </div></td></tr>`;
      } else {
        body.innerHTML = rows.map(d => `
          <tr>
            <td>
              <div class="cell-doc">
                ${docIcon}
                <div>
                  <div class="cell-doc-title">${d.title}</div>
                  <span class="doc-id">${d.id} · PDF</span>
                </div>
              </div>
            </td>
            <td>${pill(DOC_STATUS[d.status].cls, DOC_STATUS[d.status].label)}</td>
            <td><span class="mono">v${d.v}</span></td>
            <td>${ownerHtml(d.owner)}</td>
            <td><span class="mono">${d.updated}</span></td>
            <td class="cell-actions"><button aria-label="Aktionen">${dotsIcon}</button></td>
          </tr>
        `).join("");
      }
      count.textContent = `${rows.length} von ${folder.docs.length} Dokumenten`;
    }

    search.addEventListener("input", draw);
    statusSel.addEventListener("change", draw);
    draw();
  }

  /* ── View: QM-Arbeitsbereich ──────────────── */
  function renderArbeitsbereich() {
    view.innerHTML = `
      <section class="panel fade">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th style="width:40%">Dokument</th>
                <th>Aufgabe</th>
                <th>Zuständig</th>
                <th>Fällig</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${ARBEITSBEREICH.map(t => `
                <tr>
                  <td>
                    <div class="cell-doc">
                      ${docIcon}
                      <div>
                        <div class="cell-doc-title">${t.title}</div>
                        <span class="doc-id">${t.id}</span>
                      </div>
                    </div>
                  </td>
                  <td style="color:var(--text-soft);">${t.task}</td>
                  <td>${ownerHtml(t.owner)}</td>
                  <td><span class="mono">${t.due}</span></td>
                  <td>${pill(t.status, t.statusLabel)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        <div class="table-footer">
          <span>${ARBEITSBEREICH.length} offene Vorgänge</span>
          <span>Sortiert nach Fälligkeit</span>
        </div>
      </section>
    `;
  }

  /* ── View: QM-Praxisnachweise ─────────────── */
  function renderPraxisnachweise() {
    view.innerHTML = `
      <section class="panel fade">
        <div class="toolbar">
          <div class="search-field">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="pn-search" placeholder="Nachweise durchsuchen…" />
          </div>
          <div class="spacer"></div>
          <button class="btn btn-ghost btn-sm">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export
          </button>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th style="width:42%">Nachweis</th>
                <th>Formblatt</th>
                <th>Erstellt von</th>
                <th>Datum</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="pn-body"></tbody>
          </table>
        </div>
        <div class="table-footer">
          <span id="pn-count"></span>
          <span>Gelebte Nachweise — automatisch dem Audit-Programm zugeordnet</span>
        </div>
      </section>
    `;

    const body = document.getElementById("pn-body");
    const count = document.getElementById("pn-count");
    const search = document.getElementById("pn-search");

    function draw() {
      const q = search.value.trim().toLowerCase();
      const rows = PRAXISNACHWEISE.filter(n =>
        !q || n.title.toLowerCase().includes(q) || n.form.toLowerCase().includes(q)
      );
      if (!rows.length) {
        body.innerHTML = `<tr><td colspan="5"><div class="empty-state"><div>Keine Nachweise gefunden</div></div></td></tr>`;
      } else {
        body.innerHTML = rows.map(n => `
          <tr>
            <td>
              <div class="cell-doc">
                <div class="doc-ico" style="background:var(--green-bg);color:var(--green);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </div>
                <div><div class="cell-doc-title">${n.title}</div></div>
              </div>
            </td>
            <td><span class="mono">${n.form}</span></td>
            <td>${ownerHtml(n.owner)}</td>
            <td><span class="mono">${n.date}</span></td>
            <td>${pill(n.status, n.statusLabel)}</td>
          </tr>
        `).join("");
      }
      count.textContent = `${rows.length} von ${PRAXISNACHWEISE.length} Nachweisen`;
    }

    search.addEventListener("input", draw);
    draw();
  }

  /* ── View: QM-System Archiv ───────────────── */
  function renderArchiv() {
    view.innerHTML = `
      <section class="panel fade">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th style="width:44%">Dokument</th>
                <th>Archivierte Version</th>
                <th>Ersetzt am</th>
                <th>Ersetzt durch</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${ARCHIV.map(a => `
                <tr style="color:var(--text-soft);">
                  <td>
                    <div class="cell-doc">
                      <div class="doc-ico" style="opacity:.6;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>
                      </div>
                      <div>
                        <div class="cell-doc-title" style="color:var(--text-soft);">${a.title}</div>
                        <span class="doc-id">${a.id}</span>
                      </div>
                    </div>
                  </td>
                  <td><span class="mono">v${a.v}</span></td>
                  <td><span class="mono">${a.replaced}</span></td>
                  <td><span class="mono">${a.by}</span></td>
                  <td>${pill("arch", "Archiviert")}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        <div class="table-footer">
          <span>${ARCHIV.length} archivierte Versionen</span>
          <span>Revisionssicher — Versionshistorie bleibt vollständig erhalten</span>
        </div>
      </section>
    `;
  }

  /* ── Routing ──────────────────────────────── */
  function route() {
    const hash = (location.hash.slice(1) || "system").split("/");
    const viewName = hash[0];
    const param = hash[1];

    /* Tabs aktiv setzen */
    document.querySelectorAll("#tabs .tab").forEach(t => {
      t.classList.toggle("active", t.dataset.view === viewName);
    });
    document.querySelectorAll("#side-sub a").forEach(a => {
      a.classList.toggle("active", a.dataset.view === viewName);
    });

    switch (viewName) {
      case "arbeitsbereich":  renderArbeitsbereich(); break;
      case "praxisnachweise": renderPraxisnachweise(); break;
      case "archiv":          renderArchiv(); break;
      case "system":
      default:
        param ? renderFolderTable(param) : renderFolders();
    }
  }

  document.querySelectorAll("#tabs .tab").forEach(t => {
    t.addEventListener("click", () => { location.hash = t.dataset.view; });
  });

  window.addEventListener("hashchange", route);
  route();

})();
