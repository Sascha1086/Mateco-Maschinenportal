```javascript
'use strict';

/*
|--------------------------------------------------------------------------
| Hersteller, Modelle und Dokumente
|--------------------------------------------------------------------------
*/

const herstellerDaten = {
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
  },

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

function resetNavigation() {
  aktuellerHersteller = null;
  aktuellesModell = null;
}

function erstelleButton(text, cssClass, onClick) {
  const button = document.createElement('button');

  button.type = 'button';
  button.className = `btn ${cssClass}`.trim();
  button.textContent = text;

  button.addEventListener('click', onClick);

  return button;
}


/*
|--------------------------------------------------------------------------
| Startseite: Hersteller direkt anzeigen
|--------------------------------------------------------------------------
*/

function zeigeStartseite() {
  resetNavigation();
  setNavigation(false, false);

  app.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = 'Hersteller auswählen';

  const grid = document.createElement('div');
  grid.className = 'grid';

  const herstellerListe = Object.keys(herstellerDaten);

  herstellerListe.forEach(hersteller => {
    const button = erstelleButton(
      `🏢 ${hersteller}`,
      'manufacturer-btn',
      () => zeigeModelle(hersteller)
    );

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

function zeigeModelle(hersteller) {
  const modelleDaten = herstellerDaten[hersteller];

  if (!modelleDaten) {
    return;
  }

  aktuellerHersteller = hersteller;
  aktuellesModell = null;

  setNavigation(true, true);

  app.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = `${hersteller} – Modelle`;

  app.appendChild(title);

  const modelleListe = Object.keys(modelleDaten);

  if (modelleListe.length === 0) {
    const hinweis = document.createElement('p');

    hinweis.className = 'empty';
    hinweis.textContent =
      'Für diesen Hersteller sind noch keine Modelle hinterlegt.';

    app.appendChild(hinweis);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'grid';

  modelleListe.forEach(modell => {
    const button = erstelleButton(
      `📦 ${modell}`,
      'machine-btn',
      () => zeigeDokumente(hersteller, modell)
    );

    grid.appendChild(button);
  });

  app.appendChild(grid);
}


/*
|--------------------------------------------------------------------------
| Dokumente anzeigen
|--------------------------------------------------------------------------
*/

function zeigeDokumente(hersteller, modell) {
  const dokumenteDaten =
    herstellerDaten[hersteller]?.[modell];

  if (dokumenteDaten === undefined) {
    return;
  }

  aktuellerHersteller = hersteller;
  aktuellesModell = modell;

  setNavigation(true, true);

  app.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = modell;

  app.appendChild(title);

  const dokumenteListe =
    Object.entries(dokumenteDaten);

  if (dokumenteListe.length === 0) {
    const hinweis = document.createElement('p');

    hinweis.className = 'empty';
    hinweis.textContent =
      'Für dieses Modell sind noch keine Dokumente hinterlegt.';

    app.appendChild(hinweis);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'grid';

  dokumenteListe.forEach(([titel, pfad]) => {
    const button = erstelleButton(
      titel,
      'document-btn',
      () => oeffnePdf(pfad, titel)
    );

    grid.appendChild(button);
  });

  app.appendChild(grid);
}


/*
|--------------------------------------------------------------------------
| Suche
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

  aktuellerHersteller = null;
  aktuellesModell = null;

  setNavigation(false, true);

  app.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = 'Suchergebnisse';

  app.appendChild(title);

  const grid = document.createElement('div');
  grid.className = 'grid';

  let trefferGefunden = false;

  Object.entries(herstellerDaten).forEach(
    ([hersteller, modelleDaten]) => {
      if (
        hersteller
          .toLowerCase()
          .includes(suchbegriff)
      ) {
        const button = erstelleButton(
          `🏢 ${hersteller}`,
          'search-result-btn',
          () => zeigeModelle(hersteller)
        );

        grid.appendChild(button);
        trefferGefunden = true;
      }

      Object.entries(modelleDaten).forEach(
        ([modell, dokumenteDaten]) => {
          if (
            modell
              .toLowerCase()
              .includes(suchbegriff)
          ) {
            const button = erstelleButton(
              `📦 ${modell}`,
              'search-result-btn',
              () => zeigeDokumente(
                hersteller,
                modell
              )
            );

            grid.appendChild(button);
            trefferGefunden = true;
          }

          Object.entries(dokumenteDaten).forEach(
            ([dokumentTitel, dokumentPfad]) => {
              if (
                dokumentTitel
                  .toLowerCase()
                  .includes(suchbegriff)
              ) {
                const button = erstelleButton(
                  `${dokumentTitel} – ${modell}`,
                  'search-result-btn',
                  () => oeffnePdf(
                    dokumentPfad,
                    dokumentTitel
                  )
                );

                grid.appendChild(button);
                trefferGefunden = true;
              }
            }
          );
        }
      );
    }
  );

  if (trefferGefunden) {
    app.appendChild(grid);
    return;
  }

  const hinweis = document.createElement('p');

  hinweis.className = 'empty';
  hinweis.textContent = 'Keine Treffer gefunden.';

  app.appendChild(hinweis);
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
    aktuellerHersteller &&
    aktuellesModell
  ) {
    zeigeModelle(aktuellerHersteller);
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
