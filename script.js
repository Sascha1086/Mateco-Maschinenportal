'use strict';

const portalDaten = {
  'Arbeitsbühnen': {
    Genie: {
      'GS1532 (Schere)': {
        '📄 Bedienungsanleitung': 'pdf/Genie/GS1532/Bedienungsanleitung.pdf',
        '📘 Serviceanleitung': 'pdf/Genie/GS1532/Serviceanleitung.pdf',
        '⚠ Fehlercodes': 'pdf/Genie/GS1532/Fehlercodeliste.pdf',
        '⚡ Schaltplan': 'pdf/Genie/GS1532/Schaltplan.pdf',
        '🔧 Ersatzteilliste': 'pdf/Genie/GS1532/Ersatzteilliste.pdf'
      },

      'GS1932 (Schere)': {
        '📄 Bedienungsanleitung': 'pdf/Genie/GS1932/Bedienungsanleitung.pdf',
        '📘 Serviceanleitung': 'pdf/Genie/GS1932/Serviceanleitung.pdf'
      },

      'GS1932 E-Drive (Schere)': {},

      'S85XC (Teleskop)': {},

      'Z60/34 (Gelenk-Teleskop)': {}
    },

    JLG: {
      '1932 (Schere)': {},
      '2032 (Schere)': {}
    },

    Zoomlion: {
      'Z0701 (Schere)': {}
    },

    Haulotte: {
      'Star 10 (Teleskopmast)': {}
    },

    Dingli: {
      'BA28BERT (Gelenk-Teleskop)': {}
    },

    Skyjack: {
      'SJ12 (Roll-Lift)': {},
      'SJ3 3219 (Schere)': {},
      'SJ3 3226 (Schere)': {}
    }
  },

  'Stapler & Kettenbühnen': {
    Manitou: {
      'TS0625 (Teleskopstapler)': {
        '📘 Serviceanleitung': 'pdf/Manitou/TS0625/Serviceanleitung.pdf',
        '⚡ Schaltplan': 'pdf/Manitou/TS0625/Schaltplan.pdf'
      },

      'TS0932 (Teleskopstapler)': {},

      'TS1440 (Teleskopstapler)': {}
    },

    Merlo: {
      'TS0625 (Teleskopstapler)': {},
      'TS0932 (Teleskopstapler)': {},
      'TS1440 (Teleskopstapler)': {}
    },

    Teupen: {
      'LEO15GT (Gelenk-Kette)': {},
      'LEO18GT (Gelenk-Kette)': {},
      'LEO21GT (Gelenk-Kette)': {}
    }
  }
};

const app = document.getElementById('app');
const searchInput = document.getElementById('searchInput');
const backBtn = document.getElementById('backBtn');
const homeBtn = document.getElementById('homeBtn');
const portalTitle = document.getElementById('portalTitle');

const pdfModal = document.getElementById('pdfModal');
const pdfFrame = document.getElementById('pdfFrame');
const modalTitle = document.getElementById('modalTitle');
const closeModalBtn = document.getElementById('closeModalBtn');

let aktuelleKategorie = null;
let aktuellerHersteller = null;
let aktuellesModell = null;


/*
|--------------------------------------------------------------------------
| Hilfsfunktionen
|--------------------------------------------------------------------------
*/

function setNavigation(showBack = false, showHome = false) {
  backBtn.classList.toggle('hidden', !showBack);
  homeBtn.classList.toggle('hidden', !showHome);
}

function resetNavigationState() {
  aktuelleKategorie = null;
  aktuellerHersteller = null;
  aktuellesModell = null;
}

function erstelleButton(text, cssClass = '') {
  const button = document.createElement('button');

  button.type = 'button';
  button.className = `btn ${cssClass}`.trim();
  button.textContent = text;

  return button;
}


/*
|--------------------------------------------------------------------------
| Startseite
|--------------------------------------------------------------------------
*/

function zeigeStartseite() {
  resetNavigationState();
  setNavigation(false, false);

  app.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = 'Kategorie auswählen';

  const grid = document.createElement('div');
  grid.className = 'grid';

  Object.keys(portalDaten).forEach(kategorie => {
    const icon = kategorie === 'Arbeitsbühnen' ? '🚀' : '🚜';

    const button = erstelleButton(
      `${icon} ${kategorie}`,
      'category-btn'
    );

    button.addEventListener('click', () => {
      zeigeHersteller(kategorie);
    });

    grid.appendChild(button);
  });

  app.appendChild(title);
  app.appendChild(grid);
}


/*
|--------------------------------------------------------------------------
| Hersteller anzeigen
|--------------------------------------------------------------------------
*/

function zeigeHersteller(kategorie) {
  if (!portalDaten[kategorie]) {
    app.innerHTML = `
      <h2>Fehler</h2>
      <p class="empty">Die Kategorie wurde nicht gefunden.</p>
    `;
    return;
  }

  aktuelleKategorie = kategorie;
  aktuellerHersteller = null;
  aktuellesModell = null;

  setNavigation(true, true);

  app.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = `Hersteller – ${kategorie}`;

  const grid = document.createElement('div');
  grid.className = 'grid';

  const herstellerListe = Object.keys(portalDaten[kategorie]);

  herstellerListe.forEach(hersteller => {
    const button = erstelleButton(
      `🏢 ${hersteller}`,
      'manufacturer-btn'
    );

    button.addEventListener('click', () => {
      zeigeModelle(kategorie, hersteller);
    });

    grid.appendChild(button);
  });

  app.appendChild(title);
  app.appendChild(grid);
}


/*
|--------------------------------------------------------------------------
| Modelle anzeigen
|--------------------------------------------------------------------------
*/

function zeigeModelle(kategorie, hersteller) {
  const kategorieDaten = portalDaten[kategorie];

  if (!kategorieDaten || !kategorieDaten[hersteller]) {
    app.innerHTML = `
      <h2>Fehler</h2>
      <p class="empty">Der Hersteller wurde nicht gefunden.</p>
    `;
    return;
  }

  aktuelleKategorie = kategorie;
  aktuellerHersteller = hersteller;
  aktuellesModell = null;

  setNavigation(true, true);

  app.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = `${hersteller} – Modelle`;

  const grid = document.createElement('div');
  grid.className = 'grid';

  const modelle = Object.keys(kategorieDaten[hersteller]);

  if (modelle.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = 'Für diesen Hersteller sind noch keine Modelle hinterlegt.';

    app.appendChild(title);
    app.appendChild(empty);

    return;
  }

  modelle.forEach(modell => {
    const button = erstelleButton(
      `📦 ${modell}`,
      'machine-btn'
    );

    button.addEventListener('click', () => {
      zeigeDokumente(kategorie, hersteller, modell);
    });

    grid.appendChild(button);
  });

  app.appendChild(title);
  app.appendChild(grid);
}


/*
|--------------------------------------------------------------------------
| Dokumente anzeigen
|--------------------------------------------------------------------------
*/

function zeigeDokumente(kategorie, hersteller, modell) {
  const modellDaten =
    portalDaten[kategorie]?.[hersteller]?.[modell];

  if (modellDaten === undefined) {
    app.innerHTML = `
      <h2>Fehler</h2>
      <p class="empty">Das Modell wurde nicht gefunden.</p>
    `;
    return;
  }

  aktuelleKategorie = kategorie;
  aktuellerHersteller = hersteller;
  aktuellesModell = modell;

  setNavigation(true, true);

  app.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = modell;

  app.appendChild(title);

  const dokumente = Object.entries(modellDaten);

  if (dokumente.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent =
      'Für dieses Modell sind noch keine Dokumente hinterlegt.';

    app.appendChild(empty);

    return;
  }

  const grid = document.createElement('div');
  grid.className = 'grid';

  dokumente.forEach(([titel, pfad]) => {
    const button = erstelleButton(
      titel,
      'document-btn'
    );

    button.addEventListener('click', () => {
      oeffnePdf(pfad, titel);
    });

    grid.appendChild(button);
  });

  app.appendChild(grid);
}


/*
|--------------------------------------------------------------------------
| Suchfunktion
|--------------------------------------------------------------------------
*/

function suche() {
  const begriff = searchInput.value
    .trim()
    .toLowerCase();

  if (begriff === '') {
    zeigeStartseite();
    return;
  }

  setNavigation(false, true);

  aktuelleKategorie = null;
  aktuellerHersteller = null;
  aktuellesModell = null;

  const treffer = [];

  Object.entries(portalDaten).forEach(
    ([kategorie, herstellerMap]) => {

      Object.entries(herstellerMap).forEach(
        ([hersteller, modelleMap]) => {

          if (
            hersteller
              .toLowerCase()
              .includes(begriff)
          ) {
            treffer.push({
              typ: 'Hersteller',
              text: hersteller,
              kategorie,
              hersteller
            });
          }

          Object.entries(modelleMap).forEach(
            ([modell, dokumenteMap]) => {

              if (
                modell
                  .toLowerCase()
                  .includes(begriff)
              ) {
                treffer.push({
                  typ: 'Modell',
                  text: modell,
                  kategorie,
                  hersteller,
                  modell
                });
              }

              Object.entries(dokumenteMap).forEach(
                ([dokumentTitel, dokumentPfad]) => {

                  if (
                    dokumentTitel
                      .toLowerCase()
                      .includes(begriff)
                  ) {
                    treffer.push({
                      typ: 'Dokument',
                      text: dokumentTitel,
                      kategorie,
                      hersteller,
                      modell,
                      dokumentTitel,
                      dokumentPfad
                    });
                  }
                }
              );
            }
          );
        }
      );
    }
  );

  app.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = 'Suchergebnisse';

  app.appendChild(title);

  if (treffer.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = 'Keine Treffer gefunden.';

    app.appendChild(empty);

    return;
  }

  const grid = document.createElement('div');
  grid.className = 'grid';

  treffer.forEach(trefferEintrag => {
    let icon = '🔎';

    if (trefferEintrag.typ === 'Hersteller') {
      icon = '🏢';
    }

    if (trefferEintrag.typ === 'Modell') {
      icon = '📦';
    }

    if (trefferEintrag.typ === 'Dokument') {
      icon = '📄';
    }

    const button = erstelleButton(
      `${icon} ${trefferEintrag.text}`,
      'search-result-btn'
    );

    button.addEventListener('click', () => {
      if (trefferEintrag.typ === 'Hersteller') {
        zeigeModelle(
          trefferEintrag.kategorie,
          trefferEintrag.hersteller
        );
      }

      if (trefferEintrag.typ === 'Modell') {
        zeigeDokumente(
          trefferEintrag.kategorie,
          trefferEintrag.hersteller,
          trefferEintrag.modell
        );
      }

      if (trefferEintrag.typ === 'Dokument') {
        oeffnePdf(
          trefferEintrag.dokumentPfad,
          trefferEintrag.dokumentTitel
        );
      }
    });

    grid.appendChild(button);
  });

  app.appendChild(grid);
}


/*
|--------------------------------------------------------------------------
| PDF-Viewer
|--------------------------------------------------------------------------
*/

function oeffnePdf(pfad, titel) {
  modalTitle.textContent = titel;
  pdfFrame.src = pfad;

  pdfModal.classList.remove('hidden');
  pdfModal.setAttribute('aria-hidden', 'false');
}

function schliessePdf() {
  pdfFrame.src = '';

  pdfModal.classList.add('hidden');
  pdfModal.setAttribute('aria-hidden', 'true');
}


/*
|--------------------------------------------------------------------------
| Navigation
|--------------------------------------------------------------------------
*/

function geheZurueck() {
  if (
    aktuelleKategorie &&
    aktuellerHersteller &&
    aktuellesModell
  ) {
    zeigeModelle(
      aktuelleKategorie,
      aktuellerHersteller
    );

    return;
  }

  if (
    aktuelleKategorie &&
    aktuellerHersteller
  ) {
    zeigeHersteller(
      aktuelleKategorie
    );

    return;
  }

  if (aktuelleKategorie) {
    zeigeStartseite();
    return;
  }

  zeigeStartseite();
}

function geheNachHause() {
  searchInput.value = '';
  zeigeStartseite();
}


/*
|--------------------------------------------------------------------------
| Events
|--------------------------------------------------------------------------
*/

backBtn.addEventListener('click', geheZurueck);

homeBtn.addEventListener('click', geheNachHause);

portalTitle.addEventListener('click', geheNachHause);

searchInput.addEventListener('input', suche);

closeModalBtn.addEventListener(
  'click',
  schliessePdf
);

pdfModal.addEventListener('click', event => {
  if (event.target === pdfModal) {
    schliessePdf();
  }
});

document.addEventListener('keydown', event => {
  if (
    event.key === 'Escape' &&
    !pdfModal.classList.contains('hidden')
  ) {
    schliessePdf();
  }
});


/*
|--------------------------------------------------------------------------
| Anwendung starten
|--------------------------------------------------------------------------
*/

zeigeStartseite();