/*
Oltre a target, include ed exclude, ci sono altre opzioni utili in tsconfig.json.
*/

// 1. allowJs - Permette di usare file JavaScript nel progetto TypeScript
{
  "compilerOptions": {
    "allowJs": true,      // Compila anche file .js
    "checkJs": false      // Non controlla errori nei file JS
  }
}
// Utile per migrare gradualmente da JavaScript a TypeScript

// 2. sourceMap - Crea file .map per debuggare il codice TypeScript originale
{
  "compilerOptions": {
    "sourceMap": true     // Genera file .js.map per debugging
  }
}
// Essenziale durante lo sviluppo per vedere errori nel codice TS invece che JS

// 3. removeComments - Rimuove i commenti dal codice compilato
{
  "compilerOptions": {
    "removeComments": true  // Riduce dimensioni file
  }
}

// 4. noEmitOnError - Non compila se ci sono errori
{
  "compilerOptions": {
    "noEmitOnError": true   // Previene file JS con errori
  }
}

// ESEMPIO CONFIGURAZIONE COMPLETA
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true,
    "allowJs": true,
    "removeComments": true,
    "noEmitOnError": true,
    "strict": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

/*
NOTE IMPORTANTI
- sourceMap: fondamentale per debugging, disabilitalo in produzione
- allowJs: utile per migrare progetti da JavaScript a TypeScript
- removeComments: riduce dimensioni ma rimuove anche commenti utili
- noEmitOnError: previene la generazione di codice con errori
*/
