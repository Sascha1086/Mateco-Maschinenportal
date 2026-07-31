const portalDaten = {
  "genie": {
    "name": "Genie",
    "farbe": "#0b31ba",
    "maschinen": {
      "GS1532 (Schere)": [
        {"titel": "📘 Serviceanleitung", "datei": "pdf/Genie/GS1532/Serviceanleitung.pdf"},
        {"titel": "⚡ Schaltplan", "datei": "pdf/Genie/GS1532/Schaltplan.pdf"}
      ],
      "GS1932 (Schere)": [
        {"titel": "📘 Serviceanleitung", "datei": "pdf/Genie/GS1932/Serviceanleitung.pdf"},
        {"titel": "⚠️ Fehlercodes", "datei": "pdf/Genie/GS1932/Fehlercodes.pdf"},
        {"titel": "📄 Bedienungsanleitung", "datei": "pdf/Genie/GS1932/Bedienungsanleitung.pdf"}
      ],
      "S85XC (Teleskop)": [
        {"titel": "📘 Serviceanleitung", "datei": "pdf/Genie/S85XC/S85XC_Serviceanleitung.pdf"},
        {"titel": "🔧 Ersatzteilliste", "datei": "pdf/Genie/S85XC/S85XC_Ersatzteilliste.pdf"}
      ]
    }
  },
  "jlg": {
    "name": "JLG",
    "farbe": "#0078d4",
    "maschinen": {
      "1932 (Schere)": [
        {"titel": "📘 Serviceanleitung", "datei": "pdf/JLG/1932/Serviceanleitung.pdf"}
      ],
      "2032 (Schere)": [
        {"titel": "📘 Serviceanleitung", "datei": "pdf/JLG/2032/Serviceanleitung.pdf"}
      ]
    }
  },
  "zoomlion": {
    "name": "Zoomlion",
    "farbe": "#ff6600",
    "maschinen": {
      "Z0701 (Schere)": [
        {"titel": "📘 Serviceanleitung", "datei": "pdf/Zoomlion/Z0701/Serviceanleitung.pdf"}
      ]
    }
  },
  "haulotte": {
    "name": "Haulotte",
    "farbe": "#ff6600",
    "maschinen": {
      "Star 10 (Telekopmast)": [
        {"titel": "📘 Serviceanleitung", "datei": "pdf/Haulotte/Star10/Serviceanleitung.pdf"}
      ]
    }
  },
  "dingli": {
    "name": "Dingli",
    "farbe": "#d35400",
    "maschinen": {
      "BA28BERT (Gelenk-Teleskop)": [
        {"titel": "📘 Betriebsanleitung", "datei": "pdf/Dingli/BA28BERT/Betriebsanleitung.pdf"}
      ]
    }
  }
};

const app = document.getElementById('app');
const backBtn = document.getElementById('back-btn');
const homeBtn = document.getElementById('home-btn');
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');

let aktuelleAnsicht = "hersteller";
let geladenerHersteller = "";
let geladeneMaschine = "";

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
    aktuelleAnsicht = "hersteller";
    backBtn.style.display = "none";
    homeBtn.style.display = "none";
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
    aktuelleAnsicht = "maschinen";
    geladenerHersteller = herstellerKey;
    
    backBtn.style.display = "block";
    homeBtn.style.display = "none"; 
    searchContainer.style.display = "none";
    
    const hersteller = portalDaten[herstellerKey];
    let html = '<h2>' + hersteller.name + ' - Gerätetypen:</h2><div class="grid">';
    for (let maschine in hersteller.maschinen) {
        html += `<button class="btn maschine-btn" onclick="zeigeDokumente('${herstellerKey}', '${maschine}')">📦 ${maschine}</button>`;
    }
    html += '</div>';
    app.innerHTML = html;
}

function zeigeDokumente(herstellerKey, maschineName) {
    aktuelleAnsicht = "dokumente";
    geladenerHersteller = herstellerKey;
    geladeneMaschine = maschineName;
    
    backBtn.style.display = "block";
    homeBtn.style.display = "block"; 
    searchContainer.style.display = "none";
    
    const dokumente = portalDaten[herstellerKey].maschinen[maschineName];
    let html = '<h2>' + maschineName + ' - Unterlagen:</h2><div class="grid">';
    dokumente.forEach(doku => {
        html += `<a href="${doku.datei}" target="_blank" class="btn doku-btn">${doku.titel}</a>`;
    });
    html += '</div>';
    app.innerHTML = html;
}

function zurueckNavigieren() {
    if (aktuelleAnsicht === "dokumente") {
        zeigeMaschinen(geladenerHersteller);
    } else if (aktuelleAnsicht === "maschinen" || aktuelleAnsicht === "suche") {
        zeigeHersteller();
    }
}

function sucheMaschine() {
    const begriff = searchInput.value.toLowerCase().trim();
    if (begriff === "") {
        zeigeHersteller();
        return;
    }

    aktuelleAnsicht = "suche";
    backBtn.style.display = "block";
    homeBtn.style.display = "none";

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
            aktuelleAnsicht = "dokumente";
            backBtn.style.display = "none"; 
            homeBtn.style.display = "block";
            return;
        }
    }
    app.innerHTML = '<p>Gerätetyp "' + name + '" wurde nicht gefunden.</p>';
}

function zurueckZurUebersicht() {
    searchInput.value = "";
    if(window.location.search) {
        window.history.pushState({}, document.title, window.location.pathname);
    }
    zeigeHersteller();
}
