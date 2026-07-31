// Hier verwaltest du alle Hersteller, Gerätetypen und Dokumente zentral!
const portalDaten = {
  "Genie": {
    "name": "Genie",
    "farbe": "#009999",
    "maschinen": {
      "GS1532 (Schere)": [
        {"titel": "📘 Serviceanleitung", "datei": "pdf/Siemens/S7-1200/Serviceanleitung.pdf"},
        {"titel": "⚡ Schaltplan", "datei": "pdf/Siemens/S7-1200/Schaltplan.pdf"}
      ],
      "GS1932 (Schere)": [
        {"titel": "📘 Serviceanleitung", "datei": "pdf/Siemens/S7-1500/Serviceanleitung.pdf"},
        {"titel": "⚠️ Fehlercodes", "datei": "pdf/Siemens/S7-1500/Fehlercodes.pdf"},
        {"titel": "📄 Bedienungsanleitung", "datei": "pdf/Siemens/S7-1500/Bedienungsanleitung.pdf"}
      ],
      "S85XC (Teleskop)": [
        {"titel": "📘 Serviceanleitung", "datei": "pdf/Genie/S85XC_Serviceanleitung.pdf"},
        {"titel": "🔧 Ersatzteilliste", "datei": "pdf/Genie/S85XC_Ersatzteilliste.pdf"}
      ]
    }
  },
  "JLG": {
    "name": "JLG",
    "farbe": "#ff6600",
    "maschinen": {
      "800SJ (Teleskop)": [
        {"titel": "📘 Serviceanleitung", "datei": "pdf/KUKA/KR16/Serviceanleitung.pdf"},
        {"titel": "⚠️ Fehlercodes", "datei": "pdf/KUKA/KR16/Fehlercodes.pdf"}
      ],
      "3369LE (Schere)": [
        {"titel": "📘 Wartungsanleitung", "datei": "pdf/KUKA/KR_IONTEC/Wartung.pdf"},
        {"titel": "📄 Bedienungshandbuch", "datei": "pdf/KUKA/KR_IONTEC/Bedienung.pdf"}
      ]
    }
  },
  "Zoomlion": {
    "name": "Zoomlion",
    "farbe": "#ff0000",
    "maschinen": {
      "IRB 2600 (Schere)": [
        {"titel": "📘 Serviceanleitung", "datei": "pdf/ABB/IRB_2600/Serviceanleitung.pdf"},
        {"titel": "⚡ Schaltplan", "datei": "pdf/ABB/IRB_2600/Schaltplan.pdf"}
      ],
      "IRC5 (Steuerung)": [
        {"titel": "⚠️ Fehlercodes", "datei": "pdf/ABB/IRC5/Fehlercodes.pdf"}
      ]
    }
  },
  "Haulotte": {
    "name": "Haulotte",
    "farbe": "#d35400",
    "maschinen": {
      "Star 10 (Telekopmast)": [
        {"titel": "📘 Betriebsanleitung", "datei": "pdf/SEW/Movidrive_B/Betriebsanleitung.pdf"},
        {"titel": "🔧 Parameterliste", "datei": "pdf/SEW/Movidrive_B/Parameter.pdf"}
      ]
    }
  },
  "PB-Lifttechnik": {
    "name": "PB-Lifttechnik",
    "farbe": "#2980b9",
    "maschinen": {
      "EL17 (Schere)": [
        {"titel": "📘 Serviceanleitung", "datei": "pdf/Bosch_Rexroth/IndraDrive/Serviceanleitung.pdf"},
        {"titel": "⚠️ Diagnose-Handbuch", "datei": "pdf/Bosch_Rexroth/IndraDrive/Diagnose.pdf"}
      ]
    }
  }
};

const app = document.getElementById('app');
const backBtn = document.getElementById('back-btn');
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const maschinenName = urlParams.get('maschine');
    
    if (maschinenName) {
        zeigeDirektMaschine(maschinenName);
    } else {
        zeigeHersteller();
    }
};

function zeigeHersteller() {
    backBtn.style.display = "none";
    searchContainer.style.display = "block";
    let html = '<h2>🏭 Hersteller auswählen:</h2><div class="grid">';
    
    for (let key in portalDaten) {
        const h = portalDaten[key];
        html += `<button class="btn hersteller-btn" style="background-color: ${h.farbe}" onclick="zeigeMaschinen('${key}')">${h.name}</button>`;
    }
    
    html += '</div>';
    app.innerHTML = html;
}

function zeigeMaschinen(herstellerKey) {
    backBtn.style.display = "block";
    searchContainer.style.display = "none";
    const hersteller = portalDaten[herstellerKey];
    let html = `<h2>${hersteller.name} - Gerätetypen:</h2><div class="grid">`;
    
    for (let maschine in hersteller.maschinen) {
        html += `<button class="btn maschine-btn" onclick="zeigeDokumente('${herstellerKey}', '${maschine}')">📦 ${maschine}</button>`;
    }
    
    html += '</div>';
    app.innerHTML = html;
}

function zeigeDokumente(herstellerKey, maschineName) {
    backBtn.style.display = "block";
    searchContainer.style.display = "none";
    const dokumente = portalDaten[herstellerKey].maschinen[maschineName];
    let html = `<h2>${maschineName} - Unterlagen:</h2><div class="grid">`;
    
    dokumente.forEach(doku => {
        html += `<a href="${doku.datei}" target="_blank" class="btn doku-btn">${doku.titel}</a>`;
    });
    
    html += '</div>';
    app.innerHTML = html;
}

function sucheMaschine() {
    const begriff = searchInput.value.toLowerCase().trim();
    if (begriff === "") {
        zeigeHersteller();
        return;
    }

    let html = '<h2>🔍 Suchergebnisse:</h2><div class="grid">';
    let trefferGefunden = false;

    for (let herstellerKey in portalDaten) {
        const hersteller = portalDaten[herstellerKey];
        
        if (hersteller.name.toLowerCase().includes(begriff)) {
            for (let maschine in hersteller.maschinen) {
                html += `<button class="btn maschine-btn" onclick="zeigeDokumente('${herstellerKey}', '${maschine}')">📦 ${hersteller.name} - ${maschine}</button>`;
                trefferGefunden = true;
            }
        } else {
            for (let maschine in hersteller.maschinen) {
                if (maschine.toLowerCase().includes(begriff)) {
                    html += `<button class="btn maschine-btn" onclick="zeigeDokumente('${herstellerKey}', '${maschine}')">📦 ${hersteller.name} - ${maschine}</button>`;
                    trefferGefunden = true;
                }
            }
        }
    }

    if (!trefferGefunden) {
        html += '<p style="padding: 20px; font-size: 18px; color: #7f8c8d;">Keine passenden Gerätetypen gefunden.</p>';
    }

    html += '</div>';
    app.innerHTML = html;
}

function zeigeDirektMaschine(name) {
    searchContainer.style.display = "none";
    for (let herstellerKey in portalDaten) {
        if (portalDaten[herstellerKey].maschinen[name]) {
            zeigeDokumente(herstellerKey, name);
            return;
        }
    }
    app.innerHTML = `<p>Gerätetyp "${name}" wurde nicht gefunden.</p>`;
}

function zurueckZurUebersicht() {
    searchInput.value = "";
    if(window.location.search) {
        window.history.pushState({}, document.title, window.location.pathname);
    }
    zeigeHersteller();
}
