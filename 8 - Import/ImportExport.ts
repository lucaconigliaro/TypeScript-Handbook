/*
Quando il codice diventa grande, dobbiamo organizzarlo in più file.
Gli import/export ci permettono di dividere logicamente l'applicazione.

PERCHÉ USARE FILE MULTIPLI?
- Organizzazione del codice
- Separazione delle responsabilità
- Codice più leggibile e manutenibile
- Riutilizzo di funzioni/classi in più punti
*/

// ========================================
// FILE: functions.ts (file esterno)
// ========================================

export function addizione(x: number, y: number): number {
  return x + y;
}

export function sottrazione(x: number, y: number): number {
  return x - y;
}

export function moltiplicazione(x: number, y: number): number {
  return x * y;
}

// ========================================
// FILE: Persona.ts (file esterno)
// ========================================

export class Persona2 {
  constructor(public nome: string) {}

  saluta(): void {
    console.log("Ciao, sono una persona");
  }
}

// ========================================
// FILE: app.ts (file principale)
// ========================================

// IMPORTARE SINGOLE FUNZIONI
import { addizione, sottrazione, moltiplicazione } from "./functions.js";

// ATTENZIONE: Importiamo da .js NON da .ts!
// TypeScript compila i file .ts in .js, quindi importiamo dal compilato

console.log(addizione(5, 5));        // 10
console.log(sottrazione(5, 5));      // 0
console.log(moltiplicazione(5, 5));  // 25

// IMPORTARE CLASSI
import { Persona } from "./Persona.js";

const persona1 = new Persona("Mario");
persona1.saluta(); // "Ciao, sono una persona"

/*
EXPORT: DUE MODI

1. Export inline (come sopra):
export function nomeFunzione() { }
export class NomeClasse { }

2. Export alla fine del file:
function addizione() { }
function sottrazione() { }

export { addizione, sottrazione };
*/

/*
CONFIGURAZIONE NECESSARIA

1. tsconfig.json:
{
  "compilerOptions": {
    "target": "ES2022",     // o ES6
    "module": "ES6"         // NON "commonjs"!
  }
}

2. index.html:
<script src="app.js" type="module"></script>
                          ^^^^^^^^^^^
                          IMPORTANTE!

Senza type="module" gli import non funzionano nel browser!
*/

/*
IMPORTARE DA .js NON DA .ts

Quando importi, scrivi sempre .js anche se il file sorgente è .ts:

✅ Corretto:
import { Persona } from "./Persona.js";

❌ Sbagliato:
import { Persona } from "./Persona.ts";

Perché? TypeScript compila .ts → .js
Il browser esegue i file .js compilati, non i .ts originali!
*/

/*
IMPORT PARZIALE

Puoi importare solo ciò che ti serve:

import { addizione } from "./functions.js";
// Importi solo addizione, non le altre funzioni

import { addizione, sottrazione } from "./functions.js";
// Importi solo addizione e sottrazione
*/

/*
ORGANIZZAZIONE TIPICA

src/
├── app.ts              (file principale)
├── functions.ts        (utilità/funzioni)
├── Persona.ts          (classe Persona)
├── models/
│   ├── User.ts
│   └── Product.ts
└── utils/
    └── helpers.ts

Ogni file ha la sua responsabilità specifica!
*/

/*
CON BUNDLER (Webpack, Vite, ecc.)
Se usi Angular, React, o altri framework moderni, hanno bundler integrati.
I bundler:
- Combinano tutti i file in un unico bundle
- Gestiscono automaticamente gli import
- Non serve type="module" nell'HTML
- Il processo è automatizzato

Ma per progetti TypeScript puri (senza framework), serve la configurazione
che abbiamo visto sopra.
*/

/*
NOTE IMPORTANTI
- Usa export per rendere visibile funzioni/classi da altri file
- Usa import per utilizzare codice da file esterni
- Importa sempre da .js (file compilato) non da .ts
- Aggiungi "module": "ES6" nel tsconfig.json
- Aggiungi type="module" nello script HTML
- Organizza il codice in file logici e separati
- In Angular/React questo è gestito automaticamente dai bundler
*/
