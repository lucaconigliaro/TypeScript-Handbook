/*
INTERFACCE AVANZATE: EREDITARIETÀ E ABSTRACT

Argomenti trattati:
- Estendere da più interfacce
- Esempio completo con abstract class e interfaces
- Pattern con dispositivi e connettività
*/

// ESTENDERE DA PIÙ INTERFACCE
export interface Identificabile {
  id: number;
}

export interface Nominabile {
  nome: string;
}

export interface Descrittivo {
  descrizione: string;
}

// Un'interfaccia può estendere più interfacce
export interface Articolo extends Identificabile, Nominabile, Descrittivo {
  prezzo: number;
}

const prodotto: Articolo = {
  id: 1,
  nome: "Laptop",
  descrizione: "Portatile ad alte prestazioni",
  prezzo: 999.99
};

// ESEMPIO COMPLETO: DISPOSITIVI CON INTERNET
// Interfaccia per connettività internet
export interface Internet {
  connetti(rete: string): void;
  disconnetti(): void;
  isConnesso(): boolean;
}

// Classe astratta Dispositivo
export abstract class Dispositivo {
  constructor(
    public marca: string,
    public modello: string,
    protected acceso: boolean = false
  ) {}

  accendi(): void {
    this.acceso = true;
    console.log(`${this.marca} ${this.modello} acceso`);
  }

  spegni(): void {
    this.acceso = false;
    console.log(`${this.marca} ${this.modello} spento`);
  }

  // Metodo astratto da implementare nelle classi figlie
  abstract getInfo(): string;
}

// Telefono implementa Internet
export class Telefono extends Dispositivo implements Internet {
  private connesso: boolean = false;

  constructor(marca: string, modello: string, public numero: string) {
    super(marca, modello);
  }

  connetti(rete: string): void {
    this.connesso = true;
    console.log(`${this.modello} connesso a ${rete}`);
  }

  disconnetti(): void {
    this.connesso = false;
    console.log(`${this.modello} disconnesso`);
  }

  isConnesso(): boolean {
    return this.connesso;
  }

  getInfo(): string {
    return `Telefono ${this.marca} ${this.modello} - ${this.numero}`;
  }

  chiama(numero: string): void {
    console.log(`Chiamando ${numero}...`);
  }
}

// Smartphone estende Telefono (eredita già Internet)
export class Smartphone extends Telefono {
  constructor(
    marca: string,
    modello: string,
    numero: string,
    public sistemaOperativo: string
  ) {
    super(marca, modello, numero);
  }

  getInfo(): string {
    return `Smartphone ${this.marca} ${this.modello} - OS: ${this.sistemaOperativo}`;
  }

  installaApp(nomeApp: string): void {
    console.log(`Installando ${nomeApp}...`);
  }
}

// Computer implementa Internet
export class Computer extends Dispositivo implements Internet {
  private connesso: boolean = false;

  constructor(marca: string, modello: string, public ram: number) {
    super(marca, modello);
  }

  connetti(rete: string): void {
    this.connesso = true;
    console.log(`Computer connesso a ${rete}`);
  }

  disconnetti(): void {
    this.connesso = false;
    console.log(`Computer disconnesso`);
  }

  isConnesso(): boolean {
    return this.connesso;
  }

  getInfo(): string {
    return `Computer ${this.marca} ${this.modello} - RAM: ${this.ram}GB`;
  }
}

// Uso degli oggetti
const iphone = new Smartphone("Apple", "iPhone 15", "+39123456789", "iOS");
iphone.accendi();
iphone.connetti("WiFi Casa");
console.log(iphone.getInfo());
iphone.installaApp("WhatsApp");

const pc = new Computer("Dell", "XPS 15", 32);
pc.accendi();
pc.connetti("Ethernet");
console.log(pc.getInfo());

// Funzione che accetta qualsiasi dispositivo con Internet
function verificaConnessione(dispositivo: Internet): void {
  if (dispositivo.isConnesso()) {
    console.log("Dispositivo connesso a internet");
  } else {
    console.log("Dispositivo offline");
  }
}

verificaConnessione(iphone);
verificaConnessione(pc);

/*
NOTE IMPORTANTI
- Un'interfaccia può estendere più interfacce con "extends"
- Le classi astratte definiscono implementazioni parziali
- Le interfacce definiscono solo contratti senza implementazione
- Combina abstract class per logica condivisa + interface per contratti
- Le classi figlie ereditano le interfacce implementate dal padre
- Le interfacce permettono polimorfismo: oggetti diversi con stessa interfaccia
- Usa interfacce per definire capability comuni (es. Internet, Stampabile, etc.)
*/
