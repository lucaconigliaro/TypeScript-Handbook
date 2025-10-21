/*
CLASSI AVANZATE: STATIC, ABSTRACT E SINGLETON

Argomenti trattati:
- Proprietà e metodi static
- Classi astratte
- Pattern Singleton con costruttore private
*/

// PROPRIETÀ E METODI STATIC
export class MathUtils {
  // Proprietà static: condivisa tra tutte le istanze
  static PI: number = 3.14159;

  // Metodo static: chiamato sulla classe, non sull'istanza
  static areaCircolo(raggio: number): number {
    return this.PI * raggio * raggio;
  }

  static quadrato(n: number): number {
    return n * n;
  }
}

// Uso senza creare istanza
console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.areaCircolo(5)); // 78.54
console.log(MathUtils.quadrato(4)); // 16

// CLASSI ASTRATTE
// Non possono essere istanziate direttamente, solo estese
export abstract class Forma {
  constructor(public colore: string) {}

  // Metodo astratto: deve essere implementato dalle classi figlie
  abstract calcolaArea(): number;

  // Metodo concreto: può essere usato dalle classi figlie
  public descrivi(): string {
    return `Forma di colore ${this.colore}`;
  }
}

export class Cerchio extends Forma {
  constructor(colore: string, public raggio: number) {
    super(colore);
  }

  // Implementazione obbligatoria del metodo astratto
  calcolaArea(): number {
    return Math.PI * this.raggio * this.raggio;
  }
}

export class Rettangolo extends Forma {
  constructor(colore: string, public larghezza: number, public altezza: number) {
    super(colore);
  }

  calcolaArea(): number {
    return this.larghezza * this.altezza;
  }
}

// const forma = new Forma("rosso"); // Errore: classe astratta
const cerchio = new Cerchio("blu", 10);
console.log(cerchio.calcolaArea());

// SINGLETON PATTERN
// Garantisce che esista una sola istanza della classe
export class Database {
  // Istanza statica privata
  private static instance: Database;

  // Costruttore privato: impedisce "new Database()"
  private constructor(public connectionString: string) {
    console.log("Database connesso");
  }

  // Metodo statico per ottenere l'istanza unica
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database("mongodb://localhost:27017");
    }
    return Database.instance;
  }

  public query(sql: string): void {
    console.log(`Eseguendo: ${sql}`);
  }
}

// Uso del Singleton
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true: stessa istanza

// const db3 = new Database("..."); // Errore: costruttore privato

/*
NOTE IMPORTANTI
- static: proprietà/metodi appartengono alla classe, non alle istanze
- Si accede ai membri static tramite il nome della classe (es. MathUtils.PI)
- abstract: classi che non possono essere istanziate, solo estese
- Metodi astratti devono essere implementati dalle classi figlie
- Singleton: pattern che garantisce una sola istanza globale
- Costruttore private impedisce la creazione di istanze con "new"
- getInstance() crea l'istanza solo la prima volta, poi la riusa
*/
