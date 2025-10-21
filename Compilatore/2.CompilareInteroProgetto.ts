/*
Per compilare un intero progetto TypeScript è necessario prima configurare il progetto
creando un file tsconfig.json che definisce le opzioni di compilazione e i file da includere.

Il comando principale per inizializzare un progetto TypeScript e compilarlo è:
- tsc --init: crea un file tsconfig.json con configurazioni di default
- tsc: compila tutti i file del progetto secondo le impostazioni di tsconfig.json
*/

// PASSO 1: INIZIALIZZARE IL PROGETTO
// Creare il file tsconfig.json
tsc --init

// Questo comando genera un file tsconfig.json con le configurazioni standard commentate.
// Il file include opzioni comuni come:
// - target: versione JavaScript di output (es. ES6, ES2020)
// - module: sistema di moduli (commonjs, es6, etc.)
// - outDir: cartella di output per i file compilati
// - rootDir: cartella radice dei file sorgente
// - strict: abilita controlli rigorosi
// - esModuleInterop: compatibilità con moduli ES


// PASSO 2: CONFIGURARE tsconfig.json

// Esempio di configurazione base
{
  "compilerOptions": {
    "target": "ES6",                    // Versione JavaScript di output
    "module": "commonjs",               // Sistema di moduli
    "outDir": "./dist",                 // Cartella di output
    "rootDir": "./src",                 // Cartella sorgenti
    "strict": true,                     // Controlli di tipo rigorosi
    "esModuleInterop": true,            // Compatibilità moduli ES
    "skipLibCheck": true,               // Salta controllo file .d.ts
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],              // File da compilare
  "exclude": ["node_modules", "dist"]   // File da escludere
}



// PASSO 3: COMPILARE L'INTERO PROGETTO
// Compilare tutti i file del progetto
tsc

// Questo comando:
// 1. Legge il file tsconfig.json
// 2. Trova tutti i file TypeScript in base a "include" e "exclude"
// 3. Compila tutti i file nella cartella di output specificata
// 4. Crea la struttura di directory corrispondente in outDir



// COMANDI UTILI
// Compilare in watch mode (ricompila automaticamente)
tsc --watch

// Compilare con output pulito (rimuove file generati precedentemente)
tsc --build --clean

// Compilare mostrando output verboso
tsc --verbose

// Compilare solo se ci sono modifiche (build incrementale)
tsc --incremental


/*
NOTE IMPORTANTI
- tsconfig.json è essenziale per gestire progetti TypeScript strutturati e complessi.
- L'opzione "include" definisce quali file compilare, di default compila tutti i .ts nella directory.
- L'opzione "exclude" permette di escludere cartelle come node_modules o test.
- L'output viene generato nella cartella specificata in "outDir", mantenendo la struttura delle directory.
- È possibile avere più file tsconfig.json per diverse configurazioni (es. tsconfig.build.json, tsconfig.test.json).
- Il comando "tsc" senza argomenti compila l'intero progetto basandosi su tsconfig.json.
- L'opzione "--incremental" velocizza le compilazioni successive mantenendo uno stato della build.
- Per progetti grandi è consigliabile usare "composite" projects per compilazioni modulari.

La configurazione corretta di tsconfig.json e l'uso appropriato di tsc sono fondamentali per un workflow di sviluppo TypeScript efficiente e scalabile.
*/
