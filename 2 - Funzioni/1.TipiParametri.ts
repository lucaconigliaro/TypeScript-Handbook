/*
Le funzioni sono blocchi di codice riutilizzabili che eseguono operazioni specifiche.
In TypeScript, ogni funzione può avere i tipi dei parametri esplicitamente definiti,
garantendo così che gli argomenti passati siano del tipo corretto,
mentre il tipo di ritorno può essere dichiarato o inferito automaticamente dal compilatore.

I tipi di parametri comuni includono:
- tipizzati esplicitamente, obbligatori
- opzionali con sintassi `?`
- con valori di default
- parametri rest (variabili di lunghezza)

Tipizzare i parametri offre maggiore sicurezza, legibilità e aiuta gli editor a fornire autocompletamenti e controlli.
*/

// Funzione con parametri obbligatori tipizzati
export function somma(a: number, b: number): number {
  return a + b;
}

// Funzione con parametro opzionale
export function saluta(nome: string, saluto?: string): string {
  return `${saluto ?? "Ciao"}, ${nome}!`;
}

// Funzione con parametro con valore di default
export function incrementa(valore: number, step: number = 1): number {
  return valore + step;
}

// Funzione con parametri rest
export function sommaTutti(...numeri: number[]): number {
  return numeri.reduce((acc, cur) => acc + cur, 0);
}

/*
NOTE IMPORTANTI
- Specificare i tipi dei parametri previene errori di tipo a compile time.
- I parametri opzionali permettono flessibilità nel passaggio degli argomenti.
- I valori di default consentono di fornire comportamenti predefiniti senza rendere opzionale il parametro.
- I parametri rest consentono di gestire un numero variabile di argomenti omogenei.
- Il tipo di ritorno migliora la chiarezza e aiuta a evitare errori nell’uso dei risultati della funzione.
- TypeScript offre anche funzionalità avanzate come overload di funzione e parametri generici per casi complessi.

Queste basi aiutano a scrivere funzioni robuste, leggibili e sicure in TypeScript.
*/
