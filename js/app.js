/**
 * Jennys Nährstoffe - Application Logic
 * Gestaltet nach dem Blueprint & Design-System von Djalals Nährstoffe
 * Wissenschaftlich, hochleserlich mit warmem Amber/Orange-Farbschema & stilvoller grüner Bedarfsdeckung
 */

import { JENNY_SUPPLEMENTS, NUTRIENTS_MASTER } from './data.js?v=3.4.0';

const SHORT_PRODUCT_NAMES = {
  'orthomol-vital-f': 'Orthomol Vital f',
  'orthomol-vit-c-depo': 'Orthomol Vit. C',
  'sunday-omega3-komplex': 'Sunday Omega-3',
  'zinzino-essent-plus': 'Zinzino Essent+',
  'sunday-d3-k2-depot': 'Sunday D3+K2',
  'sunday-ashwagandha-ksm66': 'Sunday Ashwagandha',
  'sunday-reishi-extrakt': 'Sunday Reishi',
  'sunday-chaga-extrakt': 'Sunday Chaga',
  'sports-magnesium-bisglycinat': 'Sports & Health Mg'
};

document.addEventListener('DOMContentLoaded', () => {
  // State
  let supplementsState = JSON.parse(JSON.stringify(JENNY_SUPPLEMENTS));
  let currentDosageMode = localStorage.getItem('jenny_dosage_mode') || 'jenny'; // 'jenny' | 'manufacturer'
  let selectedSupplementId = null;
  let activeCategory = 'all';
  let currentDaytimeFilter = 'all';
  let currentSearch = '';

  // DOM Elements
  const suppContainer = document.getElementById('supplements-list');
  const nutContainer = document.getElementById('nutrients-list');
  const activeFilterContainer = document.getElementById('active-filter-container');
  const categoryTabsContainer = document.getElementById('category-tabs-container');
  const modalContainer = document.getElementById('modal-container');
  const searchInput = document.getElementById('search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const suppCountPill = document.getElementById('supplements-count-pill');
  const btnModeJenny = document.getElementById('btnModeJenny');
  const btnModeManufacturer = document.getElementById('btnModeManufacturer');
  const activeModeCaption = document.getElementById('activeModeCaption');
  const daytimePills = document.querySelectorAll('.daytime-pill');

  // Clean Number Formatting
  function formatNumber(num) {
    if (num === undefined || num === null || isNaN(num)) return 0;
    if (num >= 100) return Math.round(num).toLocaleString('de-DE');
    if (num >= 10) return Number(num.toFixed(1)).toLocaleString('de-DE');
    if (num >= 1) return Number(num.toFixed(1)).toLocaleString('de-DE');
    return Number(num.toFixed(2)).toLocaleString('de-DE');
  }

  // Calculate Nutrients based on Active Dosage Mode
  function calculateNutrients() {
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
              shortName: SHORT_PRODUCT_NAMES[supp.id] || supp.name,
              brand: supp.brand,
              amount: amount,
              unit: nutrient.unit,
              image: supp.image,
              dosageText: currentDosageMode === 'jenny' 
                ? (supp.dosageJenny || supp.dosage) 
                : (supp.dosageManufacturer || supp.dosage)
            });
          }
        }
      });

      const percent = nutrient.refVal > 0 ? Math.round((totalAmount / nutrient.refVal) * 100) : 0;
      const amountFormatted = `${formatNumber(totalAmount)} ${nutrient.unit}`;
      
      let sourceTag = 'Nicht abgedeckt';
      if (sources.length === 1) {
        sourceTag = sources[0].shortName || sources[0].brand;
      } else if (sources.length > 1) {
        sourceTag = `${sources.length} Quellen`;
      }

      return {
        ...nutrient,
        totalAmount,
        percent,
        amountFormatted,
        sourceTag,
        sources,
        supplementIds: sources.map(s => s.supplementId)
      };
    });
  }

  // 1. Render Header KPI Stats
  function renderHeaderStats(calculatedNutrients) {
    const activeSupps = supplementsState.filter(s => s.active);
    const suppCountEl = document.getElementById('statSuppCount');
    const nutrientCountEl = document.getElementById('statNutrientCount');

    if (suppCountEl) suppCountEl.textContent = activeSupps.length;
    if (nutrientCountEl) nutrientCountEl.textContent = calculatedNutrients.length;
  }

  // 2. Render Dosage Mode UI
  function renderDosageModeUI() {
    if (btnModeJenny && btnModeManufacturer) {
      if (currentDosageMode === 'jenny') {
        btnModeJenny.classList.add('active');
        btnModeManufacturer.classList.remove('active');
      } else {
        btnModeManufacturer.classList.add('active');
        btnModeJenny.classList.remove('active');
      }
    }

    if (activeModeCaption) {
      if (currentDosageMode === 'jenny') {
        activeModeCaption.innerHTML = 'Modus: <strong>Jennys Art</strong> (1 Kapsel tgl., Mg: 3 Kapseln)';
      } else {
        activeModeCaption.innerHTML = 'Modus: <strong>Hersteller-Empfehlung</strong> (Standard-Packungsangabe)';
      }
    }
  }

  // 3. Render Supplements List (Left Sidebar)
  function renderSupplements() {
    if (!suppContainer) return;

    const filteredSupplements = supplementsState.filter(supp => {
      if (currentDaytimeFilter === 'all') return true;
      return supp.timeGroup === currentDaytimeFilter;
    });

    if (suppCountPill) {
      suppCountPill.textContent = `${supplementsState.filter(s => s.active).length} Produkte`;
    }

    if (filteredSupplements.length === 0) {
      suppContainer.innerHTML = `
        <div class="empty-sidebar-note">
          Keine Produkte für diesen Tageszeitpunkt hinterlegt.
        </div>
      `;
      return;
    }

    suppContainer.innerHTML = filteredSupplements.map(supp => {
      const isSelected = supp.id === selectedSupplementId;
      const dosageText = currentDosageMode === 'jenny'
        ? (supp.dosageJenny || supp.dosage)
        : (supp.dosageManufacturer || supp.dosage);

      const imageHtml = supp.image 
        ? `<img src="${supp.image}" alt="${supp.name}" class="supp-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
           <span class="supp-img-fallback" style="display:none;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg></span>`
        : `<span class="supp-img-fallback"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg></span>`;

      return `
        <div class="supp-card ${isSelected ? 'is-selected' : ''}" 
             data-id="${supp.id}" 
             role="button" 
             tabindex="0" 
             aria-pressed="${isSelected}">
          <div class="supp-card-body">
            <div class="supp-img-box">
              ${imageHtml}
            </div>
            <div class="supp-details">
              <div class="supp-card-top">
                <span class="supp-brand">${supp.brand}</span>
                <span class="supp-timing-badge">${supp.timing}</span>
              </div>
              <h3 class="supp-title">${supp.name}</h3>
            </div>
          </div>
          <div class="supp-dose-box">
            <span class="supp-dose-val">${dosageText}</span>
            <div class="supp-badge-group">
              ${supp.badge ? `<span class="supp-badge">${supp.badge}</span>` : ''}
              <span class="supp-select-indicator">
                ${isSelected 
                  ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Aktiv` 
                  : `Filtern ➔`}
              </span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click & keyboard listeners to cards
    const cards = suppContainer.querySelectorAll('.supp-card');
    cards.forEach(card => {
      const id = card.dataset.id;

      card.addEventListener('click', () => {
        toggleSupplementFilter(id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleSupplementFilter(id);
        }
      });
    });
  }

  function toggleSupplementFilter(id) {
    if (selectedSupplementId === id) {
      selectedSupplementId = null;
    } else {
      selectedSupplementId = id;
    }
    renderSupplements();
    renderNutrients();
  }

  // 4. Render Active Filter Banner
  function renderActiveFilterBanner(filteredCount) {
    if (!activeFilterContainer) return;

    if (!selectedSupplementId) {
      activeFilterContainer.innerHTML = '';
      return;
    }

    const activeSupp = supplementsState.find(s => s.id === selectedSupplementId);
    if (!activeSupp) {
      activeFilterContainer.innerHTML = '';
      return;
    }

    activeFilterContainer.innerHTML = `
      <div class="active-filter-banner">
        <div class="active-filter-left">
          <div class="active-filter-icon">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
          </div>
          <div class="active-filter-text">
            Gefiltert nach: <span class="active-filter-name">${activeSupp.name}</span> (${activeSupp.brand}) • <span class="active-filter-count">${filteredCount} Nährstoff${filteredCount === 1 ? '' : 'e'}</span>
          </div>
        </div>
        <button class="clear-filter-btn" id="clear-filter-btn" title="Filter aufheben">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          Filter aufheben
        </button>
      </div>
    `;

    const clearBtn = document.getElementById('clear-filter-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        selectedSupplementId = null;
        renderSupplements();
        renderNutrients();
      });
    }
  }

  // 5. Render Category Filter Tabs
  function renderCategoryTabs(calculatedNutrients) {
    if (!categoryTabsContainer) return;

    const categories = [
      { id: 'all', label: 'Alle' },
      { id: 'vitamins', label: 'Vitamine' },
      { id: 'minerals-trace', label: 'Mineralstoffe & Spurenelemente' },
      { id: 'vital', label: 'Omega-3 & Vitalstoffe' },
      { id: 'botanicals', label: 'Adaptogene & Pilze' }
    ];

    categoryTabsContainer.innerHTML = categories.map(cat => {
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
        <button class="filter-pill ${isActive ? 'active' : ''}" data-cat="${cat.id}">
          <span>${cat.label}</span>
          <span style="opacity: 0.75; font-size: 0.76rem;">(${count})</span>
        </button>
      `;
    }).join('');

    categoryTabsContainer.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        activeCategory = e.currentTarget.getAttribute('data-cat');
        renderCategoryTabs(calculateNutrients());
        renderNutrients();
      });
    });
  }

  // 6. Render Nutrients Cards Grid
  function renderNutrients() {
    if (!nutContainer) return;

    const calculatedNutrients = calculateNutrients();

    const filtered = calculatedNutrients.filter(item => {
      // Category filter
      if (activeCategory !== 'all') {
        if (activeCategory === 'minerals-trace') {
          if (item.category !== 'minerals' && item.category !== 'trace') return false;
        } else if (item.category !== activeCategory) {
          return false;
        }
      }

      // Supplement filter (when card in sidebar is clicked)
      if (selectedSupplementId) {
        if (!item.supplementIds || !item.supplementIds.includes(selectedSupplementId)) {
          return false;
        }
      }

      // Search filter
      if (currentSearch) {
        const q = currentSearch.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchSub = (item.subTitle || '').toLowerCase().includes(q);
        const matchBenefits = (item.benefits || '').toLowerCase().includes(q);
        const matchSource = item.sources.some(s => s.supplementName.toLowerCase().includes(q) || s.brand.toLowerCase().includes(q));
        if (!matchName && !matchSub && !matchBenefits && !matchSource) return false;
      }

      return true;
    });

    renderActiveFilterBanner(filtered.length);

    if (filtered.length === 0) {
      const activeSupp = supplementsState.find(s => s.id === selectedSupplementId);
      const suppText = activeSupp ? ` im Supplement "${activeSupp.name}"` : '';
      const searchText = currentSearch ? ` für "${currentSearch}"` : '';

      nutContainer.innerHTML = `
        <div class="empty-msg">
          <p>Keine Nährstoffe${suppText}${searchText} gefunden.</p>
          <button class="clear-filter-btn" id="reset-all-filters-btn" style="margin-top: 14px;">
            Filter zurücksetzen
          </button>
        </div>
      `;

      const resetBtn = document.getElementById('reset-all-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          selectedSupplementId = null;
          activeCategory = 'all';
          currentSearch = '';
          if (searchInput) searchInput.value = '';
          if (searchClearBtn) searchClearBtn.style.display = 'none';
          renderCategoryTabs(calculatedNutrients);
          renderSupplements();
          renderNutrients();
        });
      }
      return;
    }

    nutContainer.innerHTML = filtered.map(item => {
      const barWidth = Math.min(item.percent, 100);
      const isEfsa = (item.refText || '').includes('EFSA');
      const isMissing = item.totalAmount === 0;
      const percentBadgeText = isMissing ? '0% • Fehlt' : `${item.percent}% ${isEfsa ? 'EFSA' : 'D-A-CH'}`;
      const pillClass = isMissing ? 'nut-percent-pill is-missing' : 'nut-percent-pill';

      const refTagText = item.refVal > 0 
        ? `Ref: ${formatNumber(item.refVal)} ${item.unit}` 
        : `Ref: ${item.refText}`;

      return `
        <div class="nut-card ${isMissing ? 'is-missing' : ''}" data-nutrient-id="${item.id}" role="button" tabindex="0">
          <div class="nut-top-row">
            <div class="nut-title-box">
              <div class="nut-name-row">
                <span class="nut-name">${item.name}</span>
                <button class="nut-info-btn" data-nutrient-id="${item.id}" aria-label="Wissenschaftliche Infos zu ${item.name}" title="Wissenschaftliche Details anzeigen">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <span class="info-btn-text">Info</span>
                </button>
              </div>
              <span class="nut-extra">${item.subTitle || item.categoryName}</span>
            </div>
            <span class="nut-ref-tag" title="${item.refText}">${refTagText}</span>
          </div>

          <div class="nut-amount-row">
            <span class="nut-amount-val">${item.amountFormatted}</span>
            <span class="${pillClass}">${percentBadgeText}</span>
          </div>

          <div class="nut-progress-track" title="Referenzwert: ${item.refText}">
            <div class="nut-progress-fill" style="width: ${barWidth}%;"></div>
          </div>

          <!-- Bottom Sources Breakdown Strip -->
          <div class="nut-sources-strip">
            ${item.sources && item.sources.length > 0
              ? item.sources.map(s => `
                  <span class="nut-source-chip" title="${s.supplementName} (${s.brand})">
                    <span class="source-chip-name">${s.shortName}</span>
                    <strong class="source-chip-val">${formatNumber(s.amount)} ${s.unit}</strong>
                  </span>
                `).join('')
              : `<span class="nut-source-chip is-missing">Keine direkte Supplement-Quelle</span>`
            }
          </div>
        </div>
      `;
    }).join('');

    // Attach click handlers ONLY to info buttons (prevents scroll hijacking on mobile touch screens)
    nutContainer.querySelectorAll('.nut-info-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = btn.dataset.nutrientId;
        if (id) openNutrientModal(id);
      });
    });
  }

  // 7. Scientific Detail Modal
  function openNutrientModal(nutrientId) {
    if (!modalContainer) return;

    const calculatedNutrients = calculateNutrients();
    const item = calculatedNutrients.find(n => n.id === nutrientId);
    if (!item) return;

    const modeDesc = currentDosageMode === 'jenny' ? 'Jennys Art (1 Kapsel tgl., Mg: 3)' : 'Hersteller-Empfehlung';

    const functionsHtml = item.functions && item.functions.length > 0
      ? `
        <div class="modal-section">
          <h3 class="modal-sec-heading">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            Biochemische & Physiologische Funktion
          </h3>
          <ul class="modal-checklist">
            ${item.functions.map(fn => `
              <li class="modal-check-item">
                <span class="check-bullet">✓</span>
                <span>${fn}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `
      : '';

    const sourcesHtml = item.sources && item.sources.length > 0
      ? `
        <div class="modal-sources-grid">
          ${item.sources.map(s => `
            <div class="modal-source-item">
              <div class="modal-source-img">
                <img src="${s.image}" alt="${s.supplementName}" onerror="this.parentElement.innerHTML='💊'">
              </div>
              <div class="modal-source-info">
                <strong>${s.supplementName}</strong>
                <span>${s.brand} • ${s.dosageText}</span>
                <span class="modal-source-amount">+ ${formatNumber(s.amount)} ${s.unit}</span>
              </div>
            </div>
          `).join('')}
        </div>
      `
      : `
        <div class="modal-empty-source-box">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <span>Aktuell in keinem deiner Supplements enthalten (0 ${item.unit} Zufuhr).</span>
        </div>
      `;

    modalContainer.innerHTML = `
      <div class="modal-backdrop" id="modal-backdrop">
        <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-nutrient-title">
          
          <!-- Modal Header -->
          <div class="modal-header">
            <div class="modal-title-group">
              <span class="modal-category-badge">${item.categoryName}</span>
              <h2 id="modal-nutrient-title" class="modal-title">${item.name}</h2>
              <span class="modal-subtitle">${item.subTitle || ''} &bull; ${modeDesc}</span>
            </div>
            <button class="modal-close-btn" id="modal-close-btn" aria-label="Modal schließen" title="Schließen (Esc)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <!-- Modal Body Content -->
          <div class="modal-body">
            
            <!-- Key Metric Strip (3 Tiles) -->
            <div class="modal-metric-strip">
              <div class="metric-tile">
                <span class="metric-lbl">Aktuelle Tagesdosis</span>
                <span class="metric-val text-emerald-stat">${item.amountFormatted}</span>
              </div>
              <div class="metric-tile">
                <span class="metric-lbl">Offizielle Referenz</span>
                <span class="metric-val">${item.refText}</span>
              </div>
              <div class="metric-tile">
                <span class="metric-lbl">Tagesdeckung</span>
                <span class="metric-val text-emerald-stat">${item.percent}%</span>
              </div>
            </div>

            <!-- Sources in Stack Section -->
            <div class="modal-section">
              <h3 class="modal-sec-heading">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                Quellen in deiner täglichen Routine
              </h3>
              ${sourcesHtml}
            </div>

            <!-- Physiological Function Section -->
            ${functionsHtml}

            <!-- Vitality Benefits for Jenny -->
            ${item.benefits ? `
              <div class="modal-section modal-sec-highlight">
                <h3 class="modal-sec-heading">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  Bedeutung für Jennys Vitalität & Stoffwechsel
                </h3>
                <p class="modal-text">${item.benefits}</p>
              </div>
            ` : ''}

            <!-- Deficiency Signs -->
            ${item.deficiencySigns ? `
              <div class="modal-section modal-sec-warning">
                <h3 class="modal-sec-heading">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  Anzeichen einer Unterversorgung (Mangel)
                </h3>
                <p class="modal-text">${item.deficiencySigns}</p>
              </div>
            ` : ''}

            <!-- Bioavailability & Intake Advice -->
            ${item.intakeTips ? `
              <div class="modal-section">
                <h3 class="modal-sec-heading">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/></svg>
                  Bioverfügbarkeit & Optimale Einnahme
                </h3>
                <p class="modal-text">${item.intakeTips}</p>
              </div>
            ` : ''}

            <!-- EFSA Safety & Upper Limit -->
            <div class="modal-section">
              <h3 class="modal-sec-heading">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                EFSA Tolerable Upper Intake Level & Sicherheit
              </h3>
              <p class="modal-text">${item.efsaUpperLimit || 'Keine toxischen Obergrenzen bei physiologischer Einnahme.'}</p>
            </div>

            <!-- Scientific Reference Footnote & Verified Link -->
            ${item.learnMoreUrl ? `
              <div class="modal-ref-link-card">
                <div class="modal-ref-info">
                  <span class="modal-ref-badge">Offizielle Behörden- & Studienreferenz</span>
                  <div class="modal-ref-title">${item.learnMoreSource || 'Wissenschaftliche Quelle'}</div>
                  <div class="modal-ref-desc">Detailinformationen, klinische Studien und Referenzwerte der Behörden.</div>
                </div>
                <a href="${item.learnMoreUrl}" target="_blank" rel="noopener noreferrer" class="ref-open-btn">
                  Fachquelle öffnen ↗
                </a>
              </div>
            ` : ''}

          </div>

          <!-- Modal Footer Actions -->
          <div class="modal-footer">
            <button class="modal-btn-action" id="modal-btn-close">Verstanden & Schließen</button>
          </div>

        </div>
      </div>
    `;

    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');

    const closeBtn = document.getElementById('modal-close-btn');
    const actionBtn = document.getElementById('modal-btn-close');
    const backdrop = document.getElementById('modal-backdrop');

    function closeModal() {
      if (modalContainer) modalContainer.innerHTML = '';
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeydown);
    }

    function handleKeydown(e) {
      if (e.key === 'Escape') closeModal();
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (actionBtn) actionBtn.addEventListener('click', closeModal);
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeModal();
      });
    }

    document.addEventListener('keydown', handleKeydown);
  }

  // 8. Event Handlers & Initial Setup
  function updateAll() {
    const nutrients = calculateNutrients();
    renderHeaderStats(nutrients);
    renderDosageModeUI();
    renderSupplements();
    renderCategoryTabs(nutrients);
    renderNutrients();
  }

  // Dosage Switcher Buttons
  if (btnModeJenny) {
    btnModeJenny.addEventListener('click', () => {
      if (currentDosageMode !== 'jenny') {
        currentDosageMode = 'jenny';
        localStorage.setItem('jenny_dosage_mode', 'jenny');
        updateAll();
      }
    });
  }

  if (btnModeManufacturer) {
    btnModeManufacturer.addEventListener('click', () => {
      if (currentDosageMode !== 'manufacturer') {
        currentDosageMode = 'manufacturer';
        localStorage.setItem('jenny_dosage_mode', 'manufacturer');
        updateAll();
      }
    });
  }

  // Daytime Filter Buttons
  daytimePills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      daytimePills.forEach(p => p.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentDaytimeFilter = e.currentTarget.getAttribute('data-time');
      renderSupplements();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      if (searchClearBtn) {
        searchClearBtn.style.display = currentSearch.length > 0 ? 'flex' : 'none';
      }
      renderNutrients();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearch = '';
      searchClearBtn.style.display = 'none';
      renderNutrients();
    });
  }

  // Back to top floating button
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 320) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Initial Full Render
  updateAll();
});
