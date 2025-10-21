/*
Il watch mode è una modalità speciale del compilatore TypeScript (tsc) che permette di monitorare automaticamente
i file TypeScript del progetto e ricompilarli ogni volta che vengono rilevate modifiche.

Questo elimina la necessità di eseguire manualmente il comando tsc ogni volta che si modifica il codice,
migliorando drasticamente il flusso di lavoro durante lo sviluppo.

Il watch mode si attiva con il flag --watch o la sua abbreviazione -w.
*/

//COMANDI BASE
// Attivare il watch mode
tsc --watch

// oppure forma abbreviata
tsc -w

// Quando eseguito, il compilatore:
// 1. Compila inizialmente tutti i file TypeScript del progetto
// 2. Rimane attivo in background
// 3. Monitora continuamente i file per rilevare modifiche
// 4. Ricompila automaticamente solo i file modificati


//ESEMPIO DI OUTPUT

$ tsc -w
[12:46:30] Starting compilation in watch mode...
[12:46:32] Found 0 errors. Watching for file changes.

// Dopo una modifica:
[12:47:15] File change detected. Starting incremental compilation...
[12:47:16] Found 0 errors.


/*
COME FUNZIONA INTERNAMENTE
Il watch mode utilizza due strategie di Node.js per monitorare i file:

1. fs.watch (basato su eventi del file system)
   - Più leggero e usa meno CPU
   - Meno affidabile su alcuni sistemi operativi
   - Supporta watch ricorsivo su Windows e macOS, ma non su Linux
   - Usato principalmente per monitorare directory

2. fs.watchFile (basato su polling)
   - Più affidabile e stabile
   - Consuma più cicli CPU perché controlla periodicamente
   - Usato per monitorare singoli file sorgente

TypeScript combina entrambi per ottenere il miglior risultato.
*/


//CONFIGURAZIONE AVANZATA

//Nel file tsconfig.json è possibile configurare il comportamento del watch:

{
  "watchOptions": {
    "watchFile": "useFsEvents",  // o "fixedPollingInterval"
    "watchDirectory": "useFsEvents",
    "fallbackPolling": "dynamicPriority",
    "synchronousWatchDirectory": true,
    "excludeDirectories": ["**/node_modules", "_build"],
    "excludeFiles": ["build/fileWhichChangesOften.ts"]
  }
}

/*
NOTE IMPORTANTI
- Il watch mode monitora solo i file inclusi nel tsconfig.json.
- La compilazione incrementale rende il watch mode molto veloce dopo la prima compilazione.
- Su progetti grandi, il watch mode può raggiungere limiti di sistema operativo sul numero di file monitorabili.
- Il watch mode NON esegue automaticamente il codice compilato, solo lo compila.
- Per riavviare automaticamente l'applicazione Node.js, è necessario combinarlo con nodemon o usare node --watch.
- Premere Ctrl+C per terminare il watch mode.
- È possibile usare librerie come tsc-watch per combinare compilazione e esecuzione automatica.

Il watch mode è uno strumento essenziale per lo sviluppo TypeScript produttivo e veloce.
*/
