/*
TIPO DI RITORNO DELLE FUNZIONI IN TYPESCRIPT

In TypeScript, è possibile dichiarare esplicitamente il tipo che una funzione restituisce.
Questo aiuta a prevenire errori, a chiarire l’intento della funzione, e permette agli strumenti di sviluppo
di fornire suggerimenti più accurati.

Se non viene indicato il tipo di ritorno, TypeScript prova a inferirlo automaticamente analizzando il codice.
*/

// Tipo di ritorno esplicito: number
export function somma(a: number, b: number): number {
  return a + b;
}

// Tipo di ritorno inferito (stringa)
export function saluta(nome: string) {
  return `Ciao, ${nome}!`;
  // TypeScript inferisce string
}

// Funzione che non restituisce nulla (void)
export function logMessaggio(messaggio: string): void {
  console.log(messaggio);
}

// Funzione che non ritorna mai (never), ad esempio perché lancia eccezione o loop infinito
export function lanciaErrore(messaggio: string): never {
  throw new Error(messaggio);
}

/*
NOTE IMPORTANTI
- Specificare il tipo di ritorno migliora la leggibilità e intercettazione precoce di errori.
- Il tipo void indica funzioni che non ritornano valori utili (procedure).
- Il tipo never indica funzioni che non terminano mai normalmente (es. errori fatali o loop infiniti).
- L’inferenza automatica funziona bene, ma è buona pratica indicare esplicitamente il tipo di ritorno per le API pubbliche o funzioni complesse.
- Questo supporta la documentazione automatica e facilita manutenzione e refactoring.

Il controllo rigoroso sul tipo di ritorno è una fondamentale caratteristica di TypeScript per scrivere codice robusto e manutenibile.
*/
