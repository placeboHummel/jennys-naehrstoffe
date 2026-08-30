/**
 * Jennys Nährstoffe - Scientific & Aesthetic Application Logic
 * Clean, structured clinical wellness dashboard with dual dosage modes
 */

import { JENNY_SUPPLEMENTS, NUTRIENTS_MASTER } from './data.js?v=3.0.0';

// Application State
let supplementsState = JSON.parse(JSON.stringify(JENNY_SUPPLEMENTS));
let activeCategory = 'all';
let currentSearchQuery = '';
let currentSidebarTimeFilter = 'all';
let currentDosageMode = localStorage.getItem('jenny_dosage_mode') || 'jenny'; // 'jenny' | 'manufacturer'

// Clean number formatting
function formatNumber(num) {
  if (num === undefined || num === null || isNaN(num)) return 0;
  if (num >= 100) return Math.round(num).toLocaleString('de-DE');
  if (num >= 10) return Number(num.toFixed(1)).toLocaleString('de-DE');
  if (num >= 1) return Number(num.toFixed(1)).toLocaleString('de-DE');
  return Number(num.toFixed(2)).toLocaleString('de-DE');
}

// Calculate active nutrients based on active supplements & dosage mode
function calculateNutrientTotals() {
  const activeSupplements = supplementsState.filter(s => s.active);

  return NUTRIENTS_MASTER.map(nutrient => {
    let totalAmount = 0;
    const sources = [];

    activeSupplements.forEach(supp => {
      const nutrientMap = currentDosageMode === 'jenny' 
        ? (supp.nutrientsJenny || supp.nutrients) 
        : (supp.nutrientsManufacturer || supp.nutrients);

      if (nutrientMap && nutrientMap[nutrient.id] !== undefined) {
        const amount = nutrientMap[nutrient.id];
        if (amount > 0) {
          totalAmount += amount;
          sources.push({
            supplementId: supp.id,
            supplementName: supp.name,
            brand: supp.brand,
            amount: amount,
            unit: nutrient.unit,
            image: supp.image,
            dosageText: currentDosageMode === 'jenny' ? supp.dosageJenny : supp.dosageManufacturer
          });
        }
      }
    });

    const percent = nutrient.refVal > 0 ? Math.round((totalAmount / nutrient.refVal) * 100) : 0;

    return {
      ...nutrient,
      totalAmount,
      percent,
      sources
    };
  });
}

// Update Top KPI Summary Header
function renderHeaderStats(calculatedNutrients) {
  const activeSupps = supplementsState.filter(s => s.active);
  const coveredCount = calculatedNutrients.filter(n => n.percent >= 100).length;
  const coveragePercent = Math.round((coveredCount / calculatedNutrients.length) * 100);

  const suppCountEl = document.getElementById('statSuppCount');
  const nutrientCountEl = document.getElementById('statNutrientCount');
  const coveragePctEl = document.getElementById('statCoveragePct');
  const coverageLabelEl = document.getElementById('statCoverageLabel');

  if (suppCountEl) suppCountEl.textContent = activeSupps.length;
  if (nutrientCountEl) nutrientCountEl.textContent = calculatedNutrients.length;
  if (coveragePctEl) coveragePctEl.textContent = `${coveragePercent}%`;
  if (coverageLabelEl) coverageLabelEl.textContent = `${coveredCount}/${calculatedNutrients.length} OPTIMAL`;
}

// Update Dosage Mode Switcher Buttons & Caption
function updateDosageModeUI() {
  const btnJenny = document.getElementById('btnModeJenny');
  const btnManufacturer = document.getElementById('btnModeManufacturer');
  const caption = document.getElementById('activeModeCaption');

  if (btnJenny && btnManufacturer) {
    if (currentDosageMode === 'jenny') {
      btnJenny.classList.add('active');
      btnManufacturer.classList.remove('active');
    } else {
      btnManufacturer.classList.add('active');
      btnJenny.classList.remove('active');
    }
  }

  if (caption) {
    if (currentDosageMode === 'jenny') {
      caption.innerHTML = '<span>Modus: <strong>Jennys Art</strong> (1 Kapsel tgl., Mg: 3 Kapseln)</span>';
    } else {
      caption.innerHTML = '<span>Modus: <strong>Hersteller-Empfehlung</strong> (Offizielle Packungsangabe)</span>';
    }
  }
}

// Render Left Sidebar: Daily Supplements
function renderSupplementsSidebar() {
  const container = document.getElementById('supplementsList');
  const countPill = document.getElementById('sidebarCountPill');

  if (!container) return;

  const activeSupps = supplementsState.filter(s => s.active);
  if (countPill) {
    countPill.textContent = `${activeSupps.length} Produkte`;
  }

  const filteredSupplements = supplementsState.filter(s => {
    if (currentSidebarTimeFilter === 'all') return true;
    return s.timeGroup === currentSidebarTimeFilter;
  });

  if (filteredSupplements.length === 0) {
    container.innerHTML = `
      <div class="empty-sidebar-note">
        Keine Produkte für diesen Tageszeitpunkt hinterlegt.
      </div>
    `;
    return;
  }

  container.innerHTML = filteredSupplements.map(supp => {
    const imageHtml = supp.image 
      ? `<img src="${supp.image}" alt="${supp.name}" class="product-thumb-img" onerror="this.parentElement.innerHTML='<span class=\'product-thumb-fallback\'>${supp.icon || '🌸'}</span>'"/>`
      : `<span class="product-thumb-fallback">${supp.icon || '🌸'}</span>`;

    const dosageText = currentDosageMode === 'jenny' 
      ? (supp.dosageJenny || supp.dosage) 
      : (supp.dosageManufacturer || supp.dosage);

    return `
      <div class="product-card ${!supp.active ? 'is-paused' : ''}" data-id="${supp.id}">
        <div class="product-card-top">
          <div class="product-thumb-wrap">
            ${imageHtml}
          </div>

          <div class="product-header-info">
            <div class="product-brand-row">
              <span class="product-brand-label">${supp.brand}</span>
              <span class="timing-pill">${supp.timing}</span>
            </div>
            
            <a href="${supp.url || '#'}" target="_blank" rel="noopener noreferrer" class="product-title-link" title="${supp.name}">
              <span class="product-title-text">${supp.name}</span>
              <span class="external-arrow">↗</span>
            </a>
          </div>
        </div>

        <div class="product-card-bottom">
          <div class="dosage-info-col">
            <span class="dosage-text">${dosageText}</span>
          </div>

          <div class="product-meta-col">
            ${supp.badge ? `<span class="product-badge-pill">${supp.badge}</span>` : ''}
            <button class="toggle-pause-btn" data-toggle-id="${supp.id}" title="${supp.active ? 'In Nährstoff-Bilanz pausieren' : 'In Nährstoff-Bilanz aktivieren'}">
              ${supp.active ? 'Pausieren' : 'Aktivieren'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Event listeners for toggle pause/active
  container.querySelectorAll('.toggle-pause-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = e.currentTarget.getAttribute('data-toggle-id');
      const item = supplementsState.find(s => s.id === id);
      if (item) {
        item.active = !item.active;
        renderApp();
      }
    });
  });
}

// Render Category Filter Pills
function renderCategoryTabs(calculatedNutrients) {
  const tabsContainer = document.getElementById('categoryTabs');
  if (!tabsContainer) return;

  const categories = [
    { id: 'all', label: 'Alle' },
    { id: 'vitamins', label: 'Vitamine' },
    { id: 'minerals-trace', label: 'Mineralstoffe & Spurenelemente' },
    { id: 'vital', label: 'Omega-3 & Vitalstoffe' },
    { id: 'botanicals', label: 'Adaptogene & Pilze' }
  ];

  tabsContainer.innerHTML = categories.map(cat => {
    let count = 0;
    if (cat.id === 'all') {
      count = calculatedNutrients.length;
    } else if (cat.id === 'minerals-trace') {
      count = calculatedNutrients.filter(n => n.category === 'minerals' || n.category === 'trace').length;
    } else {
      count = calculatedNutrients.filter(n => n.category === cat.id).length;
    }

    const isActive = activeCategory === cat.id;

    return `
      <button class="category-pill-btn ${isActive ? 'active' : ''}" data-cat="${cat.id}">
        <span>${cat.label}</span>
        <span class="category-pill-count">(${count})</span>
      </button>
    `;
  }).join('');

  tabsContainer.querySelectorAll('.category-pill-btn').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const target = e.currentTarget;
      activeCategory = target.getAttribute('data-cat');
      renderNutrientsGrid(calculateNutrientTotals());
      renderCategoryTabs(calculateNutrientTotals());
    });
  });
}

// Render 2-Column Scientific Nutrient Cards Grid
function renderNutrientsGrid(calculatedNutrients) {
  const grid = document.getElementById('nutrientsGrid');
  if (!grid) return;

  // Filter by category
  let filtered = calculatedNutrients;
  if (activeCategory !== 'all') {
    if (activeCategory === 'minerals-trace') {
      filtered = filtered.filter(n => n.category === 'minerals' || n.category === 'trace');
    } else {
      filtered = filtered.filter(n => n.category === activeCategory);
    }
  }

  // Filter by search query
  if (currentSearchQuery.trim() !== '') {
    const q = currentSearchQuery.toLowerCase().trim();
    filtered = filtered.filter(n => {
      const nameMatch = n.name.toLowerCase().includes(q);
      const subMatch = (n.subTitle || '').toLowerCase().includes(q);
      const benefitsMatch = (n.benefits || '').toLowerCase().includes(q);
      const sourceMatch = n.sources.some(s => s.supplementName.toLowerCase().includes(q) || s.brand.toLowerCase().includes(q));
      return nameMatch || subMatch || benefitsMatch || sourceMatch;
    });
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state-box">
        <div class="empty-state-icon">🔍</div>
        <div class="empty-state-title">Keine Nährstoffe gefunden</div>
        <div class="empty-state-desc">Passe deinen Suchbegriff an oder wähle eine andere Nährstoffkategorie.</div>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const hasAmount = item.totalAmount > 0;
    
    // Status Pill Class & Fill Class
    let pillClass = 'status-pill-standard';
    let barColorClass = 'bar-fill-green';
    
    if (item.percent >= 300) {
      pillClass = 'status-pill-high';
      barColorClass = 'bar-fill-amber';
    } else if (item.percent >= 100) {
      pillClass = 'status-pill-optimal';
      barColorClass = 'bar-fill-green';
    } else if (item.percent > 0) {
      pillClass = 'status-pill-optimal';
      barColorClass = 'bar-fill-green';
    }

    // Capped progress bar (visual representation max 100%)
    const barWidth = Math.min(item.percent, 100);

    // Unique brand tags
    const uniqueBrands = Array.from(new Set(item.sources.map(s => s.brand)));
    const brandTagsHtml = uniqueBrands.length > 0 
      ? uniqueBrands.map(b => `<span class="brand-tag-pill">${b}</span>`).join('')
      : `<span class="brand-tag-pill empty-tag">Inaktiv</span>`;

    const formattedAmount = formatNumber(item.totalAmount);

    return `
      <div class="nutrient-scientific-card" data-nutrient-id="${item.id}" title="Klicken für biochemische Details &amp; wissenschaftliche Studien">
        
        <!-- Card Header: Name + Subtitle on Left, Brand Pills on Right -->
        <div class="nutrient-card-header">
          <div class="nutrient-title-col">
            <h3 class="nutrient-card-title">${item.name}</h3>
            <span class="nutrient-card-sub">${item.subTitle || item.categoryName}</span>
          </div>

          <div class="nutrient-brands-col">
            ${brandTagsHtml}
          </div>
        </div>

        <!-- Metric Row: Big Bold Value on Left, Percentage Pill on Right -->
        <div class="nutrient-metric-row">
          <div class="nutrient-value-display">
            <span class="val-number">${formattedAmount}</span>
            <span class="val-unit">${item.unit}</span>
          </div>

          <div class="nutrient-status-display">
            <span class="status-reference-pill ${pillClass}">
              ${hasAmount ? `${formatNumber(item.percent)}% D-A-CH` : '0% D-A-CH'}
            </span>
          </div>
        </div>

        <!-- Solid Continuous Progress Line -->
        <div class="nutrient-progress-wrap">
          <div class="nutrient-progress-bar">
            <div class="nutrient-progress-fill ${barColorClass}" style="width: ${hasAmount ? barWidth : 0}%"></div>
          </div>
        </div>

        <!-- Card Footer: Reference text on Right -->
        <div class="nutrient-card-footer">
          <span class="reference-note-text">Referenz: <strong>${item.refText}</strong></span>
        </div>

      </div>
    `;
  }).join('');

  // Attach modal click listeners
  grid.querySelectorAll('.nutrient-scientific-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-nutrient-id');
      const nutrient = calculatedNutrients.find(n => n.id === id);
      if (nutrient) openNutrientModal(nutrient);
    });
  });
}

// Scientific Detail Modal View
function openNutrientModal(nutrient) {
  const modal = document.getElementById('nutrientModal');
  const modalBody = document.getElementById('modalBody');
  if (!modal || !modalBody) return;

  const modeDesc = currentDosageMode === 'jenny' 
    ? '🌸 Jennys Art (1 Kapsel, Mg: 3 Kapseln)' 
    : '📋 Hersteller-Empfehlung (Volle Packungs-Dosis)';

  // Build Functions Checklist HTML
  const functionsHtml = (nutrient.functions && nutrient.functions.length > 0)
    ? `
      <div class="modal-section">
        <div class="modal-section-title">🧬 Biologische Hauptfunktionen &amp; EFSA-Claims</div>
        <ul class="modal-checklist">
          ${nutrient.functions.map(fn => `
            <li class="modal-check-item">
              <span class="check-bullet">✓</span>
              <span>${fn}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `
    : '';

  // Build Sources List HTML
  const sourcesListHtml = nutrient.sources.length > 0
    ? nutrient.sources.map(s => `
        <div class="modal-source-row">
          <div class="source-left">
            ${s.image ? `<img src="${s.image}" class="source-thumb" alt="${s.supplementName}"/>` : ''}
            <div>
              <div class="source-name">${s.supplementName}</div>
              <div class="source-meta">${s.brand} &bull; ${s.dosageText}</div>
            </div>
          </div>
          <div class="source-amount">${formatNumber(s.amount)} ${s.unit}</div>
        </div>
      `).join('')
    : `<div class="source-empty-note">Keine aktiven Produkte liefern aktuell diesen Nährstoff.</div>`;

  modalBody.innerHTML = `
    <div class="modal-header-block">
      <div class="modal-header-left">
        <span class="modal-kicker">${nutrient.categoryName}</span>
        <h2 class="modal-main-title">${nutrient.name}</h2>
        <p class="modal-main-sub">${nutrient.subTitle || ''} &bull; <span class="modal-mode-badge">${modeDesc}</span></p>
      </div>
    </div>

    <!-- 4-Stat Box Grid -->
    <div class="modal-stat-matrix">
      <div class="stat-matrix-card">
        <span class="stat-matrix-label">Tagesdosis (${currentDosageMode === 'jenny' ? 'Jennys Art' : 'Hersteller'})</span>
        <span class="stat-matrix-val highlight-val">${formatNumber(nutrient.totalAmount)} ${nutrient.unit}</span>
      </div>
      <div class="stat-matrix-card">
        <span class="stat-matrix-label">D-A-CH Referenz-Deckung</span>
        <span class="stat-matrix-val green-val">${formatNumber(nutrient.percent)}%</span>
      </div>
      <div class="stat-matrix-card">
        <span class="stat-matrix-label">Offizieller Referenzwert</span>
        <span class="stat-matrix-val text-val">${nutrient.refText}</span>
      </div>
      <div class="stat-matrix-card">
        <span class="stat-matrix-label">Optimalbereich</span>
        <span class="stat-matrix-val text-val">${nutrient.optimalRange || 'Individuell'}</span>
      </div>
    </div>

    <!-- Section 1: Functions -->
    ${functionsHtml}

    <!-- Section 2: Benefits -->
    <div class="modal-section">
      <div class="modal-section-title">🌸 Bedeutung für Jennys Vitalität &amp; Wohlbefinden</div>
      <div class="modal-text-box">${nutrient.benefits || 'Wichtiger Bestandteil für Zellstoffwechsel und Wohlbefinden.'}</div>
    </div>

    <!-- Section 3: Deficiency Signs -->
    ${nutrient.deficiencySigns ? `
      <div class="modal-section">
        <div class="modal-section-title">⚠️ Mögliche Anzeichen einer Unterversorgung (Mangel)</div>
        <div class="modal-text-box warning-box">${nutrient.deficiencySigns}</div>
      </div>
    ` : ''}

    <!-- Section 4: Bioavailability Tips -->
    ${nutrient.intakeTips ? `
      <div class="modal-section">
        <div class="modal-section-title">💡 Bioverfügbarkeit &amp; Einnahme-Tipps (Synergien)</div>
        <div class="modal-text-box tip-box">${nutrient.intakeTips}</div>
      </div>
    ` : ''}

    <!-- Section 5: EFSA Upper Limit -->
    <div class="modal-section">
      <div class="modal-section-title">🛡️ EFSA Sicherheitsbereich (Tolerable Upper Intake Level)</div>
      <div class="modal-text-box">${nutrient.efsaUpperLimit || 'Keine toxischen Obergrenzen bei physiologischer Einnahme.'}</div>
    </div>

    <!-- Section 6: Sources in Supplements -->
    <div class="modal-section">
      <div class="modal-section-title">📦 Enthalten in Jennys aktuellen Supplements</div>
      <div class="modal-sources-stack">
        ${sourcesListHtml}
      </div>
    </div>

    <!-- Section 7: Verified External Scientific Source Link -->
    ${nutrient.learnMoreUrl ? `
      <div class="modal-section">
        <div class="modal-section-title">🔗 Fundierte wissenschaftliche Fachquelle</div>
        <div class="modal-ref-link-card">
          <div class="ref-link-info">
            <span class="ref-badge">Offizielle Behörden- &amp; Studienreferenz</span>
            <div class="ref-title">${nutrient.learnMoreSource || 'Wissenschaftliche Quelle'}</div>
            <div class="ref-desc">Detailinformationen, klinische Studien und Referenzwerte der Behörden.</div>
          </div>
          <a href="${nutrient.learnMoreUrl}" target="_blank" rel="noopener noreferrer" class="ref-open-btn">
            Fachquelle öffnen ↗
          </a>
        </div>
      </div>
    ` : ''}
  `;

  modal.classList.add('is-open');
}

function closeNutrientModal() {
  const modal = document.getElementById('nutrientModal');
  if (modal) modal.classList.remove('is-open');
}

// Full Application Render
function renderApp() {
  const calculatedNutrients = calculateNutrientTotals();
  updateDosageModeUI();
  renderHeaderStats(calculatedNutrients);
  renderSupplementsSidebar();
  renderCategoryTabs(calculatedNutrients);
  renderNutrientsGrid(calculatedNutrients);
}

// Mobile Header Scroll Listener
function initHeaderScrollListener() {
  const headerEl = document.getElementById('mainHeader');
  if (!headerEl) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 30) {
          headerEl.classList.add('is-scrolled');
        } else {
          headerEl.classList.remove('is-scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// Initial Setup & Event Handlers
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScrollListener();

  // Dosage Mode Switcher Buttons
  const btnModeJenny = document.getElementById('btnModeJenny');
  const btnModeManufacturer = document.getElementById('btnModeManufacturer');

  if (btnModeJenny) {
    btnModeJenny.addEventListener('click', () => {
      if (currentDosageMode !== 'jenny') {
        currentDosageMode = 'jenny';
        localStorage.setItem('jenny_dosage_mode', 'jenny');
        renderApp();
      }
    });
  }

  if (btnModeManufacturer) {
    btnModeManufacturer.addEventListener('click', () => {
      if (currentDosageMode !== 'manufacturer') {
        currentDosageMode = 'manufacturer';
        localStorage.setItem('jenny_dosage_mode', 'manufacturer');
        renderApp();
      }
    });
  }

  // Time Filter Tabs
  document.querySelectorAll('.time-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.time-pill').forEach(p => p.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentSidebarTimeFilter = e.currentTarget.getAttribute('data-time');
      renderSupplementsSidebar();
    });
  });

  // Search Input
  const searchInput = document.getElementById('nutrientSearch');
  const searchClearBtn = document.getElementById('searchClearBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = currentSearchQuery.length > 0 ? 'flex' : 'none';
      }
      renderNutrientsGrid(calculateNutrientTotals());
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      searchClearBtn.style.display = 'none';
      renderNutrientsGrid(calculateNutrientTotals());
    });
  }

  // Modal Close Events
  const modal = document.getElementById('nutrientModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeNutrientModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeNutrientModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNutrientModal();
  });

  // Initial Render
  renderApp();
});
