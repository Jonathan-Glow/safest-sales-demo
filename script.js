/* ============================================
   SAFEST DEMO PROTOTYPE — INTERACTIONS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────────────
     Progress bar animation (Screen 1 — Übersicht)
     Animates from 0 to target % on page load.
     ────────────────────────────────────────────── */
  const fill = document.querySelector('.progress-fill');
  if (fill) {
    const target = fill.style.getPropertyValue('--target') || '67%';
    requestAnimationFrame(() => {
      setTimeout(() => { fill.style.width = target; }, 150);
    });
  }

  /* ──────────────────────────────────────────────
     Audit score bar animation
     ────────────────────────────────────────────── */
  const auditFill = document.querySelector('.audit-score-bar-fill');
  if (auditFill) {
    auditFill.style.width = '0%';
    requestAnimationFrame(() => {
      setTimeout(() => { auditFill.style.transition = 'width 1.1s cubic-bezier(.2,.7,.2,1)'; auditFill.style.width = '87%'; }, 200);
    });
  }

  /* ──────────────────────────────────────────────
     Delegation toggle (Screen 2)
     ────────────────────────────────────────────── */
  const toggle = document.getElementById('delegation-toggle');
  const state = document.getElementById('delegation-state');
  if (toggle && state) {
    toggle.addEventListener('click', () => {
      const off = toggle.classList.toggle('off');
      state.textContent = off ? 'AUS' : 'AN';
      state.style.color = off ? 'var(--text-faint)' : 'var(--primary)';
    });
  }

  /* ──────────────────────────────────────────────
     Freigeben buttons (Screen 3 — Dokument)
     Visual confirmation: pulse → success state.
     ────────────────────────────────────────────── */
  const freigebenBtns = document.querySelectorAll('#freigeben-btn, #freigeben-btn-2');
  freigebenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.add('pulse');
      const original = btn.innerHTML;
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        Freigegeben
      `;
      btn.style.background = 'var(--success)';
      setTimeout(() => {
        btn.classList.remove('pulse');
      }, 900);
      // Update status pill on the page if present
      const pill = document.querySelector('.dok-header .status-pill');
      if (pill) {
        pill.className = 'status-pill success';
        pill.textContent = 'Freigegeben';
      }
    });
  });

  /* ──────────────────────────────────────────────
     Audit Simulator — next/prev question (Screen 4)
     Mock: 12 questions, we only show #3 in detail.
     Buttons rotate through index for the counter.
     ────────────────────────────────────────────── */
  const nextBtn = document.getElementById('next-question');
  const prevBtn = document.getElementById('prev-question');
  const counter = document.querySelector('.simulator-counter');
  const footerCount = document.querySelector('.simulator-footer .mono.faint');
  let current = 3;
  const total = 12;

  const updateCounter = () => {
    if (counter) counter.textContent = `Frage ${current} / ${total}`;
    if (footerCount) footerCount.textContent = `${current} von ${total}`;
  };

  if (nextBtn) nextBtn.addEventListener('click', () => {
    if (current < total) { current++; updateCounter(); flash(); }
  });
  if (prevBtn) prevBtn.addEventListener('click', () => {
    if (current > 1) { current--; updateCounter(); flash(); }
  });

  const flash = () => {
    const sim = document.querySelector('.simulator');
    if (!sim) return;
    sim.style.transition = 'opacity 0.15s ease';
    sim.style.opacity = '0.45';
    setTimeout(() => { sim.style.opacity = '1'; }, 200);
  };

});
