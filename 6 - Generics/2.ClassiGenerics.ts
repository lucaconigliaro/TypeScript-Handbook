/*
Le classi possono usare le generics per creare strutture dati riutilizzabili
che funzionano con diversi tipi.
*/

// CLASSE GENERICA
export class Prova<T> {
  private lista: T[] = [];

  aggiungiItem(item: T): void {
    this.lista.push(item);
  }

  rimuoviItem(item: T): void {
    this.lista.splice(this.lista.indexOf(item), 1);
  }

  getItems(): T[] {
    return this.lista;
  }
}

// LISTA DI STRINGHE
const listaStringhe = new Prova<string>();

listaStringhe.aggiungiItem("luca");
listaStringhe.aggiungiItem("marco");
listaStringhe.aggiungiItem("anna");

// listaStringhe.aggiungiItem(123); // ERRORE: solo stringhe!

listaStringhe.rimuoviItem("luca");
// listaStringhe.rimuoviItem(123); // ERRORE: solo stringhe!

console.log(listaStringhe.getItems()); // ["marco", "anna"]

// LISTA DI NUMERI
const listaNumeri = new Prova<number>();

listaNumeri.aggiungiItem(1);
listaNumeri.aggiungiItem(2);
listaNumeri.aggiungiItem(3);

// listaNumeri.aggiungiItem("qwerty"); // ERRORE: solo numeri!

console.log(listaNumeri.getItems()); // [1, 2, 3]

/*
COME FUNZIONA?
Quando creiamo new Prova<string>(), è come se avessimo scritto:

class Prova {
  private lista: string[] = [];
  
  aggiungiItem(item: string): void {
    this.lista.push(item);
  }
  
  rimuoviItem(item: string): void {
    this.lista.splice(this.lista.indexOf(item), 1);
  }
}

Ma invece di creare una classe per stringhe, una per numeri, etc.,
usiamo UNA SOLA classe generica riutilizzabile!
*/

// ALTRO ESEMPIO: STACK GENERICO
export class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }
}

const stackNumeri = new Stack<number>();
stackNumeri.push(10);
stackNumeri.push(20);
stackNumeri.push(30);

console.log(stackNumeri.pop()); // 30
console.log(stackNumeri.peek()); // 20

const stackStringhe = new Stack<string>();
stackStringhe.push("primo");
stackStringhe.push("secondo");

console.log(stackStringhe.pop()); // "secondo"

/*
VANTAGGI DELLE CLASSI GENERICHE
1. RIUTILIZZABILI: una classe per tutti i tipi
2. TYPE-SAFE: TypeScript controlla che usi il tipo corretto
3. FLESSIBILI: funzionano con stringhe, numeri, oggetti, etc.

Invece di avere StackNumber, StackString, StackObject...
abbiamo una sola classe Stack<T> che funziona con tutto!
*/

// ESEMPIO CON OGGETTI
interface Persona {
  nome: string;
  età: number;
}

const listaPersone = new Prova<Persona>();

listaPersone.aggiungiItem({ nome: "Mario", età: 30 });
listaPersone.aggiungiItem({ nome: "Luigi", età: 28 });

console.log(listaPersone.getItems());

/*
NOTE IMPORTANTI
- La classe è generica, ma una volta istanziata diventa specifica
- new Prova<string>() crea una lista SOLO per stringhe
- new Prova<number>() crea una lista SOLO per numeri
- TypeScript fa il controllo dei tipi in fase di compilazione
- Questa è la potenza delle generics: riutilizzabili ma type-safe!
*/
