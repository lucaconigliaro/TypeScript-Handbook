/*
Le opzioni "outDir" e "rootDir" nel file tsconfig.json sono fondamentali per organizzare
la struttura dei file di un progetto TypeScript, separando il codice sorgente dal codice compilato.

- **rootDir**: specifica la cartella radice dei file sorgente TypeScript
- **outDir**: specifica la cartella di destinazione per i file JavaScript compilati

Queste opzioni lavorano insieme per mantenere una struttura pulita e ordinata del progetto.
*/


// ROOTDIR: CARTELLA RADICE DEI SORGENTI
// rootDir definisce la directory radice contenente i file sorgente TypeScript.
// TypeScript usa questa impostazione per determinare la struttura delle directory nell'output.
{
  "compilerOptions": {
    "rootDir": "./src"
  }
}

/*
**Comportamento predefinito:**
Se non specificato, TypeScript deduce automaticamente il rootDir come il percorso comune più lungo
di tutti i file non-declaration (.ts, non .d.ts) inclusi nella compilazione.

**Importante**: rootDir NON influenza QUALI file vengono compilati.
Non ha interazione con "include", "exclude" o "files".
Serve solo a determinare la struttura delle directory nell'output.
*/


// OUTDIR: CARTELLA DI DESTINAZIONE COMPILATI
// outDir specifica dove TypeScript deve scrivere i file JavaScript compilati.
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}

// TypeScript replica la struttura delle directory da rootDir a outDir,
// mantenendo l'organizzazione dei file sorgente.


/*
ESEMPIO PRATICO STRUTTURA PROGETTO
Struttura sorgente:

MyProject/
├── tsconfig.json
├── src/
│   ├── index.ts
│   ├── utils/
│   │   ├── helper.ts
│   │   └── validator.ts
│   └── models/
│       └── user.ts
*/

// Configurazione tsconfig.json:
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}

/*
Dopo compilazione (tsc):

MyProject/
├── tsconfig.json
├── src/
│   └── ... (file TypeScript originali)
├── dist/
│   ├── index.js
│   ├── utils/
│   │   ├── helper.js
│   │   └── validator.js
│   └── models/
│       └── user.js

La struttura delle directory viene preservata da src/ a dist/.
*/

/*
CASO SENZA rootDir SPECIFICATO

Senza rootDir, TypeScript deduce il percorso comune più lungo.

Esempio problematico:

MyProject/
├── tsconfig.json
├── core/
│   ├── a.ts
│   ├── b.ts
│   └── sub/
│       └── c.ts
├── types.d.ts


Con solo `"outDir": "./dist"` (senza rootDir):

MyProject/
├── dist/
│   ├── a.js        // core/ viene omesso!
│   ├── b.js
│   └── sub/
│       └── c.js

--- 

Con `"rootDir": "."`:
MyProject/
├── dist/
│   ├── core/       // core/ viene preservato
│   │   ├── a.js
│   │   ├── b.js
│   │   └── sub/
│   │       └── c.js

*/

/*
ERRORI COMUNI E SOLUZIONI

**Errore: File fuori da rootDir**
```
error TS6059: File 'hello.ts' is not under 'rootDir' './src'.
'rootDir' is expected to contain all source files.
```

Struttura che causa l'errore:
MyProject/
├── src/
│   └── index.ts
├── hello.ts        // Fuori da rootDir!
└── tsconfig.json

**Soluzione 1**: Spostare hello.ts dentro src/
**Soluzione 2**: Cambiare rootDir a "."
**Soluzione 3**: Usare "include" per specificare solo src/
*/
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src/**/*"]  // Compila solo file in src/
}


// CONFIGURAZIONE COMPLETA RACCOMANDATA
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",           // Sorgenti in src/
    "outDir": "./dist",           // Output in dist/
    "strict": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "removeComments": true
  },
  "include": ["src/**/*"],        // Include solo src/
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}

/*
NOTE IMPORTANTI
- **rootDir** e **outDir** sono indipendenti ma complementari.
- TypeScript NON scriverà MAI un file fuori da outDir.
- La struttura delle directory viene sempre preservata da rootDir a outDir.
- rootDir non filtra i file da compilare, usa "include"/"exclude" per quello.
- Se un file deve essere compilato ma è fuori da rootDir, TypeScript genera errore.
- outDir può essere dentro o fuori il progetto (comune: ./dist, ./build, ./out).
- È buona pratica escludere outDir dall'include per evitare loop di compilazione.
- Usare sempre paths relativi per portabilità tra sistemi operativi.
- Con sourceMap: true, anche i file .map vengono scritti in outDir.

La corretta configurazione di rootDir e outDir mantiene il progetto organizzato,
facilita il deployment e migliora la separazione tra codice sorgente e compilato.
*/
