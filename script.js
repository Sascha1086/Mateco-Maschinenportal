'use strict';

const portalDaten = {
  'Arbeitsbühnen': {
    Genie: {
      'GS1532 (Schere)': {
        '📄 Bedienungsanleitung': 'pdf/Genie/GS1532/Bedienungsanleitung.pdf',
        '📘 Serviceanleitung': 'pdf/Genie/GS1532/Serviceanleitung.pdf'
      },
      'GS1932 (Schere)': {},
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

  'Stapler': {
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
    }
  },

  'LKW-Arbeitsbühnen': {},

  'Anhänger-Arbeitsbühnen': {}
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

function erstelleButton(text, klasse, funktion) {
  const button = document.createElement('button');

  button.type = 'button';
  button.className = `btn ${klasse}`;
  button.textContent = text;
  button.addEventListener('click', funktion);

  return button;
}

function setNavigation(zurueckAnzeigen, homeAnzeigen) {
  backBtn.classList.toggle('hidden', !zurueckAnzeigen);
  homeBtn.classList.toggle('hidden', !homeAnzeigen);
}

function getKategorieIcon(kategorie) {
  if (kategorie === 'Arbeitsbühnen') {
    return '🚀';
  }

  if (kategorie === 'Stapler') {
    return '🚜';
  }

  if (kategorie === 'LKW-Arbeitsbühnen') {
    return '🚚';
  }

  if (kategorie === 'Anhänger-Arbeitsbühnen') {
    return '🛻';
  }

  return '📁';
}

function getKategorieKlasse(kategorie) {
  if (kategorie === 'Arbeitsbühnen') {
    return 'category-platforms';
  }

  if (kategorie === 'Stapler') {
    return 'category-forklifts';
  }

  if (kategorie === 'LKW-Arbeitsbühnen') {
    return 'category-trucks';
  }

  if (kategorie === 'Anhänger-Arbeitsbühnen') {
    return 'category-trailers';
  }

  return '';
}

function zeigeStartseite() {
  aktuelleKategorie = null;
  aktuellerHersteller = null;
  aktuellesModell = null;

  setNavigation(false, false);

  app.innerHTML = '';

  const titel = document.createElement('h2');
  titel.textContent = 'Kategorie auswählen';

  const grid = document.createElement('div');
  grid.className = 'grid category-grid';

  Object.keys(portalDaten).forEach(function (kategorie) {
    const button = erstelleButton(
      `${getKategorieIcon(kategorie)} ${kategorie}`,
      `category-btn ${getKategorieKlasse(kategorie)}`,
      function () {
        zeigeHersteller(kategorie);
      }
    );

    grid.appendChild(button);
  });

  app.appendChild(titel);
  app.appendChild(grid);
}

function zeigeHersteller(kategorie) {
  aktuelleKategorie = kategorie;
  aktuellerHersteller = null;
  aktuellesModell = null;

  setNavigation(true, true);

  app.innerHTML = '';

  const titel = document.createElement('h2');
  titel.textContent = `Hersteller – ${kategorie}`;

  app.appendChild(titel);

  const herstellerListe = Object.keys(portalDaten[kategorie]);

  if (herstellerListe.length === 0) {
    const hinweis = document.createElement('p');
    hinweis.className = 'empty';
    hinweis.textContent =
      'In dieser Kategorie sind noch keine Hersteller hinterlegt.';

    app.appendChild(hinweis);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'grid';

  herstellerListe.forEach(function (hersteller) {
    const button = erstelleButton(
      `🏢 ${hersteller}`,
      'manufacturer-btn',
      function () {
        zeigeModelle(kategorie, hersteller);
      }
    );

    grid.appendChild(button);
  });

  app.appendChild(grid);
}

function zeigeModelle(kategorie, hersteller) {
  aktuelleKategorie = kategorie;
  aktuellerHersteller = hersteller;
  aktuellesModell = null;

  setNavigation(true, true);

  app.innerHTML = '';

  const titel = document.createElement('h2');
  titel.textContent = `${hersteller} – Modelle`;

  app.appendChild(titel);

  const modelleListe = Object.keys(
    portalDaten[kategorie][hersteller]
  );

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

  modelleListe.forEach(function (modell) {
    const button = erstelleButton(
      `📦 ${modell}`,
      'machine-btn',
      function () {
        zeigeDokumente(kategorie, hersteller, modell);
      }
    );

    grid.appendChild(button);
  });

  app.appendChild(grid);
}

function zeigeDokumente(kategorie, hersteller, modell) {
  aktuelleKategorie = kategorie;
  aktuellerHersteller = hersteller;
  aktuellesModell = modell;

  setNavigation(true, true);

  app.innerHTML = '';

  const titel = document.createElement('h2');
  titel.textContent = modell;

  app.appendChild(titel);

  const dokumente = Object.entries(
    portalDaten[kategorie][hersteller][modell]
  );

  if (dokumente.length === 0) {
    const hinweis = document.createElement('p');
    hinweis.className = 'empty';
    hinweis.textContent =
      'Für dieses Modell sind noch keine Dokumente hinterlegt.';

    app.appendChild(hinweis);
    return;
  }

  const grid = document.createElement('div');
  grid.className = 'grid';

  dokumente.forEach(function (eintrag) {
    const dokumentTitel = eintrag[0];
    const dokumentPfad = eintrag[1];

    const button = erstelleButton(
      dokumentTitel,
      'document-btn',
      function () {
        oeffnePdf(dokumentPfad, dokumentTitel);
      }
    );

    grid.appendChild(button);
  });

  app.appendChild(grid);
}

function suche() {
  const suchbegriff = searchInput.value
    .trim()
    .toLowerCase();

  if (suchbegriff === '') {
    zeigeStartseite();
    return;
  }

  setNavigation(false, true);

  app.innerHTML = '';

  const titel = document.createElement('h2');
  titel.textContent = 'Suchergebnisse';

  const grid = document.createElement('div');
  grid.className = 'grid';

  let trefferGefunden = false;

  Object.entries(portalDaten).forEach(function (kategorieEintrag) {
    const kategorie = kategorieEintrag[0];
    const herstellerDaten = kategorieEintrag[1];

    if (kategorie.toLowerCase().includes(suchbegriff)) {
      grid.appendChild(
        erstelleButton(
          `${getKategorieIcon(kategorie)} ${kategorie}`,
          'search-result-btn',
          function () {
            zeigeHersteller(kategorie);
          }
        )
      );

      trefferGefunden = true;
    }

    Object.entries(herstellerDaten).forEach(function (herstellerEintrag) {
      const hersteller = herstellerEintrag[0];
      const modelleDaten = herstellerEintrag[1];

      if (hersteller.toLowerCase().includes(suchbegriff)) {
        grid.appendChild(
          erstelleButton(
            `🏢 ${hersteller}`,
            'search-result-btn',
            function () {
              zeigeModelle(kategorie, hersteller);
            }
          )
        );

        trefferGefunden = true;
      }

      Object.keys(modelleDaten).forEach(function (modell) {
        if (modell.toLowerCase().includes(suchbegriff)) {
          grid.appendChild(
            erstelleButton(
              `📦 ${modell}`,
              'search-result-btn',
              function () {
                zeigeDokumente(
                  kategorie,
                  hersteller,
                  modell
                );
              }
            )
          );

          trefferGefunden = true;
        }
      });
    });
  });

  app.appendChild(titel);

  if (trefferGefunden) {
    app.appendChild(grid);
  } else {
    const hinweis = document.createElement('p');
    hinweis.className = 'empty';
    hinweis.textContent = 'Keine Treffer gefunden.';

    app.appendChild(hinweis);
  }
}

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

backBtn.addEventListener('click', geheZurueck);
homeBtn.addEventListener('click', geheNachHause);
portalTitle.addEventListener('click', geheNachHause);
searchInput.addEventListener('input', suche);
closeModalBtn.addEventListener('click', schliessePdf);

pdfModal.addEventListener('click', function (event) {
  if (event.target === pdfModal) {
    schliessePdf();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    schliessePdf();
  }
});

zeigeStartseite();