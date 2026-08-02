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
        'pdf/Genie/GS1932/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS1932/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS1932/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS1932/Ersatzteilliste.pdf'
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

  'GS2032 (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/GS2032/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/GS2032/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS2032/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS2032/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS2032/Ersatzteilliste.pdf'
  },

  'GS2646 (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/GS2646/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/GS2646/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS2646/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS2646/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS2646/Ersatzteilliste.pdf'
  },

  'GS2669DC (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/GS2669DC/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/GS2669DC/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS2669DC/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS2669DC/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS2669DC/Ersatzteilliste.pdf'
  },

  'GS3232 (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/GS3232/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/GS3232/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS3232/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS3232/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS3232/Ersatzteilliste.pdf'
  },

  'GS4047 (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/GS4047/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/GS4047/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS4047/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS4047/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS4047/Ersatzteilliste.pdf'
  },

  'GS3390RT (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/GS3390RT/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/GS3390RT/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS3390RT/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS3390RT/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS3390RT/Ersatzteilliste.pdf'
  },

  'GS4390RT (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/GS4390RT/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/GS4390RT/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS4390RT/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS4390RT/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS4390RT/Ersatzteilliste.pdf'
  },

  'GS5390RT (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/GS5390RT/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/GS5390RT/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS5390RT/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS5390RT/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS5390RT/Ersatzteilliste.pdf'
  },

  'Z40/23NRJ (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/Z40/23NRJ/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/Z40/23NRJ/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/Z40/23NRJ/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/Z40/23NRJ/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/Z40/23NRJ/Ersatzteilliste.pdf'
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

  'SX-125XC (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/SX-125XC/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/SX-125XC/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/SX-125XC/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/SX-125XC/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/SX-125XC/Ersatzteilliste.pdf'
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

  'Holland Lift': {
  'Monostar (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Holland Lift/Monostar/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Holland Lift/Monostar/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Holland Lift/Monostar/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Holland Lift/Monostar/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Holland Lift/Monostar/Ersatzteilliste.pdf'
    }
  },

  'PB Lift': {
  'S131-19E (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/PB Lift/S131-19E/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/PB Lift/S131-19E/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/PB Lift/S131-19E/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/PB Lift/S131-19E/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/PB Lift/S131-19E/Ersatzteilliste.pdf'
  },

  'S151-12 ES (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/PB Lift/S151-12 ES/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/PB Lift/S151-12 ES/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/PB Lift/S151-12 ES/Fehlercodeliste.pdf',
 
    '⚡ Schaltplan':
      'pdf/PB Lift/S151-12 ES/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/PB Lift/S151-12 ES/Ersatzteilliste.pdf'
  },

  'S151-12E (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/PB Lift/S151-12E/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/PB Lift/S151-12E/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/PB Lift/S151-12E/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/PB Lift/S151-12E/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/PB Lift/S151-12E/Ersatzteilliste.pdf'
  },

  'S151-16E (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/PB Lift/S151-16E/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/PB Lift/S151-16E/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/PB Lift/S151-16E/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/PB Lift/S151-16E/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/PB Lift/S151-16E/Ersatzteilliste.pdf'
  },

  'S171-12E (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/PB Lift/S171-12E/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/PB Lift/S171-12E/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/PB Lift/S171-12E/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/PB Lift/S171-12E/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/PB Lift/S171-12E/Ersatzteilliste.pdf'
  },

  'S171-16E (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/PB Lift/S171-16E/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/PB Lift/S171-16E/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/PB Lift/S171-16E/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/PB Lift/S171-16E/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/PB Lift/S171-16E/Ersatzteilliste.pdf'
  },

   'S225-23 DS 4X4 (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/PB Lift/S225-23 DS 4X4/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/PB Lift/S225-23 DS 4X4/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/PB Lift/S225-23 DS 4X4/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/PB Lift/S225-23 DS 4X4/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/PB Lift/S225-23 DS 4X4/Ersatzteilliste.pdf' 
    }
  },

  Bravi: {
  'Leonardo (Rolllift)': {
    '📄 Bedienungsanleitung':
      'pdf/Bravi/Leonardo/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Bravi/Leonardo/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Bravi/Leonardo/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Bravi/Leonardo/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Bravi/Leonardo/Ersatzteilliste.pdf'
    }
  },

  Gefas: {
  'Helix 1205 (Telekopmast)': {
    '📄 Bedienungsanleitung':
      'pdf/Gefas/Helix 1205/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Gefas/Helix 1205/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Gefas/Helix 1205/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Gefas/Helix 1205/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Gefas/Helix 1205/Ersatzteilliste.pdf'
  },

  'Helix 1508 (Telekopmast)': {
    '📄 Bedienungsanleitung':
      'pdf/Gefas/Helix 1508/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Gefas/Helix 1508/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Gefas/Helix 1508/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Gefas/Helix 1508/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Gefas/Helix 1508/Ersatzteilliste.pdf'
    }
  },

  Teupen: {
  'LEO15GT (Gelenk-Kette)': {
    '📄 Bedienungsanleitung':
      'pdf/Teupen/LEO15GT/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Teupen/LEO15GT/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Teupen/LEO15GT/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Teupen/LEO15GT/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Teupen/LEO15GT/Ersatzteilliste.pdf'
  },

  'LEO18GT Plus (Kette)': {
    '📄 Bedienungsanleitung':
      'pdf/Teupen/LEO18GT Plus/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Teupen/LEO18GT Plus/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Teupen/LEO18GT Plus/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Teupen/LEO18GT Plus/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Teupen/LEO18GT Plus/Ersatzteilliste.pdf'
  },

  'LEO21GT (Gelenk-Kette)': {
    '📄 Bedienungsanleitung':
      'pdf/Teupen/LEO21GT/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Teupen/LEO21GT/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Teupen/LEO21GT/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Teupen/LEO21GT/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Teupen/LEO21GT/Ersatzteilliste.pdf'
  },

  'LEO23T (Kette)': {
    '📄 Bedienungsanleitung':
      'pdf/Teupen/LEO23T/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Teupen/LEO23T/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Teupen/LEO23T/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Teupen/LEO23T/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Teupen/LEO23T/Ersatzteilliste.pdf'
  },

  'LEO23GT (Gelenk-Kette)': {
    '📄 Bedienungsanleitung':
      'pdf/Teupen/LEO23GT/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Teupen/LEO23GT/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Teupen/LEO23GT/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Teupen/LEO23GT/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Teupen/LEO23GT/Ersatzteilliste.pdf'
  },

  'LEO24GT (Gelenk-Kette)': {
    '📄 Bedienungsanleitung':
      'pdf/Teupen/LEO24GT/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Teupen/LEO24GT/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Teupen/LEO24GT/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Teupen/LEO24GT/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Teupen/LEO24GT/Ersatzteilliste.pdf'
  },

  'LEO25T Plus (Kette)': {
    '📄 Bedienungsanleitung':
      'pdf/Teupen/LEO25T Plus/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Teupen/LEO25T Plus/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Teupen/LEO25T Plus/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Teupen/LEO25T Plus/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Teupen/LEO25T Plus/Ersatzteilliste.pdf'
  },

  'LEO30T (Kette)': {
    '📄 Bedienungsanleitung':
      'pdf/Teupen/LEO30T/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Teupen/LEO30T/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Teupen/LEO30T/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Teupen/LEO30T/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Teupen/LEO30T/Ersatzteilliste.pdf'
  },

  'LEO31T (Kette)': {
    '📄 Bedienungsanleitung':
      'pdf/Teupen/LEO31T/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Teupen/LEO31T/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Teupen/LEO31T/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Teupen/LEO31T/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Teupen/LEO31T/Ersatzteilliste.pdf'
  },    

  'LEO35T Plus (Kette)': {
    '📄 Bedienungsanleitung':
      'pdf/Teupen/LEO35T Plus/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Teupen/LEO35T Plus/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Teupen/LEO35T Plus/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Teupen/LEO35T Plus/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Teupen/LEO35T Plus/Ersatzteilliste.pdf'
  },

  'LEO36T (Kette)': {
    '📄 Bedienungsanleitung':
      'pdf/Teupen/LEO36T/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Teupen/LEO36T/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Teupen/LEO36T/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Teupen/LEO36T/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Teupen/LEO36T/Ersatzteilliste.pdf'
    }
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
