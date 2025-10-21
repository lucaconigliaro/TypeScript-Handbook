/*
Oltre alle opzioni base come "target", "include" e "exclude", TypeScript offre molte altre
opzioni di configurazione nel file tsconfig.json che controllano aspetti importanti della compilazione.

Due opzioni particolarmente utili durante lo sviluppo sono:
- **allowJs**: permette di includere file JavaScript nel progetto TypeScript
- **sourceMap**: genera file di source map per facilitare il debugging
*/

// OPZIONE: allowJs
// Permette al compilatore TypeScript di processare anche file JavaScript (.js) oltre ai file TypeScript (.ts).
// Questo è molto utile durante la migrazione graduale da JavaScript a TypeScript.

{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": false    // opzionale: controlla errori anche nei file JS
  }
}

/*
Con allowJs: true
Puoi importare file .js nei tuoi file .ts
import { funzione } from './modulo.js';

Vantaggi:
- Migrazione incrementale da JavaScript a TypeScript
- Riutilizzo di codice JavaScript esistente
- Compilazione mista di file .js e .ts
*/


// OPZIONE: sourceMap
// Genera file .map.js che collegano il codice JavaScript compilato al codice TypeScript originale.
// Questo è essenziale per il debugging, permettendo di vedere e debuggare il codice TypeScript originale
// invece del JavaScript transpilato.

{
  "compilerOptions": {
    "sourceMap": true
  }
}

/*
Con sourceMap: true, per ogni file .ts compilato verrà generato:
- file.js (codice compilato)
- file.js.map (source map)

Come funziona:
- Il browser o debugger legge il file .map
- Mappa le linee di codice JavaScript alle corrispondenti linee TypeScript
- Permette di debuggare direttamente il codice TypeScript originale
*/


// ALTRE OPZIONI UTILI
// 1. **removeComments**
// Rimuove tutti i commenti dal JavaScript compilato, riducendo le dimensioni del file.
{
  "compilerOptions": {
    "removeComments": true
  }
}

// 2. **noEmitOnError**
// Non genera file JavaScript se ci sono errori di compilazione TypeScript.
{
  "compilerOptions": {
    "noEmitOnError": true
  }
}

// 3. **declaration**
// Genera file di dichiarazione .d.ts per ogni file TypeScript, utile per creare librerie.
{
  "compilerOptions": {
    "declaration": true
  }
}

// 4. **outFile**
// Combina tutti i file di output in un unico file JavaScript (solo con alcuni sistemi di moduli).
{
  "compilerOptions": {
    "outFile": "./dist/bundle.js"
  }
}

// 5. **rootDir**
// Specifica la cartella radice dei file sorgente TypeScript.
{
  "compilerOptions": {
    "rootDir": "./src"
  }
}


// ESEMPIO COMPLETO DI CONFIGURAZIONE
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true,              // Genera source maps
    "allowJs": true,                // Permette file JS
    "checkJs": false,               // Non controlla errori nei file JS
    "removeComments": true,         // Rimuove commenti
    "noEmitOnError": true,          // Non compila se ci sono errori
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

/*
NOTE IMPORTANTI
- **sourceMap** è fondamentale per lo sviluppo, ma può essere disabilitato in produzione per ridurre dimensioni.
- I file .map non vengono eseguiti, servono solo ai debugger e browser developer tools.
- **allowJs** con **checkJs: true** fornisce controlli di tipo anche sui file JavaScript usando JSDoc.
- La combinazione di sourceMap e outDir mantiene i source map nella stessa cartella dei file compilati.
- **removeComments** riduce le dimensioni del bundle ma rimuove anche commenti utili per documentazione.
- **noEmitOnError** previene la generazione di file JavaScript potenzialmente errati.
- Per progetti grandi, considera l'uso di **incremental: true** per compilazioni più veloci.
- Le opzioni di configurazione possono essere ereditate usando "extends" da file base condivisi.

Queste opzioni permettono di configurare precisamente il comportamento del compilatore TypeScript
per adattarlo alle specifiche esigenze del progetto e dell'ambiente di sviluppo.
*/
