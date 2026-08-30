/**
 * Jennys Nährstoffe - Interactive Application Logic
 * Luxury Wellness Dashboard with dual dosage modes & comprehensive scientific evidence
 */

import { JENNY_SUPPLEMENTS, NUTRIENTS_MASTER } from './data.js?v=2.2.0';

// Application State
let supplementsState = JSON.parse(JSON.stringify(JENNY_SUPPLEMENTS));
let activeCategory = 'all';
let currentSearchQuery = '';
let currentSidebarTimeFilter = 'all';
let currentDosageMode = localStorage.getItem('jenny_dosage_mode') || 'jenny'; // 'jenny' | 'manufacturer'

// Format numbers cleanly
function formatNumber(num) {
  if (num === undefined || num === null || isNaN(num)) return 0;
  if (num >= 100) return Math.round(num);
  if (num >= 10) return Number(num.toFixed(1));
  if (num >= 1) return Number(num.toFixed(1));
  return Number(num.toFixed(2));
}

// Calculate active nutrients based on active supplements & active dosage mode
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

// Render KPI Summary Banner
function renderKPIs(calculatedNutrients) {
  const activeSupps = supplementsState.filter(s => s.active);
  const totalUnits = activeSupps.reduce((acc, s) => {
    const units = currentDosageMode === 'jenny' 
      ? (s.unitsJenny || 1) 
      : (s.unitsManufacturer || 1);
    return acc + units;
  }, 0);
  
  // Nutrients with >= 100% reference coverage
  const coveredCount = calculatedNutrients.filter(n => n.percent >= 100).length;
  const coveragePercent = Math.round((coveredCount / calculatedNutrients.length) * 100);

  const kpiBanner = document.getElementById('kpiBanner');
  if (!kpiBanner) return;

  const modeBadgeText = currentDosageMode === 'jenny' 
    ? '🌸 Modus: Jennys Art' 
    : '📋 Modus: Hersteller-Empfehlung';

  kpiBanner.innerHTML = `
    <div class="kpi-card">
      <div class="kpi-icon-wrap">✨</div>
      <div class="kpi-details">
        <div class="kpi-value">${coveragePercent}%</div>
        <div class="kpi-label">D-A-CH / EFSA Bedarfsdeckung (${coveredCount}/${calculatedNutrients.length} optimal)</div>
      </div>
    </div>
    <div class="kpi-card kpi-sage">
      <div class="kpi-icon-wrap">🌿</div>
      <div class="kpi-details">
        <div class="kpi-value">${activeSupps.length} Produkte</div>
        <div class="kpi-label">${totalUnits} Einheiten täglich (${modeBadgeText})</div>
      </div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon-wrap">🌸</div>
      <div class="kpi-details">
        <div class="kpi-value">${calculatedNutrients.length} Vitalstoffe</div>
        <div class="kpi-label">5 Nährstoff-Kategorien analysiert</div>
      </div>
    </div>
  `;
}

// Update Mode Switcher Buttons & Sidebar Banner
function updateDosageModeUI() {
  const btnJenny = document.getElementById('btnModeJenny');
  const btnManufacturer = document.getElementById('btnModeManufacturer');
  const modeBannerIcon = document.getElementById('modeBannerIcon');
  const modeBannerText = document.getElementById('modeBannerText');

  if (btnJenny && btnManufacturer) {
    if (currentDosageMode === 'jenny') {
      btnJenny.classList.add('active');
      btnManufacturer.classList.remove('active');
    } else {
      btnManufacturer.classList.add('active');
      btnJenny.classList.remove('active');
    }
  }

  if (modeBannerIcon && modeBannerText) {
    if (currentDosageMode === 'jenny') {
      modeBannerIcon.textContent = '🌸';
      modeBannerText.innerHTML = 'Aktiver Modus: <strong>Jennys Art</strong> (1 Kapsel / Mg: 3)';
    } else {
      modeBannerIcon.textContent = '📋';
      modeBannerText.innerHTML = 'Aktiver Modus: <strong>Hersteller-Empfehlung</strong> (Standard)';
    }
  }
}

// Render Left Sidebar: Daily Supplements
function renderSupplementsSidebar() {
  const container = document.getElementById('supplementsList');
  const countBadge = document.getElementById('sidebarCountBadge');

  if (!container) return;

  const activeSupps = supplementsState.filter(s => s.active);

  // Update Count Badge
  if (countBadge) {
    countBadge.textContent = `${activeSupps.length} aktiv`;
  }

  // Update routine stat box by daytime
  const morningCount = supplementsState.filter(s => s.timeGroup === 'morning' && s.active).length;
  const noonCount = supplementsState.filter(s => s.timeGroup === 'noon' && s.active).length;
  const eveningCount = supplementsState.filter(s => s.timeGroup === 'evening' && s.active).length;

  const routineStatsBox = document.getElementById('routineStatsBox');
  if (routineStatsBox) {
    routineStatsBox.innerHTML = `
      <div class="routine-stat-item">
        <span class="routine-stat-num">${morningCount}</span>
        <span class="routine-stat-label">☀️ Morgens</span>
      </div>
      <div class="routine-stat-item">
        <span class="routine-stat-num">${noonCount}</span>
        <span class="routine-stat-label">🌤️ Mittags</span>
      </div>
      <div class="routine-stat-item">
        <span class="routine-stat-num">${eveningCount}</span>
        <span class="routine-stat-label">🌙 Abends</span>
      </div>
    `;
  }

  const filteredSupplements = supplementsState.filter(s => {
    if (currentSidebarTimeFilter === 'all') return true;
    return s.timeGroup === currentSidebarTimeFilter;
  });

  if (filteredSupplements.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 28px 12px; color: var(--text-muted); font-size: 13px;">
        Keine Produkte für diesen Tageszeitpunkt hinterlegt.
      </div>
    `;
    return;
  }

  container.innerHTML = filteredSupplements.map(supp => {
    const imageHtml = supp.image 
      ? `<img src="${supp.image}" alt="${supp.name}" onerror="this.parentElement.innerHTML='<div class=\'supplement-img-placeholder\'>${supp.icon || '🌸'}</div>'"/>`
      : `<div class="supplement-img-placeholder">${supp.icon || '🌸'}</div>`;

    const dosageText = currentDosageMode === 'jenny' 
      ? (supp.dosageJenny || supp.dosage) 
      : (supp.dosageManufacturer || supp.dosage);

    // Indicator if dosage differs between modes
    const hasDivergence = (supp.unitsJenny !== undefined && supp.unitsManufacturer !== undefined && supp.unitsJenny !== supp.unitsManufacturer);
    const divergenceBadge = hasDivergence
      ? `<span class="divergence-tag" title="Dosierung unterscheidet sich zwischen Jennys Art und Hersteller-Empfehlung">${currentDosageMode === 'jenny' ? 'Jennys Dosierung' : 'Hersteller-Dosis'}</span>`
      : '';

    return `
      <div class="supplement-card ${!supp.active ? 'is-paused' : ''}" data-id="${supp.id}">
        <div class="supplement-top-row">
          <div class="supplement-img-wrap" title="${supp.name}">
            ${imageHtml}
          </div>
          <div class="supplement-info">
            <div class="supplement-brand">${supp.brand}</div>
            <div class="supplement-name" title="${supp.name}">${supp.name}</div>
            <div class="supplement-badges-row">
              ${supp.badge ? `<span class="supplement-badge-pill">${supp.badge}</span>` : ''}
              ${divergenceBadge}
            </div>
          </div>
        </div>

        <div class="supplement-dosage-row">
          <div class="dosage-timing">
            <span>${supp.icon}</span>
            <span>${supp.timing}</span>
          </div>
          <div class="dosage-amount">${dosageText}</div>
        </div>

        ${supp.notes ? `<div class="supplement-note-text">${supp.notes}</div>` : ''}

        <div class="supplement-bottom-bar">
          <span class="supplement-status-tag ${supp.active ? 'active-tag' : 'paused-tag'}">
            ${supp.active ? 'In Bilanz aktiv' : 'Pausiert'}
          </span>

          <button class="toggle-active-btn" data-toggle-id="${supp.id}" title="Produkt in Nährstoff-Bilanz an- oder abwählen">
            ${supp.active ? 'Pausieren' : 'Aktivieren'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Event listeners for toggle active/pause
  container.querySelectorAll('.toggle-active-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-toggle-id');
      const item = supplementsState.find(s => s.id === id);
      if (item) {
        item.active = !item.active;
        renderApp();
      }
    });
  });
}

// Render Category Filter Tabs
function renderCategoryTabs(calculatedNutrients) {
  const tabsContainer = document.getElementById('categoryTabs');
  if (!tabsContainer) return;

  const categories = [
    { id: 'all', label: 'Alle Nährstoffe' },
    { id: 'vitamins', label: '☀️ Vitamine' },
    { id: 'minerals', label: '🌙 Mineralstoffe' },
    { id: 'trace', label: '🩸 Spurenelemente' },
    { id: 'vital', label: '💧 Fettsäuren & Vitalstoffe' },
    { id: 'botanicals', label: '🍄 Adaptogene & Pilze' }
  ];

  tabsContainer.innerHTML = categories.map(cat => {
    const count = cat.id === 'all' 
      ? calculatedNutrients.length 
      : calculatedNutrients.filter(n => n.category === cat.id).length;

    return `
      <button class="category-tab ${activeCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
        <span>${cat.label}</span>
        <span class="category-tab-count">${count}</span>
      </button>
    `;
  }).join('');

  tabsContainer.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const target = e.currentTarget;
      activeCategory = target.getAttribute('data-cat');
      renderNutrientsGrid(calculateNutrientTotals());
      renderCategoryTabs(calculateNutrientTotals());
    });
  });
}

// Render Right Column: 2-Column Nutrient Grid
function renderNutrientsGrid(calculatedNutrients) {
  const grid = document.getElementById('nutrientsGrid');
  if (!grid) return;

  // Filter by category
  let filtered = calculatedNutrients;
  if (activeCategory !== 'all') {
    filtered = filtered.filter(n => n.category === activeCategory);
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
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-state-icon">🔍</div>
        <div class="empty-state-title">Keine Nährstoffe gefunden</div>
        <div class="empty-state-desc">Passe deinen Suchbegriff an oder wechsle den Kategorie-Filter.</div>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const hasAmount = item.totalAmount > 0;
    
    // Status Pill Class & Fill Class
    let pillClass = 'status-basic-pill';
    let fillClass = 'fill-gold';
    if (item.percent >= 300) {
      pillClass = 'status-high-pill';
      fillClass = 'fill-coral';
    } else if (item.percent >= 100) {
      pillClass = 'status-optimal-pill';
      fillClass = 'fill-sage';
    }

    // Capped progress bar for visual luxury (max 100% width representation)
    const barWidth = Math.min(item.percent, 100);

    const sourceTagsHtml = item.sources.length > 0 
      ? item.sources.map(s => `
          <span class="source-tag" title="${s.supplementName} (${s.dosageText})">
            <span>${s.brand}</span>
            <span class="source-tag-amount">${formatNumber(s.amount)} ${s.unit}</span>
          </span>
        `).join('')
      : `<span style="font-size: 11.5px; color: var(--text-muted); font-style: italic;">Aktuell keine Zufuhr über aktive Supplements</span>`;

    return `
      <div class="nutrient-card" data-nutrient-id="${item.id}" title="Klicken für wissenschaftliche Details &amp; Fachinformationen">
        <div class="nutrient-card-header">
          <div class="nutrient-title-group">
            <div class="nutrient-emoji-badge">${item.icon || '✨'}</div>
            <div class="nutrient-name-wrap">
              <div class="nutrient-name">${item.name}</div>
              <div class="nutrient-sub">${item.subTitle || item.categoryName}</div>
            </div>
          </div>
          <div class="nutrient-amount-badge">
            <div class="nutrient-amount-val">${formatNumber(item.totalAmount)} ${item.unit}</div>
            <span class="nutrient-percent-pill ${pillClass}">
              ${hasAmount ? `${item.percent}% Referenz` : '0%'}
            </span>
          </div>
        </div>

        <div class="progress-container">
          <div class="progress-track">
            <div class="progress-fill ${fillClass}" style="width: ${barWidth}%"></div>
          </div>
          <div class="progress-labels">
            <span class="ref-label">Referenz: ${item.refText}</span>
            <span>${item.percent}%</span>
          </div>
        </div>

        <div class="source-tags-row">
          ${sourceTagsHtml}
        </div>

        <div class="nutrient-card-footer">
          <span class="card-learn-more-link">Wissenschaftliche Analyse &amp; Quellen ↗</span>
        </div>
      </div>
    `;
  }).join('');

  // Attach modal trigger
  grid.querySelectorAll('.nutrient-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-nutrient-id');
      const nutrient = calculatedNutrients.find(n => n.id === id);
      if (nutrient) openNutrientModal(nutrient);
    });
  });
}

// Modal Detail View with Comprehensive Scientific Information
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
        <div class="modal-section-title">🧬 Biologische Hauptfunktionen &amp; EFSA-Health Claims</div>
        <ul class="modal-functions-list">
          ${nutrient.functions.map(fn => `
            <li class="modal-function-item">
              <span class="fn-bullet-icon">✦</span>
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
        <div class="modal-source-item">
          <div class="modal-source-info-wrap">
            ${s.image ? `<img src="${s.image}" class="modal-source-thumb" alt="${s.supplementName}"/>` : ''}
            <div>
              <div class="modal-source-name">${s.supplementName}</div>
              <div style="font-size: 11.5px; color: var(--text-muted);">${s.brand} &bull; ${s.dosageText}</div>
            </div>
          </div>
          <div class="modal-source-val">${formatNumber(s.amount)} ${s.unit}</div>
        </div>
      `).join('')
    : `<div style="font-size: 13px; color: var(--text-muted); padding: 10px 0;">Keine aktiven Produkte liefern aktuell diesen Nährstoff.</div>`;

  modalBody.innerHTML = `
    <div class="modal-header">
      <div class="modal-icon">${nutrient.icon || '✨'}</div>
      <div class="modal-title-wrap">
        <div class="modal-category-badge">${nutrient.categoryName}</div>
        <h2 class="modal-title">${nutrient.name}</h2>
        <div class="modal-subtitle">${nutrient.subTitle || ''} &bull; <span class="modal-mode-pill">${modeDesc}</span></div>
      </div>
    </div>

    <!-- 4-Stat Box Grid -->
    <div class="modal-grid-stats">
      <div class="modal-stat-box">
        <div class="modal-stat-label">Tagesdosis (${currentDosageMode === 'jenny' ? 'Jennys Art' : 'Hersteller'})</div>
        <div class="modal-stat-val" style="color: var(--rose-gold-dark);">
          ${formatNumber(nutrient.totalAmount)} ${nutrient.unit}
        </div>
      </div>
      <div class="modal-stat-box">
        <div class="modal-stat-label">Referenz-Deckung</div>
        <div class="modal-stat-val" style="color: var(--sage-dark);">
          ${nutrient.percent}%
        </div>
      </div>
      <div class="modal-stat-box">
        <div class="modal-stat-label">D-A-CH Referenz</div>
        <div class="modal-stat-val" style="font-size: 13.5px;">${nutrient.refText}</div>
      </div>
      <div class="modal-stat-box">
        <div class="modal-stat-label">Optimalbereich</div>
        <div class="modal-stat-val" style="font-size: 13.5px;">${nutrient.optimalRange || 'Individuell'}</div>
      </div>
    </div>

    <!-- Section 1: Functions -->
    ${functionsHtml}

    <!-- Section 2: Benefits for Jenny -->
    <div class="modal-section">
      <div class="modal-section-title">🌸 Bedeutung für Jennys Vitalität &amp; Wohlbefinden</div>
      <div class="modal-section-text">${nutrient.benefits || 'Wichtiger Bestandteil für Wohlbefinden und Vitalität.'}</div>
    </div>

    <!-- Section 3: Deficiency Signs -->
    ${nutrient.deficiencySigns ? `
      <div class="modal-section">
        <div class="modal-section-title">⚠️ Mögliche Anzeichen einer Unterversorgung (Mangel)</div>
        <div class="modal-section-text warning-text">${nutrient.deficiencySigns}</div>
      </div>
    ` : ''}

    <!-- Section 4: Bioavailability & Intake Tips -->
    ${nutrient.intakeTips ? `
      <div class="modal-section">
        <div class="modal-section-title">💡 Bioverfügbarkeit &amp; Einnahme-Tipps (Synergien)</div>
        <div class="modal-section-text tip-text">${nutrient.intakeTips}</div>
      </div>
    ` : ''}

    <!-- Section 5: EFSA Upper Limit -->
    <div class="modal-section">
      <div class="modal-section-title">🛡️ EFSA Sicherheitsbereich (Tolerable Upper Intake Level)</div>
      <div class="modal-section-text">${nutrient.efsaUpperLimit || 'Keine toxischen Obergrenzen bei physiologischer Einnahme.'}</div>
    </div>

    <!-- Section 6: Sources in Supplements -->
    <div class="modal-section">
      <div class="modal-section-title">📦 Enthalten in Jennys aktuellen Supplements</div>
      <div class="modal-sources-list">
        ${sourcesListHtml}
      </div>
    </div>

    <!-- Section 7: Verified External Scientific Source Link -->
    ${nutrient.learnMoreUrl ? `
      <div class="modal-section modal-reference-section">
        <div class="modal-section-title">🔗 Fundierte wissenschaftliche Fachquelle</div>
        <div class="modal-link-card">
          <div class="modal-link-info">
            <span class="modal-link-source-badge">Offizielle Referenz</span>
            <div class="modal-link-title">${nutrient.learnMoreSource || 'Wissenschaftliche Quelle'}</div>
            <div class="modal-link-desc">Detailinformationen, klinische Studien und Referenzwerte der Behörden.</div>
          </div>
          <a href="${nutrient.learnMoreUrl}" target="_blank" rel="noopener noreferrer" class="modal-external-btn">
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

// Full App Render
function renderApp() {
  const calculatedNutrients = calculateNutrientTotals();
  updateDosageModeUI();
  renderKPIs(calculatedNutrients);
  renderSupplementsSidebar();
  renderCategoryTabs(calculatedNutrients);
  renderNutrientsGrid(calculatedNutrients);
}

// Mobile Header Shrink on Scroll
function initHeaderScrollListener() {
  const headerEl = document.getElementById('mainHeader');
  if (!headerEl) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 25) {
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

// Initial Setup & Event Listeners
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

  // Sidebar Time Filter Chips
  document.querySelectorAll('.time-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      document.querySelectorAll('.time-chip').forEach(c => c.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentSidebarTimeFilter = e.currentTarget.getAttribute('data-time');
      renderSupplementsSidebar();
    });
  });

  // Search Input Handlers
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

  // Modal Close Handlers
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
