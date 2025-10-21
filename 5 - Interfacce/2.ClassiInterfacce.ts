/*
CLASSI E INTERFACCE: IMPLEMENTS

Le classi possono implementare interfacce, garantendo che rispettino
un determinato contratto definito dall'interfaccia.

Argomenti trattati:
- class implements interface
- Implementare più interfacce
*/

// INTERFACCIA BASE
export interface Volante {
  vola(): void;
  atterra(): void;
}

// CLASSE CHE IMPLEMENTA L'INTERFACCIA
export class Aereo implements Volante {
  constructor(public modello: string) {}

  // Deve implementare tutti i metodi dell'interfaccia
  vola(): void {
    console.log(`${this.modello} sta volando`);
  }

  atterra(): void {
    console.log(`${this.modello} sta atterrando`);
  }

  // Può avere metodi aggiuntivi
  rifornimento(): void {
    console.log("Rifornimento in corso");
  }
}

const boeing = new Aereo("Boeing 747");
boeing.vola();

// IMPLEMENTARE PIÙ INTERFACCE
export interface Nuotante {
  nuota(): void;
}

export interface Camminante {
  cammina(): void;
}

// Classe che implementa entrambe le interfacce
export class Anatra implements Volante, Nuotante, Camminante {
  constructor(public nome: string) {}

  vola(): void {
    console.log(`${this.nome} vola`);
  }

  atterra(): void {
    console.log(`${this.nome} atterra`);
  }

  nuota(): void {
    console.log(`${this.nome} nuota`);
  }

  cammina(): void {
    console.log(`${this.nome} cammina`);
  }
}

const paperina = new Anatra("Paperina");
paperina.vola();
paperina.nuota();
paperina.cammina();

// INTERFACCIA CON PROPRIETÀ E METODI
export interface Veicolo {
  marca: string;
  modello: string;
  anno: number;
  
  accendi(): void;
  spegni(): void;
}

export class Automobile implements Veicolo {
  marca: string;
  modello: string;
  anno: number;

  constructor(marca: string, modello: string, anno: number) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
  }

  accendi(): void {
    console.log(`${this.marca} ${this.modello} accesa`);
  }

  spegni(): void {
    console.log(`${this.marca} ${this.modello} spenta`);
  }
}

/*
NOTE IMPORTANTI
- implements dice che una classe deve rispettare il contratto di un'interfaccia
- La classe deve implementare TUTTE le proprietà e metodi dell'interfaccia
- La classe può avere proprietà e metodi aggiuntivi non presenti nell'interfaccia
- Una classe può implementare più interfacce separandole con virgole
- Le interfacce garantiscono che oggetti diversi rispettino la stessa struttura
*/
