'use strict';

/*
|--------------------------------------------------------------------------
| Hersteller, Modelle und Dokumente
|--------------------------------------------------------------------------
*/

const herstellerDaten = {
  Genie: {
  'GS1530 (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/GS1530/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/GS1530/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS1530/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS1530/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS1530/Ersatzteilliste.pdf'
  },

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

  'GS2046 E-Drive (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/GS2046 EDrive/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/GS2046 EDrive/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS2046 EDrive/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS2046 EDrive/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS2046 EDrive/Ersatzteilliste.pdf'
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

  'GS3232 E-Drive (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/GS3232 EDrive/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/GS3232 EDrive/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS3232 EDrive/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS3232 EDrive/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS3232 EDrive/Ersatzteilliste.pdf'
  },

  'GS3369DC (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/GS3369DC/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/GS3369DC/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS3369DC/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS3369DC/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS3369DC/Ersatzteilliste.pdf'
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

  'GS4069BE (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/GS4069BE/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/GS4069BE/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS4069BE/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS4069BE/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS4069BE/Ersatzteilliste.pdf'
  },

  'GS4069DC (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/GS4069DC/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/GS4069DC/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/GS4069DC/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/GS4069DC/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/GS4069DC/Ersatzteilliste.pdf'
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

  'Z30/20NRJ (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/Z30_20NRJ/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/Z30_20NRJ/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/Z30_20NRJ/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/Z30_20NRJ/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/Z30_20NRJ/Ersatzteilliste.pdf'
  },

  'Z40/23NRJ (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/Z40_23NRJ/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/Z40_23NRJ/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/Z40_23NRJ/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/Z40_23NRJ/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/Z40_23NRJ/Ersatzteilliste.pdf'
  },

  'Z45/25JRT (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/Z45/25JRT/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/Z45/25JRT/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/Z45/25JRT/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/Z45/25JRT/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/Z45/25JRT/Ersatzteilliste.pdf'
  },

  'Z45/25J Bi-Energy (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/Z45_25J_BiEnergy/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/Z45_25J_BiEnergy/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/Z45_25J_BiEnergy/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/Z45_25J_BiEnergy/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/Z45_25J_BiEnergy/Ersatzteilliste.pdf'
  },

  'S45 (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/S45/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/S45/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/S45/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/S45/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/S45/Ersatzteilliste.pdf'
  },

  'S45XC (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/S45XC/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/S45XC/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/S45XC/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/S45XC/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/S45XC/Ersatzteilliste.pdf'
  },

  'S45 TRAX (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/S45_TRAX/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/S45_TRAX/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/S45_TRAX/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/S45_TRAX/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/S45_TRAX/Ersatzteilliste.pdf'
  },

  'Z51/30 JRT (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/Z51_30JRT/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/Z51_30JRT/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/Z51_30JRT/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/Z51_30JRT/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/Z51_30JRT/Ersatzteilliste.pdf'
  },

  'S60 (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/S60/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/S60/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/S60/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/S60/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/S60/Ersatzteilliste.pdf'
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

    '🔧 Ersatzteilliste':
        'pdf/Genie/Z60_34/Ersatzteilliste.pdf'
  },

  'Z60/37 FE (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/Z60_37FE/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/Z60_37FE/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/Z60_37FE/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/Z60_37FE/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/Z60_37FE/Ersatzteilliste.pdf'
  },

  'S65XC (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/S65XC/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/S65XC/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/S65XC/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/S65XC/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/S65XC/Ersatzteilliste.pdf'
  },

  'S65XC TRAX (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/S65XC_TRAX/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/S65XC_TRAX/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/S65XC_TRAX/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/S65XC_TRAX/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/S65XC_TRAX/Ersatzteilliste.pdf'
  },

  'Z80/60 (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/Z80_60/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/Z80_60/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/Z80_60/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/Z80_60/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/Z80_60/Ersatzteilliste.pdf'
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

  'SX-105XC (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/SX_105XC/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/SX_105XC/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/SX_105XC/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/SX_105XC/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/SX_105XC/Ersatzteilliste.pdf'
  },

  'SX-125XC (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/SX_125XC/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/SX_125XC/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/SX_125XC/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/SX_125XC/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/SX_125XC/Ersatzteilliste.pdf'
  },

  'S-135/70 (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/Z135_70/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/Z135_70/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/Z135_70/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/Z135_70/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/Z135_70/Ersatzteilliste.pdf'
  },

  'ZX-135/70 (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/Genie/ZX_135_70/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/Genie/ZX_135_70/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/Genie/ZX_135_70/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/Genie/ZX_135_70/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/Genie/ZX_135_70/Ersatzteilliste.pdf'
    }
  },

  JLG: {
  '1230ES (Rolllift)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/1230ES/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/1230ES/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/1230ES/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/1230ES/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/1230ES/Ersatzteilliste.pdf'
  },

  'ES1530L (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/ES1530L/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/ES1530L/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/ES1530L/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/ES1530L/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/ES1530L/Ersatzteilliste.pdf'
  },

  '1930ES (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/1930ES/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/1930ES/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/1930ES/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/1930ES/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/1930ES/Ersatzteilliste.pdf'
  },

  '2032ES (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/2032ES/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/2032ES/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/2032ES/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/2032ES/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/2032ES/Ersatzteilliste.pdf'
  },

  '2632ES (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/2632ES/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/2632ES/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/2632ES/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/2632ES/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/2632ES/Ersatzteilliste.pdf'
  },

  '2646ES (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/2646ES/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/2646ES/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/2646ES/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/2646ES/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/2646ES/Ersatzteilliste.pdf'
  },

  'M3369 (Schere)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/M3369/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/M3369/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/M3369/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/M3369/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/M3369/Ersatzteilliste.pdf'
  },

  'E300AJP (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/E300AJP/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/E300AJP/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/E300AJP/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/E300AJP/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/E300AJP/Ersatzteilliste.pdf'
  },

  'E400AJPN (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/E400AJPN/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/E400AJPN/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/E400AJPN/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/E400AJPN/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/E400AJPN/Ersatzteilliste.pdf'
  },

  '450AJ (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/450AJ/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/450AJ/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/450AJ/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/450AJ/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/450AJ/Ersatzteilliste.pdf'
  },

  '460SJ (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/460SJ/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/460SJ/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/460SJ/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/460SJ/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/460SJ/Ersatzteilliste.pdf'
  },

  '460SJC (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/460SJC/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/460SJC/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/460SJC/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/460SJC/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/460SJC/Ersatzteilliste.pdf'
  },

  '660SJ (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/660SJ/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/660SJ/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/660SJ/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/660SJ/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/660SJ/Ersatzteilliste.pdf'
  },

  '1350SJP (Teleskop)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/1350SJP/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/1350SJP/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/1350SJP/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/1350SJP/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/1350SJP/Ersatzteilliste.pdf'
  },

  'Toucan 8E-L (Teleskopmast)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/Toucan8E_L/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/Toucan8E_L/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/Toucan8E_L/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/Toucan8E_L/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/Toucan8E_L/Ersatzteilliste.pdf'
  },

  'Toucan 12E (Teleskopmast)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/Toucan12E_Plus/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/Toucan12E/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/Toucan12E/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/Toucan12E/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/Toucan12E/Ersatzteilliste.pdf'
  },

  'Toucan 12E Plus (Teleskopmast)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/Toucan12E_Plus/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/JLG/Toucan12E_Plus/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/JLG/Toucan12E_Plus/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/JLG/Toucan12E_Plus/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/JLG/Toucan12E_Plus/Ersatzteilliste.pdf'
  },

  'X15J Plus (Gelenk-Kette)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/X15J_Plus/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/X15J_Plus/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/X15J_Plus/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/X15J_Plus/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/X15J_Plus/Ersatzteilliste.pdf'
  },

  'X18J Plus (Gelenk-Kette)': {
    '📄 Bedienungsanleitung':
        'pdf/JLG/X18J_Plus/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
        'pdf/X18J_Plus/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
        'pdf/X18J_Plus/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
        'pdf/X18J_Plus/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
        'pdf/X18J_Plus/Ersatzteilliste.pdf'
    }
  },

  Zoomlion: {
  'ZS0407DC-LI (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZS0407DC_LI/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZS0407DC_LI/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZS0407DC_LI/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZS0407DC_LI/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZS0407DC_LI/Ersatzteilliste.pdf'
  },

  'ZS0607ACW-LI (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZS0607ACW_LI/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZS0607ACW_LI/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZS0607ACW_LI/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZS0607ACW_LI/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZS0607ACW_LI/Ersatzteilliste.pdf'
  },

  'ZS0808AC-LI (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZS0808AC_LI/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZS0808AC_LI/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZS0808AC_LI/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZS0808AC_LI/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZS0808AC_LI/Ersatzteilliste.pdf'
  },

  'ZS0812AC-LI (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZS0812AC_LI/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZS0812AC_LI/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZS0812AC_LI/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZS0812AC_LI/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZS0812AC_LI/Ersatzteilliste.pdf'
  },

  'ZS1012AC-LI (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZS1012AC-LI/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZS1012AC-LI/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZS1012AC-LI/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZS1012AC-LI/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZS1012AC-LI/Ersatzteilliste.pdf'
  },

  'ZS1212AC-LI (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZS1212AC-LI/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZS1212AC-LI/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZS1212AC-LI/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZS1212AC-LI/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZS1212AC-LI/Ersatzteilliste.pdf'
  },

  'ZS1414AC-LI (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZS1414AC-LI/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZS1414AC-LI/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZS1414AC-LI/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZS1414AC-LI/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZS1414AC-LI/Ersatzteilliste.pdf'
  },

  'ZA10RJE (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZA10RJE/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZA10RJE/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZA10RJE/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZA10RJE/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZA10RJE/Ersatzteilliste.pdf'
  },

  'ZT14J-V (Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZT14J_V/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZT14J_V/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZT14J_V/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZT14J_V/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZT14J_V/Ersatzteilliste.pdf'
  },

  'ZA14NJE-LI (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZA14NJE_LI/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZA14NJE_LI/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZA14NJE_LI/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZA14NJE_LI/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZA14NJE_LI/Ersatzteilliste.pdf'
  },

  'ZA16JERT-LI (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZA16JERT_LI/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZA16JERT_LI/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZA16JERT_LI/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZA16JERT_LI/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZA16JERT_LI/Ersatzteilliste.pdf'
  },

  'ZS1623RT (Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZS1623RT/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZS1623RT/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZS1623RT/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZS1623RT/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZS1623RT/Ersatzteilliste.pdf'
  },

  'ZT20J (Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZT20J/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZT20J/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZT20J/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZT20J/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZT20J/Ersatzteilliste.pdf'
  },

  'ZA20JERT-LI (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZA20JERT-LI/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZA20JERT-LI/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZA20JERT-LI/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZA20JERT-LI/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZA20JERT-LI/Ersatzteilliste.pdf'
  },

  'ZT22JE (Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZT22JE/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZT22JE/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZT22JE/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZT22JE/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZT22JE/Ersatzteilliste.pdf'
  },

  'ZA24J (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZA24J/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZA24J/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZA24J/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZA24J/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZA24J/Ersatzteilliste.pdf'
  },

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

  'ZT38JE (Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Zoomlion/ZT38JE/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Zoomlion/ZT38JE/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Zoomlion/ZT38JE/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Zoomlion/ZT38JE/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Zoomlion/ZT38JE/Ersatzteilliste.pdf'
    }  
  },

  Haulotte: {
  'Star 10 (Teleskopmast)': {
    '📄 Bedienungsanleitung':
      'pdf/Haulotte/Star_10/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Haulotte/Star_10/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Haulotte/Star_10/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Haulotte/Star_10/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Haulotte/Star_10/Ersatzteilliste.pdf'  
  },

  'HA12CJ+ (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Haulotte/HA12CJ+/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Haulotte/HA12CJ+/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Haulotte/HA12CJ+/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Haulotte/HA12CJ+/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Haulotte/HA12CJ+/Ersatzteilliste.pdf'  
  },

  'HA15IP (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Haulotte/HA15IP/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Haulotte/HA15IP/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Haulotte/HA15IP/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Haulotte/HA15IP/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Haulotte/HA15IP/Ersatzteilliste.pdf'
    }  
  },

  Niftylift: {
  'HR15NE (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Niftylift/HR15NE/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Niftylift/HR15NE/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Niftylift/HR15NE/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Niftylift/HR15NE/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Niftylift/HR15NE/Ersatzteilliste.pdf' 
  },

  'HR17N Hybrid (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Niftylift/HR17N_Hybrid/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Niftylift/HR17N_Hybrid/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Niftylift/HR17N_Hybrid/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Niftylift/HR17N_Hybrid/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Niftylift/HR17N_Hybrid/Ersatzteilliste.pdf' 
  },

  'HR17 Hybrid 4X4 (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Niftylift/HR17_Hybrid_4X4/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Niftylift/HR17_Hybrid_4X4/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Niftylift/HR17_Hybrid_4X4/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Niftylift/HR17_Hybrid_4X4/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Niftylift/HR17_Hybrid_4X4/Ersatzteilliste.pdf' 
  },

  'HR21 Hybrid 4X4 (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Niftylift/HR21_Hybrid_4X4/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Niftylift/HR21_Hybrid_4X4/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Niftylift/HR21_Hybrid_4X4/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Niftylift/HR21_Hybrid_4X4/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Niftylift/HR21_Hybrid_4X4/Ersatzteilliste.pdf' 
  },

  'HR28 Hybrid 4X4 (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Niftylift/HR28_Hybrid_4X4/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Niftylift/HR28_Hybrid_4X4/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Niftylift/HR28_Hybrid_4X4/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Niftylift/HR28_Hybrid_4X4/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Niftylift/HR28_Hybrid_4X4/Ersatzteilliste.pdf' 
  },

  'HR28E 4X4 (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Niftylift/HR28E_4X4/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Niftylift/HR28E_4X4/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Niftylift/HR28E_4X4/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Niftylift/HR28E_4X4/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Niftylift/HR28E_4X4/Ersatzteilliste.pdf'
     } 
  },

  Dingli: {
  'JCPT0607A (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Dingli/JCPT0607A/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Dingli/JCPT0607A/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Dingli/JCPT0607A/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Dingli/JCPT0607A/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Dingli/JCPT0607A/Ersatzteilliste.pdf'   
  },

  'JCPT1218DC (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Dingli/JCPT1218DC/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Dingli/JCPT1218DC/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Dingli/JCPT1218DC/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Dingli/JCPT1218DC/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Dingli/JCPT1218DC/Ersatzteilliste.pdf'   
  },

  'JCPT1418DC (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Dingli/JCPT1418DC/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Dingli/JCPT1418DC/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Dingli/JCPT1418DC/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Dingli/JCPT1418DC/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Dingli/JCPT1418DC/Ersatzteilliste.pdf'   
  },

  'JCPT1523DCB (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Dingli/JCPT1523DCB/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Dingli/JCPT1523DCB/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Dingli/JCPT1523DCB/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Dingli/JCPT1523DCB/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Dingli/JCPT1523DCB/Ersatzteilliste.pdf'   
  },

  'JCPT1823DCB (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Dingli/JCPT1823DCB/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Dingli/JCPT1823DCB/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Dingli/JCPT1823DCB/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Dingli/JCPT1823DCB/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Dingli/JCPT1823DCB/Ersatzteilliste.pdf'   
  },

  'JCPT1912DCL (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Dingli/JCPT1912DCL/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Dingli/JCPT1912DCL/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Dingli/JCPT1912DCL/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Dingli/JCPT1912DCL/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Dingli/JCPT1912DCL/Ersatzteilliste.pdf'   
  },

  'JCPT2223DC (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Dingli/JCPT2223DC/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Dingli/JCPT2223DC/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Dingli/JCPT2223DC/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Dingli/JCPT2223DC/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Dingli/JCPT2223DC/Ersatzteilliste.pdf'   
  },

  'BT28BERT (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Dingli/BT28BERT/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Dingli/BT28BERT/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Dingli/BT28BERT/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Dingli/BT28BERT/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Dingli/BT28BERT/Ersatzteilliste.pdf'   
  },

  'BT34BERT (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Dingli/BT34BERT/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Dingli/BT34BERT/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Dingli/BT34BERT/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Dingli/BT34BERT/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Dingli/BT34BERT/Ersatzteilliste.pdf' 
     }  
  },

  Skyjack: {
  'SJ12 (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Skyjack/SJ12/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Skyjack/SJ12/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Skyjack/SJ12/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Skyjack/SJ12/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Skyjack/SJ12/Ersatzteilliste.pdf'  
  },

  'SJ16 (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Skyjack/SJ16/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Skyjack/SJ16/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Skyjack/SJ16/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Skyjack/SJ16/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Skyjack/SJ16/Ersatzteilliste.pdf'  
  },

  'SJIII 3219 (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Skyjack/SJIII 3219/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Skyjack/SJIII 3219/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Skyjack/SJIII 3219/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Skyjack/SJIII 3219/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Skyjack/SJIII 3219/Ersatzteilliste.pdf'  
  },

  'SJIII 3226 (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Skyjack/SJIII_3226/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Skyjack/SJIII_3226/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Skyjack/SJIII_3226/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Skyjack/SJIII_3226/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Skyjack/SJIII_3226/Ersatzteilliste.pdf'  
  },

  'SJIII 4632 (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Skyjack/SJIII_4632/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Skyjack/SJIII_4632/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Skyjack/SJIII_4632/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Skyjack/SJIII_4632/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Skyjack/SJIII_4632/Ersatzteilliste.pdf'    
  },

  'SJ6832 RTE (Schere)': {
    '📄 Bedienungsanleitung':
      'pdf/Skyjack/SJ6832_RTE/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Skyjack/SJ6832_RTE/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Skyjack/SJ6832_RTE/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Skyjack/SJ6832_RTE/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Skyjack/SJ6832_RTE/Ersatzteilliste.pdf'  
    }  
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
  '100VJR (Teleskopmast)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/100VJR/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/100VJR/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/100VJR/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/100VJR/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/100VJR/Ersatzteilliste.pdf'
  },

  '120AETJ C 3D (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/120AETJ_C_3D/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/120AETJ_C_3D/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/120AETJ_C_3D/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/120AETJ_C_3D/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/120AETJ_C_3D/Ersatzteilliste.pdf'
  },

  '150AETJ C 3D (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/150AETJ_C_3D/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/150AETJ_C_3D/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/150AETJ_C_3D/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/150AETJ_C_3D/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/150AETJ_C_3D/Ersatzteilliste.pdf'
  },

  '160ATJ+ST5 S1 (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/160ATJ+ST5_S1/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/160ATJ+ST5_S1/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/160ATJ+ST5_S1/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/160ATJ+ST5_S1/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/160ATJ+ST5_S1/Ersatzteilliste.pdf'
  },

  '170AETJL (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/170AETJL/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/170AETJL/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/170AETJL/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/170AETJL/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/170AETJL/Ersatzteilliste.pdf'
  },

  '200ATJE (Gelenk-Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/200ATJE/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/200ATJE/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/200ATJE/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/200ATJE/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/200ATJE/Ersatzteilliste.pdf'
  },

  '280TJ (Teleskop)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/280TJ/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/280TJ/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/280TJ/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/280TJ/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/280TJ/Ersatzteilliste.pdf'
  },

  'M30-4 ST3B (Gelände-Stapler)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/M30-4_ST3B/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/M30-4_ST3B/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/M30-4_ST3B/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/M30-4_ST3B/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/M30-4_ST3B/Ersatzteilliste.pdf'
  },

  'M30-4D ST5 S1 EU (Gelände-Stapler)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/M30_4D_ST5_S1_EU/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/M30_4D_ST5_S1_EU/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/M30_4D_ST5_S1_EU/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/M30_4D_ST5_S1_EU/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/M30_4D_ST5_S1_EU/Ersatzteilliste.pdf'
  },

  'MT625H Comfort 75K ST5 S1 (Tele-Stapler)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/MT625H_Comfort_75K_ST5_S1/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/MT625H_Comfort_75K_ST5_S1/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/MT625H_Comfort_75K_ST5_S1/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/MT625H_Comfort_75K_ST5_S1/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/MT625H_Comfort_75K_ST5_S1/Ersatzteilliste.pdf'
  },

  'MT930H 75K ST5 S1 (Tele-Stapler)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/MT930H_75K_ST5_S1/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/MT930H_75K_ST5_S1/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/MT930H_75K_ST5_S1/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/MT930H_75K_ST5_S1/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/MT930H_75K_ST5_S1/Ersatzteilliste.pdf'
  },

  'MT933 Easy 75D ST5 S1 (Tele-Stapler)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/MT933_Easy_75D_ST5_S1/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/MT933_Easy_75D_ST5_S1/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/MT933_Easy_75D_ST5_S1/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/MT933_Easy_75D_ST5_S1/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/MT933_Easy_75D_ST5_S1/Ersatzteilliste.pdf'
  },

  'MT935 75D ST5 S1 (Tele-Stapler)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/MT935_75D_ST5_S1/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/MT935_75D_ST5_S1/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/MT935_75D_ST5_S1/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/MT935_75D_ST5_S1/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/MT935_75D_ST5_S1/Ersatzteilliste.pdf'
  },

  'MT1440 100P ST4 S1 (Tele-Stapler)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/MT1440_100P_ST4_S1/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/MT1440_Easy_75D_ST5_S1/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/MT1440_Easy_75D_ST5_S1/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/MT1440_Easy_75D_ST5_S1/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/MT1440_Easy_75D_ST5_S1/Ersatzteilliste.pdf'
  },

  'MT1440 Easy 75D ST5 S1 (Tele-Stapler)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/MT1440_Easy_75D_ST5_S1/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/MT1440_Easy_75D_ST5_S1/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/MT1440_Easy_75D_ST5_S1/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/MT1440_Easy_75D_ST5_S1/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/MT1440_Easy_75D_ST5_S1/Ersatzteilliste.pdf'
  },

  'MT1840 Easy 75D ST5 S1 (Tele-Stapler)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/MT1840_Easy_75D_ST5_S1/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/MT1840_Easy_75D_ST5_S1/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/MT1840_Easy_75D_ST5_S1/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/MT1840_Easy_75D_ST5_S1/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/MT1840_Easy_75D_ST5_S1/Ersatzteilliste.pdf'
  },

  'MRT1840 Easy 400° ST3B (Roto-Stapler)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/MRT1840_Easy_400°_ST3B/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/MRT1840_Easy_400°_ST3B/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/MRT1840_Easy_400°_ST3B/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/MRT1840_Easy_400°_ST3B/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/MRT1840_Easy_400°_ST3B/Ersatzteilliste.pdf'
  },

  'MRT2145 360 115D ST5 S1 (Roto-Stapler)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/MRT2145 360 115D ST5 S1/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/MRT2145 360 115D ST5 S1/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/MRT2145 360 115D ST5 S1/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/MRT2145 360 115D ST5 S1/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/MRT2145 360 115D ST5 S1/Ersatzteilliste.pdf'
  },

  'MRT2150 Privilege+ ST4 S2 (Roto-Stapler)': {
    '📄 Bedienungsanleitung':
      'pdf/Manitou/MRT2150_Privilege+_ST4_S2/Bedienungsanleitung.pdf',

    '📘 Serviceanleitung':
      'pdf/Manitou/MRT2150_Privilege+_ST4_S2/Serviceanleitung.pdf',

    '⚠️ Fehlercodes':
      'pdf/Manitou/MRT2150_Privilege+_ST4_S2/Fehlercodeliste.pdf',

    '⚡ Schaltplan':
      'pdf/Manitou/MRT2150_Privilege+_ST4_S2/Schaltplan.pdf',

    '🔧 Ersatzteilliste':
      'pdf/Manitou/MRT2150_Privilege+_ST4_S2/Ersatzteilliste.pdf'
    }
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
