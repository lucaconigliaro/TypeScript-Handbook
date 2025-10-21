/*
MODIFICATORI DI ACCESSO E SHORTHAND IN TYPESCRIPT

I modificatori di accesso controllano la visibilità delle proprietà e metodi.

Argomenti trattati:
- public: accessibile ovunque (default)
- private: accessibile solo all'interno della classe
- protected: accessibile nella classe e nelle classi figlie
- shorthand costruttore
- readonly: proprietà non modificabili dopo inizializzazione
*/

// MODIFICATORI DI ACCESSO
export class BankAccount {
  public titolare: string;         // Accessibile ovunque
  private saldo: number;            // Solo dentro la classe
  protected numeroConto: string;    // Classe e classi figlie

  constructor(titolare: string, saldoIniziale: number) {
    this.titolare = titolare;
    this.saldo = saldoIniziale;
    this.numeroConto = this.generaNumeroConto();
  }

  // Metodo pubblico
  public deposita(importo: number): void {
    this.saldo += importo;
  }

  // Metodo privato (solo interno)
  private generaNumeroConto(): string {
    return `IT${Math.random().toString().slice(2, 11)}`;
  }

  // Getter per accedere a proprietà private
  public getSaldo(): number {
    return this.saldo;
  }
}

const conto = new BankAccount("Mario", 1000);
conto.deposita(500);
console.log(conto.titolare); // OK
// console.log(conto.saldo); // Errore: private
console.log(conto.getSaldo()); // OK: 1500

// SHORTHAND COSTRUTTORE
export class Prodotto {
  // Definizione e assegnazione in un colpo solo
  constructor(
    public nome: string,
    public prezzo: number,
    private codice: string
  ) {}

  mostraInfo(): string {
    return `${this.nome}: €${this.prezzo}`;
  }
}

// Equivalente a dichiarare le proprietà e assegnarle nel costruttore

// READONLY - proprietà non modificabili
export class Config {
  readonly apiUrl: string;
  readonly maxRetries: number;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
    this.maxRetries = 3;
  }

  // Non posso modificare readonly dopo il costruttore
  // cambiaUrl(): void {
  //   this.apiUrl = "nuovo"; // Errore!
  // }
}

// COMBINAZIONE SHORTHAND + READONLY
export class User {
  constructor(
    public readonly id: number,
    public username: string,
    private password: string
  ) {}
}

const user = new User(1, "mario", "secret");
// user.id = 2; // Errore: readonly

/*
NOTE IMPORTANTI
- public: default, accessibile ovunque
- private: solo all'interno della classe
- protected: nella classe e nelle sottoclassi
- Shorthand costruttore risparmia codice dichiarando e assegnando insieme
- readonly rende una proprietà immutabile dopo l'inizializzazione
- Combinare modificatori: "public readonly", "private readonly"
*/
