/*
FUNZIONI COME TIPO DI VARIABILE IN TYPESCRIPT

In TypeScript è possibile definire variabili il cui tipo è una funzione con una specifica firma (signature).
Questo significa che si può descrivere il tipo della funzione in termini di tipi dei parametri e tipo del valore di ritorno,
imponendo che la variabile possa contenere solo funzioni che rispettano quella firma.

Questa funzionalità consente di:
- Tipizzare callback o handler in modo rigoroso.
- Assegnare funzioni diverse a una stessa variabile purché abbiano la stessa firma.
- Migliorare la documentazione e la sicurezza del codice.
*/

// Definire un tipo funzione tramite 'type alias'
export type FunzioneOperazione = (x: number, y: number) => number;

// Variabile di tipo funzione che accetta due numeri e restituisce un numero
export let operazione: FunzioneOperazione;

// Assegnare una funzione conforme alla firma
operazione = function (a, b) {
  return a + b;
};

// Uso della funzione tipizzata
export const risultato = operazione(10, 20);

// Si può anche usare direttamente la dichiarazione della variabile
export let moltiplica: (a: number, b: number) => number = (x, y) => x * y;

/*
NOTE IMPORTANTI
- I nomi dei parametri nelle dichiarazioni di tipo di funzione sono segnaposto e non devono corrispondere necessariamente a quelli della funzione assegnata.
- È obbligatorio indicare il tipo di ritorno della funzione nel tipo variabile per mantenere la coerenza.
- Questo approccio permette di scrivere codice flessibile e robusto, ideale per callback, funzioni di alto ordine e moduli riutilizzabili.
- È possibile combinarlo con overload delle funzioni per definizioni più complesse.

Definire funzioni come tipi di variabile aiuta a sfruttare appieno il sistema di tipi di TypeScript per codice sicuro e leggibile.
*/
