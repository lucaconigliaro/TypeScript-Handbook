/*
TypeScript deve essere compilato in JavaScript per essere eseguito.
Per compilare un intero progetto, serve un file di configurazione chiamato tsconfig.json.
*/

// PASSO 1: Creare il file tsconfig.json
tsc --init

// PASSO 2: Configurare tsconfig.json (esempio base)
{
  "compilerOptions": {
    "target": "ES6",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

// PASSO 3: Compilare il progetto
tsc

// Compilare con ricompilazione automatica
tsc --watch

/*
NOTE IMPORTANTI
- tsconfig.json dice al compilatore come compilare il progetto
- "rootDir" indica dove si trovano i file TypeScript sorgente
- "outDir" indica dove salvare i file JavaScript compilati
- "include" specifica quali file compilare
- "exclude" specifica quali file ignorare
- Il comando "tsc" compila tutto il progetto
- Il comando "tsc --watch" ricompila automaticamente quando modifichi i file
*/
