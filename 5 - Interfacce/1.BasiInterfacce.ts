/*
INTRODUZIONE ALLE INTERFACCE IN TYPESCRIPT

Le interfacce sono uno degli strumenti più potenti di TypeScript per definire contratti
e strutture di dati in modo chiaro e riutilizzabile.

Argomenti trattati:
- Cosa sono le interfacce
- Creare un'interfaccia
- Differenza tra type alias e interfacce
- readonly nelle interfacce
*/

// COSA SONO LE INTERFACCE?
/*
Un'interfaccia è un contratto che definisce la struttura di un oggetto.
Specifica quali proprietà e metodi un oggetto deve avere, senza fornire l'implementazione.
Le interfacce esistono solo a livello di TypeScript e vengono rimosse durante la compilazione.
*/

// CREARE UN'INTERFACCIA
export interface Persona {
  nome: string;
  cognome: string;
  eta: number;
  email?: string; // Proprietà opzionale
}

// Uso dell'interfaccia
const mario: Persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30
};

// INTERFACCIA CON METODI
export interface Prodotto {
  id: number;
  nome: string;
  prezzo: number;
  
  calcolaSconto(percentuale: number): number;
  mostraDettagli(): string;
}

const libro: Prodotto = {
  id: 1,
  nome: "TypeScript Avanzato",
  prezzo: 29.99,
  
  calcolaSconto(percentuale: number): number {
    return this.prezzo * (1 - percentuale / 100);
  },
  
  mostraDettagli(): string {
    return `${this.nome} - €${this.prezzo}`;
  }
};

// DIFFERENZA TRA TYPE ALIAS E INTERFACCE
/*
1. Type Alias usa "type", Interfaccia usa "interface"
2. Le interfacce possono essere estese e implementate
3. Le interfacce possono essere "merged" (dichiarazione multipla)
4. I type alias possono rappresentare tipi primitivi, union, tuple
*/

// Type Alias
export type User = {
  id: number;
  username: string;
};

// Interfaccia (equivalente)
export interface IUser {
  id: number;
  username: string;
}

// Type alias può fare union types
export type Status = "active" | "inactive" | "pending";

// Interfaccia NON può fare union types (questo genera errore)
// export interface IStatus = "active" | "inactive"; // ERRORE

// Declaration Merging: solo con interfacce
export interface Animal {
  nome: string;
}

export interface Animal {
  eta: number;
}

// Le due dichiarazioni si fondono in una:
const cane: Animal = {
  nome: "Fido",
  eta: 5
};

// READONLY NELLE INTERFACCE
export interface Config {
  readonly apiUrl: string;
  readonly maxRetries: number;
  timeout: number; // Modificabile
}

const config: Config = {
  apiUrl: "https://api.example.com",
  maxRetries: 3,
  timeout: 5000
};

// config.apiUrl = "nuovo url"; // Errore: readonly
config.timeout = 10000; // OK: non è readonly

// INTERFACCE NON SUPPORTANO MODIFICATORI DI ACCESSO
// Le interfacce NON possono usare public, private, protected
export interface Account {
  // public username: string; // ERRORE: public non ammesso
  username: string; // Tutto è pubblico per default
  // private password: string; // ERRORE: private non ammesso
}

/*
NOTE IMPORTANTI
- Le interfacce definiscono contratti per la struttura degli oggetti
- Esistono solo a compile-time, vengono rimosse nel JavaScript compilato
- Le interfacce sono preferibili per oggetti e classi
- I type alias sono preferibili per union, tuple e tipi primitivi
- readonly rende le proprietà immutabili dopo l'inizializzazione
- Le interfacce NON supportano modificatori di accesso (public, private, protected)
- Le interfacce supportano declaration merging, i type alias no
*/
