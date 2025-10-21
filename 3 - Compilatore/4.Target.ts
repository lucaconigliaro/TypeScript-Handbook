/*
L'opzione "target" nel tsconfig.json specifica quale versione di JavaScript
deve essere generata quando compili il codice TypeScript.
*/

{
  "compilerOptions": {
    "target": "ES2020"  // Versione JavaScript di output
  }
}

/*
VERSIONI PIÙ COMUNI NEL 2025

ES5 (2009)
- Per supportare browser vecchi come IE11
- Non supporta arrow functions, let/const, classi

ES6 / ES2015 (2015)
- Supporta arrow functions, classi, let/const, promises
- Compatibile con tutti i browser moderni

ES2017
- Aggiunge async/await

ES2020
- Aggiunge optional chaining (?.) e nullish coalescing (??)
- Raccomandato per progetti moderni

ES2022
- Include le ultime funzionalità
- Ottimo per Node.js 16+ e browser moderni

ESNext
- Sempre l'ultima versione supportata da TypeScript
- Per progetti sperimentali
*/

// Esempio: come cambia il codice compilato

// Codice TypeScript
const saluta = (nome: string) => `Ciao, ${nome}!`;

// Con target: ES5
var saluta = function (nome) { return "Ciao, " + nome + "!"; };

// Con target: ES2020
const saluta = (nome) => `Ciao, ${nome}!`;

/*
COME SCEGLIERE
Browser moderni (2025): ES2020 o ES2022
Node.js 16+: ES2020 o ES2022
Supporto vecchi browser: ES5 o ES2015
*/

/*
NOTE IMPORTANTI
- Puoi scrivere TypeScript moderno indipendentemente dal target
- Target più vecchi generano codice più lungo
- Usa il target più moderno possibile per il tuo ambiente
- Il target influenza solo il JavaScript generato, non la sintassi TypeScript
*/
