/*
outDir E rootDir organizzano i file del progetto TypeScript, separando i sorgenti TypeScript dal codice JavaScript compilato.
*/

// rootDir = dove si trovano i file TypeScript (.ts)
// outDir = dove vanno i file JavaScript compilati (.js)

{
  "compilerOptions": {
    "rootDir": "./src",   // Sorgenti TypeScript in src/
    "outDir": "./dist"    // File compilati in dist/
  }
}

/*
ESEMPIO PRATICO
Struttura PRIMA della compilazione:
MyProject/
├── tsconfig.json
└── src/
    ├── index.ts
    └── utils/
        └── helper.ts

Struttura DOPO la compilazione (tsc):
MyProject/
├── tsconfig.json
├── src/              (file originali TypeScript)
│   ├── index.ts
│   └── utils/
│       └── helper.ts
└── dist/             (file compilati JavaScript)
    ├── index.js
    └── utils/
        └── helper.js

La struttura delle cartelle viene preservata da src/ a dist/
*/

/*
ERRORE COMUNE
Se hai un file .ts fuori da rootDir, TypeScript darà errore:
error TS6059: File 'hello.ts' is not under 'rootDir'

Soluzione: sposta tutti i file .ts dentro src/
*/

// CONFIGURAZIONE RACCOMANDATA
{
  "compilerOptions": {
    "target": "ES2020",
    "rootDir": "./src",
    "outDir": "./dist",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

/*
NOTE IMPORTANTI
- rootDir dice dove sono i sorgenti TypeScript
- outDir dice dove mettere i file compilati
- La struttura delle cartelle viene mantenuta
- Tutti i file .ts devono essere dentro rootDir
- Non serve specificare node_modules in exclude (è automatico)
*/
