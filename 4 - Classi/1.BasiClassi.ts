/*
INTRODUZIONE ALLE CLASSI IN TYPESCRIPT: BASI E COSTRUTTORI

Le classi sono template per creare oggetti con proprietà e metodi.
TypeScript aggiunge tipizzazione statica alle classi JavaScript.

Argomenti trattati:
- Creare una classe
- Aggiungere proprietà
- Creare costruttore con parametri
- Metodi con tipi di dati
*/

// CREARE UNA CLASSE BASE
export class Persona {
  // Dichiarazione proprietà con tipo
  nome: string;
  eta: number;

  // COSTRUTTORE CON PARAMETRI
  constructor(nome: string, eta: number) {
    this.nome = nome;
    this.eta = eta;
  }

  // METODO CON TIPO DI RITORNO
  saluta(): string {
    return `Ciao, sono ${this.nome}`;
  }

  // METODO CON PARAMETRO E TIPO DI RITORNO
  compieAnni(): void {
    this.eta++;
    console.log(`Ora ho ${this.eta} anni`);
  }
}

// Creare istanza
const mario = new Persona("Mario", 30);
console.log(mario.saluta());

// AGGIUNGERE PROPRIETÀ
export class Auto {
  marca: string;
  modello: string;
  anno: number;
  km: number;

  constructor(marca: string, modello: string, anno: number) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.km = 0; // Proprietà con valore iniziale
  }

  aggiungiKm(kmPercorsi: number): number {
    this.km += kmPercorsi;
    return this.km;
  }
}

/*
NOTE IMPORTANTI
- Le proprietà si dichiarano prima del costruttore con il loro tipo
- Il costruttore si chiama "constructor" e viene eseguito con "new"
- I metodi sono funzioni definite nella classe
- Specificare sempre i tipi di parametri e ritorno dei metodi
- "this" si riferisce all'istanza corrente della classe
*/
