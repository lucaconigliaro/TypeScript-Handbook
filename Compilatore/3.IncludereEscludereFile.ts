/*
TypeScript permette di controllare quali file devono essere compilati usando le proprietà
"include" e "exclude" nel file tsconfig.json.

Questo è fondamentale per gestire progetti complessi, evitando di compilare file non necessari
come test, configurazioni, o dipendenze esterne.

NOTA IMPORTANTE: node_modules è escluso di default, quindi non è necessario specificarlo
esplicitamente nell'array "exclude" (anche se molti sviluppatori lo fanno per chiarezza).
*/

// SINTASSI INCLUDE
// La proprietà "include" specifica quali file devono essere inclusi nella compilazione.
// Usa pattern glob per identificare i file.

{
  "include": [
    "src/**/*"           // Tutti i file nella cartella src e sottocartelle
  ]
}

// Glob patterns supportati:
// - * : corrisponde a zero o più caratteri (escluso il separatore di directory)
// - ? : corrisponde a un singolo carattere (escluso il separatore di directory)
// - **/ : corrisponde a qualsiasi directory nested ricorsivamente


// SINTASSI EXCLUDE
// La proprietà "exclude" specifica quali file devono essere esclusi dalla compilazione.
// È importante sapere che "exclude" agisce SOLO sui file identificati da "include".
{
  "exclude": [
    "node_modules",      // Escluso di default
    "dist",              // Cartella di output
    "test/**/*",         // Tutti i file di test
    "**/*.spec.ts"       // Tutti i file che terminano con .spec.ts
  ]
}


// ESEMPIO COMPLETO DI CONFIGURAZIONE
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  },
  "include": [
    "src/**/*"           // Compila tutti i file in src/
  ],
  "exclude": [
    "node_modules",      // Escluso di default (opzionale specificarlo)
    "dist",              // Cartella output
    "src/**/*.test.ts",  // File di test
    "src/**/*.spec.ts"   // File spec
  ]
}

/*
COMPORTAMENTO PREDEFINITO
Se "include" e "exclude" NON sono specificati:
- TypeScript compila tutti i file .ts, .tsx, .d.ts nella directory e sottodirectory
- node_modules è automaticamente escluso
- Anche le cartelle specificate in "outDir" sono escluse

Se solo "include" è specificato:
- Vengono compilati solo i file che corrispondono ai pattern di "include"
- node_modules rimane escluso di default
*/

// LIMITAZIONI IMPORTANTI DI "exclude"
// "exclude" ha una limitazione importante: un file escluso può comunque essere incluso
// nella compilazione se viene importato da un altro file incluso nel progetto.

Esempio:
// tsconfig.json
{
  "exclude": ["src/test.ts"]
}



// src/index.ts
import { foo } from './test';  // test.ts verrà compilato comunque!

// Questo perché "exclude" agisce solo sulla scoperta automatica dei file,
// ma non blocca i file referenziati tramite import, require, o triple-slash directives.

/*
NOTE IMPORTANTI
- node_modules è escluso di default, non serve specificarlo (ma è comune farlo per chiarezza).
- "exclude" non impedisce la compilazione di file importati esplicitamente nel codice.
- I pattern glob sono case-sensitive su sistemi Unix/Linux.
- Se specifichi "files" (array esplicito di file), "include" viene ignorato.
- È possibile combinare "include" e "exclude" per controllo fine-grained sui file.
- La proprietà "files" permette di specificare una lista esplicita di file (utile per progetti piccoli).
- Per escludere veramente file dalla compilazione anche se importati, non includerli nelle dipendenze.

Configurare correttamente "include" e "exclude" ottimizza i tempi di compilazione ed evita errori indesiderati.
*/