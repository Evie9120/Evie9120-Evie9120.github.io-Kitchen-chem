// ==================== EXPANDED COMPOUND DATABASE (syntax fixed) ====================
const COMPOUNDS_DB = {
  // Diatomic elements
  H2:   { id:"H2", name:"Hydrogen Gas", icon:"⚛️", formulaObj:{ H:2 }, fact:"Lightest gas", baseUnlock: true },
  O2:   { id:"O2", name:"Oxygen Gas", icon:"💨", formulaObj:{ O:2 }, fact:"Supports combustion", baseUnlock: true },
  N2:   { id:"N2", name:"Nitrogen Gas", icon:"🌬️", formulaObj:{ N:2 }, fact:"78% of air", baseUnlock: true },
  Cl2:  { id:"Cl2", name:"Chlorine Gas", icon:"☁️", formulaObj:{ Cl:2 }, fact:"Toxic gas", baseUnlock: false },
  // Small molecules
  H2O:     { id:"H2O", name:"Water", icon:"💧", formulaObj:{ H:2, O:1 }, fact:"Universal solvent", baseUnlock: true },
  NaCl:    { id:"NaCl", name:"Sodium Chloride", icon:"🧂", formulaObj:{ Na:1, Cl:1 }, fact:"Table salt", baseUnlock: true },
  CO2:     { id:"CO2", name:"Carbon Dioxide", icon:"🌫️", formulaObj:{ C:1, O:2 }, fact:"Greenhouse gas", baseUnlock: true },
  CH4:     { id:"CH4", name:"Methane", icon:"🔥", formulaObj:{ C:1, H:4 }, fact:"Natural gas", baseUnlock: true },
  NH3:     { id:"NH3", name:"Ammonia", icon:"🧪", formulaObj:{ N:1, H:3 }, fact:"Fertilizer", baseUnlock: true },
  C2H5OH:  { id:"C2H5OH", name:"Ethanol", icon:"🍷", formulaObj:{ C:2, H:6, O:1 }, fact:"Alcohol", baseUnlock: true },
  HCl:     { id:"HCl", name:"Hydrochloric Acid", icon:"⚗️", formulaObj:{ H:1, Cl:1 }, fact:"Stomach acid", baseUnlock: false },
  H2O2:    { id:"H2O2", name:"Hydrogen Peroxide", icon:"🫧", formulaObj:{ H:2, O:2 }, fact:"Antiseptic", baseUnlock: false },
  H2SO4:   { id:"H2SO4", name:"Sulfuric Acid", icon:"🧴", formulaObj:{ H:2, S:1, O:4 }, fact:"Industrial acid", baseUnlock: false },
  NaHCO3:  { id:"NaHCO3", name:"Sodium Bicarbonate", icon:"🥄", formulaObj:{ Na:1, H:1, C:1, O:3 }, fact:"Baking soda", baseUnlock: false },
  C6H12O6: { id:"C6H12O6", name:"Glucose", icon:"🍬", formulaObj:{ C:6, H:12, O:6 }, fact:"Cellular fuel", baseUnlock: false },
  C12H22O11:{ id:"C12H22O11", name:"Sucrose", icon:"🍭", formulaObj:{ C:12, H:22, O:11 }, fact:"Table sugar", baseUnlock: false },
  H2CO3:   { id:"H2CO3", name:"Carbonic Acid", icon:"🥤", formulaObj:{ H:2, C:1, O:3 }, fact:"Makes soda fizzy", baseUnlock: false },
  NH4Cl:   { id:"NH4Cl", name:"Ammonium Chloride", icon:"⚡", formulaObj:{ N:1, H:4, Cl:1 }, fact:"Sal ammoniac", baseUnlock: false },
  // Oxides
  Al2O3:   { id:"Al2O3", name:"Alumina", icon:"🪨", formulaObj:{ Al:2, O:3 }, fact:"Corundum, sapphire", baseUnlock: false },
  Fe2O3:   { id:"Fe2O3", name:"Iron(III) Oxide", icon:"🟤", formulaObj:{ Fe:2, O:3 }, fact:"Rust", baseUnlock: false },
  SiO2:    { id:"SiO2", name:"Silica", icon:"⛰️", formulaObj:{ Si:1, O:2 }, fact:"Quartz, sand", baseUnlock: false },
  CaO:     { id:"CaO", name:"Quicklime", icon:"🪨", formulaObj:{ Ca:1, O:1 }, fact:"Calcium oxide", baseUnlock: false },
  MgO:     { id:"MgO", name:"Magnesia", icon:"⚪", formulaObj:{ Mg:1, O:1 }, fact:"Refractory material", baseUnlock: false },
  CuO:     { id:"CuO", name:"Copper(II) Oxide", icon:"🔶", formulaObj:{ Cu:1, O:1 }, fact:"Black powder", baseUnlock: false },
  ZnO:     { id:"ZnO", name:"Zinc Oxide", icon:"⚪", formulaObj:{ Zn:1, O:1 }, fact:"Sunscreen ingredient", baseUnlock: false },
  // Acids & Bases
  HNO3:    { id:"HNO3", name:"Nitric Acid", icon:"🧪", formulaObj:{ H:1, N:1, O:3 }, fact:"Strong oxidizing acid", baseUnlock: false },
  H3PO4:   { id:"H3PO4", name:"Phosphoric Acid", icon:"🧴", formulaObj:{ H:3, P:1, O:4 }, fact:"Rust remover, soda", baseUnlock: false },
  CH3COOH: { id:"CH3COOH", name:"Acetic Acid", icon:"🍶", formulaObj:{ C:2, H:4, O:2 }, fact:"Vinegar", baseUnlock: false },
  NaOH:    { id:"NaOH", name:"Sodium Hydroxide", icon:"🧼", formulaObj:{ Na:1, O:1, H:1 }, fact:"Lye, caustic soda", baseUnlock: false },
  KOH:     { id:"KOH", name:"Potassium Hydroxide", icon:"🧼", formulaObj:{ K:1, O:1, H:1 }, fact:"Potash", baseUnlock: false },
  CaOH2:   { id:"CaOH2", name:"Calcium Hydroxide", icon:"🧱", formulaObj:{ Ca:1, O:2, H:2 }, fact:"Slaked lime", baseUnlock: false },
  // Salts
  KCl:     { id:"KCl", name:"Potassium Chloride", icon:"🧂", formulaObj:{ K:1, Cl:1 }, fact:"Salt substitute", baseUnlock: false },
  CaCl2:   { id:"CaCl2", name:"Calcium Chloride", icon:"❄️", formulaObj:{ Ca:1, Cl:2 }, fact:"Ice melt", baseUnlock: false },
  MgCl2:   { id:"MgCl2", name:"Magnesium Chloride", icon:"💊", formulaObj:{ Mg:1, Cl:2 }, fact:"From seawater", baseUnlock: false },
  Na2SO4:  { id:"Na2SO4", name:"Sodium Sulfate", icon:"🧪", formulaObj:{ Na:2, S:1, O:4 }, fact:"Glauber's salt", baseUnlock: false },
  K2CO3:   { id:"K2CO3", name:"Potassium Carbonate", icon:"🧂", formulaObj:{ K:2, C:1, O:3 }, fact:"Potash", baseUnlock: false },
  CaCO3:   { id:"CaCO3", name:"Calcium Carbonate", icon:"🪨", formulaObj:{ Ca:1, C:1, O:3 }, fact:"Limestone, chalk", baseUnlock: false },
  // Organics
  C2H2:    { id:"C2H2", name:"Acetylene", icon:"🔆", formulaObj:{ C:2, H:2 }, fact:"Welding gas", baseUnlock: false },
  C3H8:    { id:"C3H8", name:"Propane", icon:"🔥", formulaObj:{ C:3, H:8 }, fact:"BBQ fuel", baseUnlock: false },
  C8H18:   { id:"C8H18", name:"Octane", icon:"⛽", formulaObj:{ C:8, H:18 }, fact:"Gasoline component", baseUnlock: false }
};

// Periodic table categories
const ELEMENTS_CATEGORIES = {
  "Alkali Metals":   ["Li","Na","K","Rb","Cs"],
  "Alkaline Earth":  ["Be","Mg","Ca","Sr","Ba"],
  "Transition Metals":["Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ag","Au","Hg","Cd"],
  "Nonmetals":       ["H","C","N","P","O","S","Se"],
  "Halogens":        ["F","Cl","Br","I"],
  "Noble Gases":     ["He","Ne","Ar","Kr","Xe"]
};
const ELEMENT_NAMES = {
  H:"Hydrogen", He:"Helium", Li:"Lithium", Be:"Beryllium", B:"Boron", C:"Carbon", N:"Nitrogen", O:"Oxygen",
  F:"Fluorine", Ne:"Neon", Na:"Sodium", Mg:"Magnesium", Al:"Aluminium", Si:"Silicon", P:"Phosphorus",
  S:"Sulfur", Cl:"Chlorine", Ar:"Argon", K:"Potassium", Ca:"Calcium", Sc:"Scandium", Ti:"Titanium",
  V:"Vanadium", Cr:"Chromium", Mn:"Manganese", Fe:"Iron", Co:"Cobalt", Ni:"Nickel", Cu:"Copper",
  Zn:"Zinc", Ag:"Silver", Au:"Gold", Hg:"Mercury", Cd:"Cadmium", Br:"Bromine", I:"Iodine",
  Rb:"Rubidium", Cs:"Caesium", Sr:"Strontium", Ba:"Barium", Se:"Selenium", Kr:"Krypton", Xe:"Xenon"
};

// GLOBAL STATE
let bubbles = [];
let nextId = 100;
let discoveredRecipes = new Set();
let dragState = { active: false, bubbleId: null, startX: 0, startY: 0, initialLeft: 0, initialTop: 0, hasMoved: false };

// DOM elements
const canvas = document.getElementById('bubbleCanvas');
const recipeContainer = document.getElementById('recipeListContainer');
const bubbleCountSpan = document.getElementById('bubbleCount');
const recipeCountSpan = document.getElementById('recipeCount');
const clearBtn = document.getElementById('clearBenchBtn');
const mergeBtn = document.getElementById('mergeBtn');
const statusMsg = document.getElementById('statusMsg');
const periodicContainer = document.getElementById('periodicContainer');
const drawerToggle = document.getElementById('drawerToggle');
const periodicDrawer = document.getElementById('periodicDrawer');

function showMessage(msg, isError = false) {
  statusMsg.textContent = msg;
  statusMsg.classList.remove('hidden');
  statusMsg.style.background = isError ? '#aa3a2cbb' : '#1f7460dd';
  setTimeout(() => statusMsg.classList.add('hidden'), 2200);
}

function updateUI() {
  bubbleCountSpan.innerText = bubbles.length;
  recipeCountSpan.innerText = discoveredRecipes.size;
  renderRecipeBook();
}

function renderRecipeBook() {
  const discoveredList = Array.from(discoveredRecipes).map(id => COMPOUNDS_DB[id]).filter(c => c).sort((a,b)=>a.name.localeCompare(b.name));
  recipeContainer.innerHTML = '';
  if (discoveredList.length === 0) {
    recipeContainer.innerHTML = '<div class="recipe-card" style="text-align:center;">✨ Combine atoms to discover recipes</div>';
    return;
  }
  discoveredList.forEach(comp => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    let formulaStr = Object.entries(comp.formulaObj).map(([e,c]) => c===1 ? e : `${e}${c}`).join('');
    card.innerHTML = `
      <div class="recipe-name"><span style="font-size:1.3rem;">${comp.icon}</span> ${comp.name}</div>
      <div class="recipe-formula">${formulaStr}</div>
      <div class="recipe-fact">💡 ${comp.fact}</div>
    `;
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      spawnBubble(comp.id, null, null, 1);
      showMessage(`✨ spawned ${comp.name}`, false);
    });
    recipeContainer.appendChild(card);
  });
}

function getTotalCounts(bubble) {
  const comp = COMPOUNDS_DB[bubble.compoundId];
  if (!comp || !comp.formulaObj) return {};
  const result = {};
  for (let [elem, num] of Object.entries(comp.formulaObj)) {
    result[elem] = num * bubble.qty;
  }
  return result;
}

function elementsOverlap(el1, el2) {
  const r1 = el1.getBoundingClientRect(), r2 = el2.getBoundingClientRect();
  return !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);
}

function getOverlappingGroup(bubble) {
  const group = [bubble];
  for (let other of bubbles) {
    if (other.id === bubble.id) continue;
    if (elementsOverlap(bubble.dom, other.dom)) group.push(other);
  }
  return group;
}

function tryMergeGroup(group) {
  if (group.length < 2) return false;
  const total = {};
  for (let b of group) {
    for (let [elem, n] of Object.entries(getTotalCounts(b))) total[elem] = (total[elem] || 0) + n;
  }
  let matchedId = null;
  for (let [id, comp] of Object.entries(COMPOUNDS_DB)) {
    if (!comp.formulaObj) continue;
    let match = true;
    for (let [elem, num] of Object.entries(comp.formulaObj)) {
      if ((total[elem] || 0) !== num) { match = false; break; }
    }
    if (match) {
      for (let elem in total) {
        if (!comp.formulaObj[elem]) { match = false; break; }
      }
    }
    if (match) { matchedId = id; break; }
  }
  if (matchedId) {
    let sumX = 0, sumY = 0;
    for (let b of group) { sumX += b.x; sumY += b.y; }
    const avgX = sumX / group.length;
    const avgY = sumY / group.length;
    for (let b of group) removeBubbleById(b.id, true);
    spawnBubble(matchedId, avgX, avgY, 1);
    if (!discoveredRecipes.has(matchedId)) {
      discoveredRecipes.add(matchedId);
      showMessage(`🔬 NEW RECIPE: ${COMPOUNDS_DB[matchedId].name}!`, false);
    } else {
      showMessage(`🧪 Synthesized ${COMPOUNDS_DB[matchedId].name}`, false);
    }
    updateUI();
    return true;
  }
  return false;
}

function spawnBubble(compoundId, x = null, y = null, quantity = 1) {
  const comp = COMPOUNDS_DB[compoundId];
  if (!comp) return null;
  const bubbleId = nextId++;
  const div = document.createElement('div');
  div.className = 'bubble';
  div.setAttribute('data-id', bubbleId);
  const formulaStr = Object.entries(comp.formulaObj).map(([e,c]) => c===1 ? e : `${e}${c}`).join('');
  div.innerHTML = `
    <span class="chem-icon">${comp.icon}</span>
    <span class="chem-name">${comp.name}</span>
    <div class="bubble-qty-row">
      <span class="bubble-qty-label">×</span>
      <input class="bubble-qty-input" type="number" min="0" max="100" value="${quantity}" step="1">
    </div>
    <button class="remove-bubble" aria-label="Remove">✖</button>
  `;
  const canvasRect = canvas.getBoundingClientRect();
  const left = (x !== null) ? x : Math.random() * (canvasRect.width - 120) + 10;
  const top  = (y !== null) ? y : Math.random() * (canvasRect.height - 100) + 10;
  div.style.left = `${left}px`;
  div.style.top = `${top}px`;
  const qtyInput = div.querySelector('.bubble-qty-input');
  qtyInput.addEventListener('pointerdown', e => e.stopPropagation());
  qtyInput.addEventListener('change', () => {
    let val = parseInt(qtyInput.value);
    if (isNaN(val)) val = 1;
    if (val <= 0) {
      removeBubbleById(bubbleId);
    } else {
      if (val > 100) val = 100;
      qtyInput.value = val;
      const b = bubbles.find(b => b.id === bubbleId);
      if (b) b.qty = val;
    }
  });
  div.querySelector('.remove-bubble').addEventListener('click', (e) => {
    e.stopPropagation();
    removeBubbleById(bubbleId);
  });
  canvas.appendChild(div);
  const bubbleObj = { id: bubbleId, compoundId: compoundId, qty: quantity, dom: div, x: left, y: top, width: 120, height: 85 };
  bubbles.push(bubbleObj);
  attachDragListeners(div, bubbleId);
  updateUI();
  return bubbleObj;
}

function removeBubbleById(bubbleId, silent = false) {
  const idx = bubbles.findIndex(b => b.id === bubbleId);
  if (idx !== -1) {
    bubbles[idx].dom.remove();
    bubbles.splice(idx, 1);
    if (!silent) updateUI();
  }
}

function clearAllBubbles() {
  bubbles.forEach(b => b.dom.remove());
  bubbles = [];
  updateUI();
  showMessage("🧹 Bench cleared", false);
}

function mergeAllGroups() {
  const seen = new Set();
  const groups = [];
  for (const b of bubbles) {
    if (seen.has(b.id)) continue;
    const group = getOverlappingGroup(b);
    if (group.length > 1) {
      group.forEach(g => seen.add(g.id));
      groups.push(group);
    }
  }
  if (groups.length === 0) {
    showMessage("No overlapping bubbles to merge", true);
    return;
  }
  let anyMerged = false;
  for (const g of groups) {
    if (tryMergeGroup(g)) anyMerged = true;
  }
  if (!anyMerged) showMessage("No matching compound from overlapping groups", true);
}

// Drag & drop
function attachDragListeners(div, id) {
  div.addEventListener('mousedown', onDragStart);
  div.addEventListener('touchstart', onDragStart, { passive: false });
  div.addEventListener('dragstart', (e) => e.preventDefault());
}

function onDragStart(e) {
  if (e.target.closest('.bubble-qty-input') || e.target.closest('.remove-bubble')) return;
  e.preventDefault();
  const div = e.target.closest('.bubble');
  if (!div) return;
  const id = parseInt(div.getAttribute('data-id'));
  const bubble = bubbles.find(b => b.id === id);
  if (!bubble) return;
  let clientX, clientY;
  if (e.type === 'mousedown') { clientX = e.clientX; clientY = e.clientY; }
  else { clientX = e.touches[0].clientX; clientY = e.touches[0].clientY; e.preventDefault(); }
  dragState.active = true;
  dragState.bubbleId = id;
  dragState.startX = clientX; dragState.startY = clientY;
  dragState.initialLeft = bubble.x; dragState.initialTop = bubble.y;
  dragState.hasMoved = false;
  div.classList.add('dragging');
  div.style.zIndex = '200';
  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('mouseup', onDragEnd);
  window.addEventListener('touchmove', onDragMove, { passive: false });
  window.addEventListener('touchend', onDragEnd);
}

function onDragMove(e) {
  if (!dragState.active) return;
  e.preventDefault();
  let clientX, clientY;
  if (e.type === 'mousemove') { clientX = e.clientX; clientY = e.clientY; }
  else { clientX = e.touches[0].clientX; clientY = e.touches[0].clientY; }
  const dx = clientX - dragState.startX, dy = clientY - dragState.startY;
  if (Math.abs(dx) > 3 || Math.abs(dy) > 3) dragState.hasMoved = true;
  const bubble = bubbles.find(b => b.id === dragState.bubbleId);
  if (!bubble) return;
  const rect = canvas.getBoundingClientRect();
  const newLeft = Math.min(Math.max(0, dragState.initialLeft + dx), rect.width - bubble.width);
  const newTop = Math.min(Math.max(0, dragState.initialTop + dy), rect.height - bubble.height);
  bubble.dom.style.left = `${newLeft}px`;
  bubble.dom.style.top = `${newTop}px`;
}

function onDragEnd(e) {
  if (!dragState.active) return;
  const bubble = bubbles.find(b => b.id === dragState.bubbleId);
  if (bubble) {
    bubble.x = parseFloat(bubble.dom.style.left);
    bubble.y = parseFloat(bubble.dom.style.top);
    bubble.dom.classList.remove('dragging');
    if (dragState.hasMoved) {
      const group = getOverlappingGroup(bubble);
      if (group.length > 1) tryMergeGroup(group);
    }
  }
  dragState.active = false;
  window.removeEventListener('mousemove', onDragMove);
  window.removeEventListener('mouseup', onDragEnd);
  window.removeEventListener('touchmove', onDragMove);
  window.removeEventListener('touchend', onDragEnd);
}

// Periodic table drawer
function buildPeriodicTable() {
  periodicContainer.innerHTML = '';
  for (let [category, symbols] of Object.entries(ELEMENTS_CATEGORIES)) {
    const catDiv = document.createElement('div');
    catDiv.className = 'periodic-category';
    catDiv.innerHTML = `<div class="category-title">🔹 ${category}</div><div class="periodic-grid" id="grid-${category.replace(/\s/g,'')}"></div>`;
    periodicContainer.appendChild(catDiv);
    const gridDiv = catDiv.querySelector('.periodic-grid');
    symbols.forEach(sym => {
      const name = ELEMENT_NAMES[sym] || sym;
      const card = document.createElement('div');
      card.className = 'element-card';
      card.setAttribute('draggable', 'true');
      card.innerHTML = `<div class="element-symbol">${sym}</div><div class="element-name">${name}</div>`;
      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', sym);
        e.dataTransfer.effectAllowed = 'copy';
        card.style.opacity = '0.6';
      });
      card.addEventListener('dragend', () => card.style.opacity = '1');
      card.addEventListener('click', () => {
        const atomId = `atom_${sym}`;
        if (!COMPOUNDS_DB[atomId]) {
          COMPOUNDS_DB[atomId] = { id: atomId, name: `${sym} Atom`, icon: "⚛️", formulaObj: { [sym]: 1 }, fact: `Single ${sym} atom`, baseUnlock: true };
        }
        spawnBubble(atomId, null, null, 1);
        showMessage(`➕ added ${name} atom`, false);
      });
      gridDiv.appendChild(card);
    });
  }
  canvas.addEventListener('dragover', e => e.preventDefault());
  canvas.addEventListener('drop', e => {
    e.preventDefault();
    const sym = e.dataTransfer.getData('text/plain');
    if (!sym) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left - 60;
    const y = e.clientY - rect.top - 50;
    const atomId = `atom_${sym}`;
    if (!COMPOUNDS_DB[atomId]) {
      COMPOUNDS_DB[atomId] = { id: atomId, name: `${sym} Atom`, icon: "⚛️", formulaObj: { [sym]: 1 }, fact: `Single ${sym} atom`, baseUnlock: true };
    }
    spawnBubble(atomId, x, y, 1);
    showMessage(`✨ added ${ELEMENT_NAMES[sym] || sym} atom`, false);
  });
}

// Drawer toggle
drawerToggle.addEventListener('click', () => {
  periodicDrawer.classList.toggle('collapsed');
});

clearBtn.addEventListener('click', clearAllBubbles);
mergeBtn.addEventListener('click', mergeAllGroups);

function init() {
  for (let id in COMPOUNDS_DB) {
    if (COMPOUNDS_DB[id].baseUnlock) discoveredRecipes.add(id);
  }
  buildPeriodicTable();
  // starter bubbles
  spawnBubble("atom_H", 80, 90, 2);
  spawnBubble("atom_O", 200, 130, 1);
  spawnBubble("atom_Na", 400, 80, 1);
  spawnBubble("atom_Cl", 540, 120, 1);
  updateUI();
  showMessage("✨ Overlap bubbles → press Merge (or drag one onto another) to combine ALL touching bubbles! Expanded compound library ready.", false);
}

init();
