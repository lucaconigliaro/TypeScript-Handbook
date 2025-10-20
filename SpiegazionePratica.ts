/*
TypeScript aggiunge un sistema di tipi opzionale a JavaScript per migliorare la sicurezza e la qualità del codice.

1. Tipizzazione statica:
   I tipi sono assegnati a variabili, parametri e valori di ritorno durante la scrittura del codice,
   così che eventuali errori di tipo vengano segnalati dal compilatore prima dell’esecuzione.

2. Controllo a compile-time:
   TypeScript controlla il codice per assicurarsi che i tipi siano rispettati, prevenendo errori comuni come:
   - Assegnazione di valori non corretti
   - Invocazione di metodi su tipi non definiti
   - Passaggio errato di argomenti a funzioni

3. Compilazione in JavaScript:
   Il codice TypeScript viene compilato in JavaScript standard che può essere eseguito in qualsiasi ambiente JS.
   Durante la compilazione, tutte le informazioni di tipo vengono rimosse.

4. Supporto per intellisense:
   Grazie ai tipi, gli editor e IDE forniscono suggerimenti, autocompletamento e refactoring più precisi.

*/

// Funzione che somma due numeri con tipi espliciti
function somma(a: number, b: number): number {
  return a + b;
}

// Uso corretto
const risultato = somma(3, 7); // risultato = 10

// Uso errato: errore in compilazione perché b è una stringa, non number
// const errore = somma(5, "10"); // Tipo string non assegnabile a number

// Tipi per gli oggetti
interface Persona {
  nome: string;
  eta?: number;
}

const utente: Persona = {
  nome: "Mario",
  eta: 35,
};

// Tentativo errore, manca proprietà "nome"
// const utenteErrato: Persona = { eta: 40 };

// Accesso protetto alle proprietà
console.log(utente.nome.toUpperCase());

/*
NOTE IMPORTANTI
- La tipizzazione migliora la prevenzione dei bug e la documentazione implicita del codice.
- Il controllo a compile-time non influenza la performance runtime.
- TypeScript supporta tipi complessi e avanzati per coprire diversi casi d'uso.
- Puoi iniziare con solo alcune parti tipizzate, migrando gradualmente il codice JS esistente.
*/
