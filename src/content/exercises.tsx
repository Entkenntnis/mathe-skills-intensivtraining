import { Exercise } from '@/data/types'
import { exercise1 } from './implementations/1-bruchteil-ermitteln-rechteck'
import { exercise2 } from './implementations/2-bruchteil-ermitteln-kreis'
import { exercise3 } from './implementations/3-bruchschreibweisen-gemischte-zahl'
import { exercise4 } from './implementations/4-bruchschreibweisen-unechter-bruch'
import { exercise5 } from './implementations/5-bruch-erweitern-auf-nenner'
import { exercise6 } from './implementations/6-bruch-kuerzen'
import { exercise7 } from './implementations/7-bruchschreibweisen-aus-dezimalzahl'
import { exercise8 } from './implementations/8-bruchschreibweisen-dezimalzahl'
import { exercise9 } from './implementations/9-bruchteil-faerben'
import { exercise10 } from './implementations/10-einheiten-umrechnen'
import { exercise11 } from './implementations/11-brueche-addieren-und-subtrahieren-gleichnamig'
import { exercise12 } from './implementations/12-brueche-addieren-und-subtrahieren'
import { exercise13 } from './implementations/13-brueche-addieren-und-subtrahieren-negative-zahlen'
import { exercise14 } from './implementations/14-brueche-addieren-und-subtrahieren-laengerer-term'
import { exercise15 } from './implementations/15-brueche-multiplizieren und dividieren'
import { exercise16 } from './implementations/16-brueche-multiplizieren und dividieren-negative-zahlen'
import { exercise17 } from './implementations/17-bruchterme-punkt-vor-strich'
import { exercise18 } from './implementations/18-sachaufgabe-mit-bruechen-fussballfans'
import { exercise19 } from './implementations/19-dezimalzahlen-addieren-und-subtrahieren'
import { exercise20 } from './implementations/20-dezimalzahlen-multiplizieren-im-kopf'
import { exercise23 } from './implementations/23-rechnen-mit-zehnerpotenzen'
import { exercise21 } from './implementations/21-dezimalzahlen-multiplizieren-schriftlich'
import { exercise22 } from './implementations/22-dezimalzahlen-dividieren-schriftlich'
import { exercise24 } from './implementations/24-rechengesetze-vorteilhaft-addieren'
import { exercise25 } from './implementations/25-distributivgesetz-vorteilhaft-rechnen'
import { exercise26 } from './implementations/26-raetsel-passendes-rechenzeichen'
import { exercise27 } from './implementations/27-rationale-zahlen-multiplizieren-geschickt-kuerzen'
import { exercise28 } from './implementations/28-potenzwert-berechnen'
import { exercise29 } from './implementations/29-potenzwert-berechnen-rationale-zahlen'
import { exercise32 } from './implementations/32-als-potenz-schreiben'
import { exercise33 } from './implementations/33-potenzwert-berechnen-term'
import { exercise51 } from './implementations/51-2023-1-rechnen-mit-rationalen-zahlen'
import { exercise55 } from './implementations/55-2023-2-anteil-bestimmen'
import { exercise56 } from './implementations/56-2023-3-prozentrechnen'
import { exercise57 } from './implementations/57-2023-4-rechnen-mit-laengeneinheiten'
import { exercise58 } from './implementations/58-2023-5-dezimalzahlen-als-faktoren'
import { exercise59 } from './implementations/59-2023-6-zahl-legen'
import { exercise60 } from './implementations/60-2023-7-winkel-zeichnen'
import { exercise61 } from './implementations/61-2023-8-diagramm-ablesen-und-ergaenzen'
import { exercise63 } from './implementations/63-2023-9-geradenkreuzung'
import { exercise64 } from './implementations/64-2023-10-bruch-ermitteln'
import { exercise65 } from './implementations/65-2023-11-wertetabelle-finden'
import { exercise66 } from './implementations/66-2023-12-gleichschenkliges-dreieck-zeichnen'
import { exercise67 } from './implementations/67-2023-13-gleichung-loesen'
import { exercise68 } from './implementations/68-2023-14-zahlen-runden'
import { exercise69 } from './implementations/69-2023-15-volumen-eines-quaders'
import { exercise70 } from './implementations/70-2023-16-schaetzen'
import { exercise71 } from './implementations/71-2023-17-achsenspiegelung'
import { exercise72 } from './implementations/72-2023-18-mias-freigehege'
import { exercise73 } from './implementations/73-2023-19-flaecheninhalt-raute'

export const exercisesData: { [key: number]: Exercise<any> } = {
  1: exercise1,
  2: exercise2,
  3: exercise3,
  4: exercise4,
  5: exercise5,
  6: exercise6,
  7: exercise7,
  8: exercise8,
  9: exercise9,
  10: exercise10,
  11: exercise11,
  12: exercise12,
  13: exercise13,
  14: exercise14,
  15: exercise15,
  16: exercise16,
  17: exercise17,
  18: exercise18,
  19: exercise19,
  20: exercise20,
  21: exercise21,
  22: exercise22,
  23: exercise23,
  24: exercise24,
  25: exercise25,
  26: exercise26,
  27: exercise27,
  28: exercise28,
  29: exercise29,
  32: exercise32,
  33: exercise33,
  // ----
  51: exercise51,
  55: exercise55,
  56: exercise56,
  57: exercise57,
  58: exercise58,
  59: exercise59,
  60: exercise60,
  61: exercise61,
  63: exercise63,
  64: exercise64,
  65: exercise65,
  66: exercise66,
  67: exercise67,
  68: exercise68,
  69: exercise69,
  70: exercise70,
  71: exercise71,
  72: exercise72,
  73: exercise73,
}

// symbols:

// ℚ
// ·
// −
// ×
