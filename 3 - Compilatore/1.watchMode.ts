/*
Il watch mode è una funzionalità del compilatore TypeScript che ricompila automaticamente
i file quando vengono modificati, senza doverlo fare manualmente ogni volta.
*/

// Attivare il watch mode
tsc --watch

// oppure versione abbreviata
tsc -w

// Cosa fa:
// 1. Compila tutti i file TypeScript del progetto
// 2. Rimane attivo in background
// 3. Monitora i file per cambiamenti
// 4. Ricompila automaticamente quando salvi un file

// Esempio di output
// [12:46:30] Starting compilation in watch mode...
// [12:46:32] Found 0 errors. Watching for file changes.
// 
// [12:47:15] File change detected. Starting incremental compilation...
// [12:47:16] Found 0 errors.

/*
NOTE IMPORTANTI
- Il watch mode compila il codice ma NON lo esegue automaticamente
- Per fermare il watch mode premi Ctrl+C
- Monitora solo i file specificati nel tsconfig.json
- Per eseguire automaticamente il codice compilato usa nodemon o node --watch
- È essenziale durante lo sviluppo per avere feedback immediato
*/
