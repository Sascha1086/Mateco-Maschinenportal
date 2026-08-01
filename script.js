```javascript
'use strict';

/*
|--------------------------------------------------------------------------
| Portal-Daten
|--------------------------------------------------------------------------
|
| Aufbau:
|
| Kategorie
|   → Hersteller
|       → Modell
|           → Dokumenttitel: PDF-Pfad
|
| Neue Hersteller, Modelle und Dokumente können direkt hier ergänzt werden.
|
*/

const portalDaten = {
  'Arbeitsbühnen': {
    Genie: {
      'GS1532 (Schere)': {
        '📄 Bedienungsanleitung':
          'pdf/Genie/GS1532/Bedienungsanleitung.pdf',

        '📘 Serviceanleitung':
          'pdf/Genie/GS1532/Serviceanleitung.pdf',

        '⚠️ Fehlercodes':
          'pdf/Genie/GS1532/Fehlercodeliste.pdf',

        '⚡ Schaltplan':
          'pdf/Genie/GS1532/Schaltplan.pdf',

        '🔧 Ersatzteilliste':
          'pdf/Genie/GS1532/Ersatzteilliste.pdf'
      },

      'GS1932 (Schere)': {
        '📄 Bedienungsanleitung':
          'pdf/Genie/GS1932/Bedienungsanleitung.pdf',

        '📘 Serviceanleitung':
          'pdf/Genie/GS1932/Serviceanleitung.pdf'
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
    },

    Teupen: {
      'LEO15GT (Gelenk-Kette)': {},
      'LEO18GT (Gelenk-Kette)': {},
      'LEO21GT (Gelenk-Kette)': {}
    }
  },

  Stapler: {
    Manitou: {
      'TS0625 (Teleskopstapler)': {
        '📘 Serviceanleitung':
          'pdf/Manitou/TS0625/Serviceanleitung.pdf',

        '⚡ Schaltplan':
          'pdf/Manitou/TS0625/Schaltplan.pdf'
      },

      'TS0932 (Teleskopstapler)': {},
      'TS1440 (Teleskopstapler)': {}
    },

    Merlo: {
      'TS0625 (Teleskopstapler)': {},
      'TS0932 (Teleskopstapler)': {},
      'TS1440 (Teleskopstapler)': {}
    }
  },

  'LKW-Arbeitsbühnen': {},

  'Anhänger-Arbeitsbühnen': {}
};


/*
|--------------------------------------------------------------------------
| HTML-Elemente
|--------------------------------------------------------------------------
*/

const app = document.getElementById('app');
const searchInput = document.getElementById('searchInput');

const backBtn = document.getElementById('backBtn');
const homeBtn = document.getElementById('homeBtn');
const portalTitle = document.getElementById('portalTitle');

const pdfModal = document.getElementById('pdfModal');
const pdfFrame = document.getElementById('pdfFrame');
const modalTitle = document.getElementById('modalTitle');
const closeModalBtn = document.getElementById('closeModalBtn');


/*
|--------------------------------------------------------------------------
| Navigationsstatus
|--------------------------------------------------------------------------
*/

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

function getKategorieIcon(kategorie) {
  switch (kategorie) {
    case 'Arbeitsbühnen':
      return '🚀';

    case 'Stapler':
      return '🚜';

    case 'LKW-Arbeitsbühnen':
      return '🚚';

    case 'Anhänger-Arbeitsbühnen':
      return '🛻';

    default:
      return '📁';
  }
}

function getKategorieKlasse(kategorie) {
  switch (kategorie) {
    case 'Arbeitsbühnen':
      return 'category-platforms';

    case 'Stapler':
      return 'category-forklifts';

    case 'LKW-Arbeitsbühnen':
      return 'category-trucks';

    case 'Anhänger-Arbeitsbühnen':
      return 'category-trailers';

    default:
      return '';
  }
}

function zeigeFehler(text) {
  app.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = 'Fehler';

  const message = document.createElement('p');
  message.className = 'empty';
  message.textContent = text;

  app.appendChild(title);
  app.appendChild(message);
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
  grid.className = 'grid category-grid';

  Object.keys(portalDaten).forEach(kategorie => {
    const icon = getKategorieIcon(kategorie);
    const farbKlasse = getKategorieKlasse(kategorie);

    const button = erstelleButton(
      `${icon} ${kategorie}`,
      `category-btn ${farbKlasse}`
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
  const herstellerDaten = portalDaten[kategorie];

  if (herstellerDaten === undefined) {
    zeigeFehler('Die gewählte Kategorie wurde nicht gefunden.');
    return;
  }

  aktuelleKategorie = kategorie;
  aktuellerHersteller = null;
  aktuellesModell = null;

  setNavigation(true, true);

  app.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = `Hersteller – ${kategorie}`;

  app.appendChild(title);

  const herstellerListe = Object.keys(herstellerDaten);

  if (herstellerListe.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty';

    const emptyTitle = document.createElement('strong');
    emptyTitle.textContent = 'Noch keine Hersteller hinterlegt';

    const emptyText = document.createElement('span');
    emptyText.textContent =
      ' Du kannst die Hersteller später oben in der Datei script.js ergänzen.';

    empty.appendChild(emptyTitle);
    empty.appendChild(emptyText);

    app.appendChild(empty);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'grid';

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

  app.appendChild(grid);
}


/*
|--------------------------------------------------------------------------
| Modelle anzeigen
|--------------------------------------------------------------------------
*/

function zeigeModelle(kategorie, hersteller) {
  const modelleDaten = portalDaten[kategorie]?.[hersteller];

  if (modelleDaten === undefined) {
    zeigeFehler('Der gewählte Hersteller wurde nicht gefunden.');
    return;
  }

  aktuelleKategorie = kategorie;
  aktuellerHersteller = hersteller;
  aktuellesModell = null;

  setNavigation(true, true);

  app.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = `${hersteller} – Modelle`;

  app.appendChild(title);

  const modelleListe = Object.keys(modelleDaten);

  if (modelleListe.length === 0) {
    const empty = document.createElement('p');

    empty.className = 'empty';
    empty.textContent =
      'Für diesen Hersteller sind noch keine Modelle hinterlegt.';

    app.appendChild(empty);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'grid';

  modelleListe.forEach(modell => {
    const button = erstelleButton(
      `📦 ${modell}`,
      'machine-btn'
    );

    button.addEventListener('click', () => {
      zeigeDokumente(
        kategorie,
        hersteller,
        modell
      );
    });

    grid.appendChild(button);
  });

  app.appendChild(grid);
}


/*
|--------------------------------------------------------------------------
| Dokumente anzeigen
|--------------------------------------------------------------------------
*/

function zeigeDokumente(
  kategorie,
  hersteller,
  modell
) {
  const dokumenteDaten =
    portalDaten[kategorie]?.[hersteller]?.[modell];

  if (dokumenteDaten === undefined) {
    zeigeFehler('Das gewählte Modell wurde nicht gefunden.');
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

  const dokumenteListe = Object.entries(dokumenteDaten);

  if (dokumenteListe.length === 0) {
    const empty = document.createElement('p');

    empty.className = 'empty';
    empty.textContent =
      'Für dieses Modell sind noch keine Dokumente hinterlegt.';

    app.appendChild(empty);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'grid';

  dokumenteListe.forEach(([titel, pfad]) => {
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
  const suchbegriff = searchInput.value
    .trim()
    .toLowerCase();

  if (suchbegriff === '') {
    zeigeStartseite();
    return;
  }

  aktuelleKategorie = null;
  aktuellerHersteller = null;
  aktuellesModell = null;

  setNavigation(false, true);

  const treffer = [];

  Object.entries(portalDaten).forEach(
    ([kategorie, herstellerDaten]) => {
      if (
        kategorie
          .toLowerCase()
          .includes(suchbegriff)
      ) {
        treffer.push({
          typ: 'Kategorie',
          text: kategorie,
          kategorie
        });
      }

      Object.entries(herstellerDaten).forEach(
        ([hersteller, modelleDaten]) => {
          if (
            hersteller
              .toLowerCase()
              .includes(suchbegriff)
          ) {
            treffer.push({
              typ: 'Hersteller',
              text: hersteller,
              kategorie,
              hersteller
            });
          }

          Object.entries(modelleDaten).forEach(
            ([modell, dokumenteDaten]) => {
              if (
                modell
                  .toLowerCase()
                  .includes(suchbegriff)
              ) {
                treffer.push({
                  typ: 'Modell',
                  text: modell,
                  kategorie,
                  hersteller,
                  modell
                });
              }

              Object.entries(dokumenteDaten).forEach(
                ([dokumentTitel, dokumentPfad]) => {
                  if (
                    dokumentTitel
                      .toLowerCase()
                      .includes(suchbegriff)
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

  zeigeSuchergebnisse(treffer);
}

function zeigeSuchergebnisse(treffer) {
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

  treffer.forEach(eintrag => {
    let icon = '🔎';

    if (eintrag.typ === 'Kategorie') {
      icon = getKategorieIcon(eintrag.kategorie);
    }

    if (eintrag.typ === 'Hersteller') {
      icon = '🏢';
    }

    if (eintrag.typ === 'Modell') {
      icon = '📦';
    }

    if (eintrag.typ === 'Dokument') {
      icon = '📄';
    }

    const button = erstelleButton(
      `${icon} ${eintrag.text}`,
      'search-result-btn'
    );

    button.addEventListener('click', () => {
      if (eintrag.typ === 'Kategorie') {
        zeigeHersteller(eintrag.kategorie);
        return;
      }

      if (eintrag.typ === 'Hersteller') {
        zeigeModelle(
          eintrag.kategorie,
          eintrag.hersteller
        );
        return;
      }

      if (eintrag.typ === 'Modell') {
        zeigeDokumente(
          eintrag.kategorie,
          eintrag.hersteller,
          eintrag.modell
        );
        return;
      }

      if (eintrag.typ === 'Dokument') {
        oeffnePdf(
          eintrag.dokumentPfad,
          eintrag.dokumentTitel
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

  document.body.classList.add('modal-open');
}

function schliessePdf() {
  pdfFrame.src = '';

  pdfModal.classList.add('hidden');
  pdfModal.setAttribute('aria-hidden', 'true');

  document.body.classList.remove('modal-open');
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
    zeigeHersteller(aktuelleKategorie);
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
| Ereignisse
|--------------------------------------------------------------------------
*/

backBtn.addEventListener(
  'click',
  geheZurueck
);

homeBtn.addEventListener(
  'click',
  geheNachHause
);

portalTitle.addEventListener(
  'click',
  geheNachHause
);

portalTitle.addEventListener(
  'keydown',
  event => {
    if (
      event.key === 'Enter' ||
      event.key === ' '
    ) {
      event.preventDefault();
      geheNachHause();
    }
  }
);

searchInput.addEventListener(
  'input',
  suche
);

closeModalBtn.addEventListener(
  'click',
  schliessePdf
);

pdfModal.addEventListener(
  'click',
  event => {
    if (event.target === pdfModal) {
      schliessePdf();
    }
  }
);

document.addEventListener(
  'keydown',
  event => {
    if (
      event.key === 'Escape' &&
      !pdfModal.classList.contains('hidden')
    ) {
      schliessePdf();
    }
  }
);


/*
|--------------------------------------------------------------------------
| Anwendung starten
|--------------------------------------------------------------------------
*/

zeigeStartseite();
```
