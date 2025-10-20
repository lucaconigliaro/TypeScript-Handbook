/*
INFERENCE NEI PARAMETRI DI DEFAULT IN TYPESCRIPT

TypeScript ha una potente funzionalità di inference che permette di dedurre automaticamente il tipo
di un parametro di funzione quando questo ha un valore di default. In questi casi il compilatore
assegna al parametro il tipo del valore di default, riducendo la necessità di specificare esplicitamente il tipo.

Questo rende il codice più conciso mantenendo la sicurezza tipizzata.
*/

export function moltiplica(a: number, b = 2) {
  // b è inferito come number grazie al valore di default 2
  return a * b;
}

// Qui TypeScript capisce che `b` è number e quindi
// passare valori di tipo diverso da number genera errore
moltiplica(5, '3'); // errore

/*
CASI AVANZATI

Quando si usa un tipo generico con parametro di default, l'inferenza può complicarsi 
e si potrebbero ottenere errori se il default non è compatibile con il tipo generico. 
*/
// Ad esempio:

function identity<T = string>(value: T = "default" as T): T {
  return value;
}

//In questo modo si dichiara un tipo generico con valore di default a string e un valore di default coerente col tipo generico.

/*
NOTE IMPORTANTI
- L'inference basata sul valore di default è molto utile per ridurre boilerplate.
- Tuttavia, in casi complessi con generici o overload, può essere necessario specificare tipi espliciti.
- TypeScript verifica che il valore di default sia compatibile col tipo del parametro.
- L'inference contribuisce a prevenire errori di tipo mantenendo il codice pulito e leggibile.
- È buona pratica bilanciare l'uso di tipi espliciti e inference per chiarezza e manutenzione.

Questa funzionalità migliora notevolmente la scrittura di funzioni leggere e sicure in TypeScript.
*/
