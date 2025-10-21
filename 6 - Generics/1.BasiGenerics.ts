/*
Le Generics sono uno strumento che mette in relazione più tipi di dati insieme.
Permettono di creare componenti riutilizzabili che funzionano con diversi tipi
mantenendo il controllo dei tipi.

L'idea è: assegnare un tipo generico che cambia in base alle necessità,
ma che permette comunque di applicare limitazioni e controlli dei tipi.
*/

// GENERICS BUILT-IN: ARRAY

// Modo 1: Array con parentesi quadre
const arrayStringa: string[] = ["ciao", "mondo"];

// Modo 2: Array con sintassi generics (formato classico)
const arrayStringhe: Array<string> = ["ciao", "mondo"];

// Array<T> dove T è il tipo generico

// ESEMPIO PRATICO: FUNZIONE CHE CREA ARRAY

// Senza generics (problema: troppo generico)
function creaArrayAny(items: any[]): any[] {
  return new Array().concat(items);
}

const arr1 = creaArrayAny([1, 2, 3, 4]);
// Problema: arr1 è di tipo any[], posso fare qualsiasi cosa
arr1.push("stringa"); // TypeScript non si lamenta!

// Con generics (soluzione)
function creaArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

// TypeScript inferisce automaticamente il tipo
const arrNumeri = creaArray([1, 2, 3, 4]); // tipo: number[]
const arrStringhe = creaArray(["q", "w", "e"]); // tipo: string[]

// Se provo a pushare il tipo sbagliato, errore!
// arrNumeri.push("stringa"); // ERRORE!

// Possiamo anche specificare esplicitamente il tipo
const arrNum = creaArray<number>([1, 2, 3, 4]);
const arrStr = creaArray<string>(["q", "w", "e"]);

/*
PERCHÉ USARE GENERICS?

Questa funzione è GENERICA abbastanza da:
- Accettare qualsiasi tipo di dato
- NON usare "any" che ci farebbe perdere il controllo dei tipi
- Essere SPECIFICA una volta che gli diamo un tipo

Il tipo T è generico, ma una volta passato number, 
tutto diventa number a tutti i livelli!
*/

// PIÙ TIPI GENERICI
function creaArrayDoppio<T, U>(item1: T, item2: U): [T, U] {
  return [item1, item2];
}

const risultato = creaArrayDoppio<string, number>("età", 30);
// tipo: [string, number]

/*
CONSTRAINT: PORRE LIMITI

Possiamo limitare i tipi che una generic può accettare usando "extends"
*/

// T deve essere number o string
function stampa<T extends number | string>(valore: T): T {
  console.log(valore);
  return valore;
}

stampa<number>(123); // OK
stampa<string>("ciao"); // OK
// stampa<boolean>(true); // ERRORE: boolean non soddisfa il vincolo!

/*
NOTE IMPORTANTI
- T è il "Type" generico (convenzione)
- Le generics sono riutilizzabili per diversi tipi
- Mantengono il controllo dei tipi (meglio di "any")
- Puoi avere più tipi generici: <T, U, K>
- extends permette di limitare i tipi accettati
*/
