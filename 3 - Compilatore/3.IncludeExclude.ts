/*
TypeScript usa "include" e "exclude" nel tsconfig.json per decidere quali file compilare.
node_modules è escluso automaticamente, non serve specificarlo.
*/

// Esempio configurazione base
{
  "compilerOptions": {
    "target": "ES6",
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": [
    "src/**/*"           // Compila tutti i file in src/ e sottocartelle
  ],
  "exclude": [
    "dist",              // Esclude la cartella di output
    "**/*.test.ts",      // Esclude tutti i file di test
    "**/*.spec.ts"       // Esclude tutti i file spec
  ]
}

// Pattern glob supportati:
// * = qualsiasi carattere
// ? = un singolo carattere
// **/ = tutte le sottocartelle

/*
IMPORTANTE: LIMITAZIONE DI exclude
Se un file escluso viene importato da un altro file, verrà compilato comunque!

Esempio:
// tsconfig.json
{ "exclude": ["src/helper.ts"] }

// src/index.ts
import { foo } from './helper';  // helper.ts verrà compilato lo stesso!
*/

/*
NOTE IMPORTANTI
- node_modules è sempre escluso automaticamente
- "include" dice quali file compilare
- "exclude" rimuove file da quelli trovati con "include"
- File importati vengono compilati anche se esclusi
*/
