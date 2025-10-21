/*
L'opzione "target" nel file tsconfig.json è una delle impostazioni più importanti del compilatore TypeScript.
Essa specifica quale versione di JavaScript (ECMAScript) deve essere generata come output dalla compilazione.

Questo è fondamentale perché determina:
- Quali funzionalità JavaScript moderne possono essere usate nel codice compilato
- La compatibilità con browser e ambienti runtime (Node.js, browser vecchi, ecc.)
- Le performance e le dimensioni del codice finale
*/

// SINTASSI NEL tsconfig.json

{
  "compilerOptions": {
    "target": "ES2016"   // oppure ES5, ES6, ES2015, ES2017, ES2018, ES2019, ES2020, ES2021, ES2022, ESNext
  }
}

/*
VALORI COMUNI DI TARGET

ES3 (1999)
- Compatibilità massima, anche con browser molto vecchi
- Non supporta molte funzionalità moderne
- Raramente usato oggi

ES5 (2009)
- Compatibile con la maggior parte dei browser, inclusi IE9-11
- Non supporta arrow functions, let/const, classi native
- Usato per supporto legacy

ES6 / ES2015 (2015)
- Introduce arrow functions, classi, let/const, template literals, promises
- Supportato da tutti i browser moderni
- Buon compromesso tra funzionalità e compatibilità

ES2016, ES2017, ES2018, ES2019, ES2020, ES2021, ES2022
- Versioni incrementali con nuove funzionalità JavaScript
- ES2016: include, exponentiation operator
- ES2017: async/await, Object.entries, Object.values
- ES2018: rest/spread operators, async iteration
- ES2019: flat, flatMap, Object.fromEntries
- ES2020: optional chaining (?.), nullish coalescing (??)
- ES2021: logical assignment operators, replaceAll
- ES2022: top-level await, class fields

ESNext
- Target che punta sempre all'ultima versione proposta di ECMAScript
- Include funzionalità sperimentali non ancora standardizzate
- Usato per testare feature cutting-edge
*/


//ESEMPI PRATICI

// TypeScript originale (con funzionalità moderne)
const saluta = (nome: string): string => {
  return `Ciao, ${nome}!`;
};

// Compilato con target: ES5
var saluta = function (nome) {
  return "Ciao, " + nome + "!";
};

// Compilato con target: ES6
const saluta = (nome) => {
  return `Ciao, ${nome}!`;
};

/*
COME SCEGLIERE IL TARGET GIUSTO

Per applicazioni web moderne (2025):
- target: "ES2020" o "ES2022" - browser moderni, Node.js 14+

Per supporto browser più vecchi:
- target: "ES2015" o "ES2016" - buon compromesso

Per massima compatibilità (legacy):
- target: "ES5" - supporta IE11 e browser datati

Per progetti Node.js:
- target: "ES2020" o superiore - Node.js 14+ supporta queste versioni
*/


// RELAZIONE CON "lib"
// L'opzione "target" influenza anche quali librerie TypeScript includere di default.
// Ad esempio, target: "ES5" non includerà definizioni di tipo per Promise o async/await
// a meno che non si specifichi esplicitamente nell'opzione "lib".

{
  "compilerOptions": {
    "target": "ES5",
    "lib": ["ES2015", "DOM"]  // Aggiunge supporto per Promise anche con target ES5
  }
}

/*
NOTE IMPORTANTI
- Il "target" NON influenza la sintassi TypeScript che puoi usare, solo il JavaScript generato.
- Puoi usare funzionalità TypeScript moderne indipendentemente dal target.
- Per funzionalità non supportate dal target, TypeScript genera codice equivalente (polyfill).
- Target più vecchi generano codice più verboso e potenzialmente più lento.
- È consigliabile usare il target più moderno che il tuo ambiente di destinazione supporta.
- Il target non include automaticamente polyfill per API mancanti (es. Array.prototype.includes in ES5).
- Per polyfill completi, usa librerie come core-js o babel-polyfill.
- La scelta del target impatta le dimensioni del bundle finale dell'applicazione.

Configurare correttamente il target è essenziale per bilanciare compatibilità, performance e dimensioni del codice.
*/
