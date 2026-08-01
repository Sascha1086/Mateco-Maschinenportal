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

    'GS1932 E-Drive (Schere)': {
      '📄 Bedienungsanleitung':
        'pdf/Genie/GS1932 EDrive/Bedienungsanleitung.pdf',

      '📘 Serviceanleitung':
        'pdf/Genie/GS1932 EDrive/Serviceanleitung.pdf',

      '⚠️ Fehlercodes':
        'pdf/Genie/GS1932 EDrive/Fehlercodeliste.pdf',

      '⚡ Schaltplan':
        'pdf/Genie/GS1932 EDrive/Schaltplan.pdf',

      '🔧 Ersatzteilliste':
        'pdf/Genie/GS1932 EDrive/Ersatzteilliste.pdf'
    },

    'S85XC (Teleskop)': {
      '📄 Bedienungsanleitung':
        'pdf/Genie/S85XC/Bedienungsanleitung.pdf',

      '📘 Serviceanleitung':
        'pdf/Genie/S85XC/Serviceanleitung.pdf',

      '⚠️ Fehlercodes':
        'pdf/Genie/S85XC/Fehlercodeliste.pdf',

      '⚡ Schaltplan':
        'pdf/Genie/S85XC/Schaltplan.pdf',

      '🔧 Ersatzteilliste':
        'pdf/Genie/S85XC/Ersatzteilliste.pdf'
    },

    'Z60/34 (Gelenk-Teleskop)': {
      '📄 Bedienungsanleitung':
        'pdf/Genie/Z60_34/Bedienungsanleitung.pdf',

      '📘 Serviceanleitung':
        'pdf/Genie/Z60_34/Serviceanleitung.pdf',

      '⚠️ Fehlercodes':
        'pdf/Genie/Z60_34/Fehlercodeliste.pdf',

      '⚡ Schaltplan':
        'pdf/Genie/Z60_34/Schaltplan.pdf',
    }
  },

  JLG: {
    '1932 (Schere)': {},
    '2032 (Schere)': {}
  },

  Zoomlion: {
  'ZT26JE (Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZT26JE/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZT26JE/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZT26JE/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZT26JE/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZT26JE/Ersatzteilliste.pdf'
  },

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
| Elemente mit alten und neuen IDs finden
|--------------------------------------------------------------------------
*/

function findeElement(...ids) {
  for (const id of ids) {
    const element = document.getElementById(id);

    if (element) {
      return element;
    }
  }

  return null;
}

const app = findeElement('app');

const searchInput = findeElement(
  'searchInput',
  'search-input'
);

const backBtn = findeElement(
  'backBtn',
  'back-btn'
);

const homeBtn = findeElement(
  'homeBtn',
  'home-btn'
);

const portalTitle = findeElement(
  'portalTitle',
  'portal-titel'
);

const pdfModal = findeElement(
  'pdfModal',
  'pdf-modal'
);

const pdfFrame = findeElement(
  'pdfFrame',
  'pdf-frame'
);

const modalTitle = findeElement(
  'modalTitle',
  'modal-titel'
);

const closeModalBtn = findeElement(
  'closeModalBtn',
  'close-modal-btn'
);


/*
|--------------------------------------------------------------------------
| Sicherheitsprüfung
|--------------------------------------------------------------------------
*/

if (!app) {
  throw new Error(
    'Das Element mit der ID "app" wurde nicht gefunden.'
  );
}


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

function setNavigation(
  showBack = false,
  showHome = false
) {
  if (backBtn) {
    backBtn.style.display =
      showBack ? 'inline-block' : 'none';

    backBtn.classList.toggle(
      'hidden',
      !showBack
    );
  }

  if (homeBtn) {
    homeBtn.style.display =
      showHome ? 'inline-block' : 'none';

    homeBtn.classList.toggle(
      'hidden',
      !showHome
    );
  }
}

function erstelleButton(
  text,
  cssClass,
  onClick
) {
  const button =
    document.createElement('button');

  button.type = 'button';
  button.className =
    `btn ${cssClass}`.trim();

  button.textContent = text;

  button.addEventListener(
    'click',
    onClick
  );

  return button;
}

function zeigeHinweis(text) {
  const hinweis =
    document.createElement('p');

  hinweis.className = 'empty';
  hinweis.textContent = text;

  app.appendChild(hinweis);
}


/*
|--------------------------------------------------------------------------
| Startseite
|--------------------------------------------------------------------------
*/

function zeigeStartseite() {
  aktuellerHersteller = null;
  aktuellesModell = null;

  setNavigation(false, false);

  app.innerHTML = '';

  const titel =
    document.createElement('h2');

  titel.textContent =
    'Hersteller auswählen';

  const grid =
    document.createElement('div');

  grid.className = 'grid';

  Object.keys(herstellerDaten)
    .forEach(function (hersteller) {
      const button = erstelleButton(
        `🏢 ${hersteller}`,
        'manufacturer-btn hersteller-btn',
        function () {
          zeigeModelle(hersteller);
        }
      );

      grid.appendChild(button);
    });

  app.appendChild(titel);
  app.appendChild(grid);
}


/*
|--------------------------------------------------------------------------
| Modelle
|--------------------------------------------------------------------------
*/

function zeigeModelle(hersteller) {
  const modelleDaten =
    herstellerDaten[hersteller];

  if (!modelleDaten) {
    return;
  }

  aktuellerHersteller = hersteller;
  aktuellesModell = null;

  setNavigation(true, true);

  app.innerHTML = '';

  const titel =
    document.createElement('h2');

  titel.textContent =
    `${hersteller} – Modelle`;

  app.appendChild(titel);

  const modelle =
    Object.keys(modelleDaten);

  if (modelle.length === 0) {
    zeigeHinweis(
      'Für diesen Hersteller sind noch keine Modelle hinterlegt.'
    );

    return;
  }

  const grid =
    document.createElement('div');

  grid.className = 'grid';

  modelle.forEach(function (modell) {
    const button = erstelleButton(
      `📦 ${modell}`,
      'machine-btn maschine-btn',
      function () {
        zeigeDokumente(
          hersteller,
          modell
        );
      }
    );

    grid.appendChild(button);
  });

  app.appendChild(grid);
}


/*
|--------------------------------------------------------------------------
| Dokumente
|--------------------------------------------------------------------------
*/

function zeigeDokumente(
  hersteller,
  modell
) {
  const dokumenteDaten =
    herstellerDaten[hersteller]?.[modell];

  if (dokumenteDaten === undefined) {
    return;
  }

  aktuellerHersteller = hersteller;
  aktuellesModell = modell;

  setNavigation(true, true);

  app.innerHTML = '';

  const titel =
    document.createElement('h2');

  titel.textContent = modell;

  app.appendChild(titel);

  const dokumente =
    Object.entries(dokumenteDaten);

  if (dokumente.length === 0) {
    zeigeHinweis(
      'Für dieses Modell sind noch keine Dokumente hinterlegt.'
    );

    return;
  }

  const grid =
    document.createElement('div');

  grid.className = 'grid';

  dokumente.forEach(
    function ([dokumentTitel, pfad]) {
      const button = erstelleButton(
        dokumentTitel,
        'document-btn maschine-btn',
        function () {
          oeffnePdf(
            pfad,
            dokumentTitel
          );
        }
      );

      grid.appendChild(button);
    }
  );

  app.appendChild(grid);
}


/*
|--------------------------------------------------------------------------
| Suchfunktion
|--------------------------------------------------------------------------
*/

function suche() {
  if (!searchInput) {
    return;
  }

  const suchbegriff =
    searchInput.value
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

  const titel =
    document.createElement('h2');

  titel.textContent =
    'Suchergebnisse';

  app.appendChild(titel);

  const grid =
    document.createElement('div');

  grid.className = 'grid';

  let trefferGefunden = false;

  Object.entries(herstellerDaten)
    .forEach(
      function (
        [hersteller, modelleDaten]
      ) {
        if (
          hersteller
            .toLowerCase()
            .includes(suchbegriff)
        ) {
          grid.appendChild(
            erstelleButton(
              `🏢 ${hersteller}`,
              'search-result-btn hersteller-btn',
              function () {
                zeigeModelle(
                  hersteller
                );
              }
            )
          );

          trefferGefunden = true;
        }

        Object.entries(modelleDaten)
          .forEach(
            function (
              [modell, dokumenteDaten]
            ) {
              if (
                modell
                  .toLowerCase()
                  .includes(suchbegriff)
              ) {
                grid.appendChild(
                  erstelleButton(
                    `📦 ${modell}`,
                    'search-result-btn maschine-btn',
                    function () {
                      zeigeDokumente(
                        hersteller,
                        modell
                      );
                    }
                  )
                );

                trefferGefunden = true;
              }

              Object.entries(
                dokumenteDaten
              ).forEach(
                function (
                  [
                    dokumentTitel,
                    dokumentPfad
                  ]
                ) {
                  if (
                    dokumentTitel
                      .toLowerCase()
                      .includes(
                        suchbegriff
                      )
                  ) {
                    grid.appendChild(
                      erstelleButton(
                        `${dokumentTitel} – ${modell}`,
                        'search-result-btn',
                        function () {
                          oeffnePdf(
                            dokumentPfad,
                            dokumentTitel
                          );
                        }
                      )
                    );

                    trefferGefunden =
                      true;
                  }
                }
              );
            }
          );
      }
    );

  if (trefferGefunden) {
    app.appendChild(grid);
  } else {
    zeigeHinweis(
      'Keine Treffer gefunden.'
    );
  }
}


/*
|--------------------------------------------------------------------------
| PDF
|--------------------------------------------------------------------------
*/

function oeffnePdf(pfad) {
  const pdfUrl = new URL(pfad, window.location.href).href;
  window.location.assign(pdfUrl);
}
  
function schliessePdf() {
  if (pdfFrame) {
    pdfFrame.src = '';
  }

  if (pdfModal) {
    pdfModal.style.display = 'none';
    pdfModal.classList.add('hidden');
    pdfModal.setAttribute('aria-hidden', 'true');
  }
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
    zeigeModelle(
      aktuellerHersteller
    );

    return;
  }

  zeigeStartseite();
}

function geheNachHause() {
  if (searchInput) {
    searchInput.value = '';
  }

  zeigeStartseite();
}


/*
|--------------------------------------------------------------------------
| Events
|--------------------------------------------------------------------------
*/

if (backBtn) {
  backBtn.onclick = geheZurueck;
}

if (homeBtn) {
  homeBtn.onclick = geheNachHause;
}

if (portalTitle) {
  portalTitle.onclick =
    geheNachHause;
}

if (searchInput) {
  searchInput.oninput = suche;
}

if (closeModalBtn) {
  closeModalBtn.onclick =
    schliessePdf;
}

if (pdfModal) {
  pdfModal.addEventListener(
    'click',
    function (event) {
      if (event.target === pdfModal) {
        schliessePdf();
      }
    }
  );
}

document.addEventListener(
  'keydown',
  function (event) {
    if (event.key === 'Escape') {
      schliessePdf();
    }
  }
);


/*
|--------------------------------------------------------------------------
| Globale Funktionen für alte onclick-Angaben
|--------------------------------------------------------------------------
*/

window.zeigeKategorienUebersicht =
  zeigeStartseite;

window.zeigeStartseite =
  zeigeStartseite;

window.sucheMaschine =
  suche;

window.schliessePdf =
  schliessePdf;


/*
|--------------------------------------------------------------------------
| Start
|--------------------------------------------------------------------------
*/

zeigeStartseite();
