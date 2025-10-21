/*
EREDITARIETÀ E PROTECTED IN TYPESCRIPT

L'ereditarietà permette a una classe (figlia) di estendere un'altra classe (padre),
ereditandone proprietà e metodi.

Argomenti trattati:
- Creare classe figlia con extends
- Costruttore default e super()
- Modificatore protected
- Override di metodi
*/

// CLASSE PADRE
export class Animale {
  constructor(
    public nome: string,
    protected eta: number // protected: accessibile nelle classi figlie
  ) {}

  public verso(): string {
    return "Verso generico";
  }

  protected getEta(): number {
    return this.eta;
  }
}

// CLASSE FIGLIA CON COSTRUTTORE DEFAULT
export class Cane extends Animale {
  // Costruttore che chiama super() per inizializzare la classe padre
  constructor(nome: string, eta: number, public razza: string) {
    super(nome, eta); // Chiamata obbligatoria al costruttore padre
  }

  // Override del metodo padre
  public verso(): string {
    return "Bau bau!";
  }

  // Metodo che usa proprietà protected del padre
  public mostraEta(): string {
    return `${this.nome} ha ${this.getEta()} anni`;
  }
}

const fido = new Cane("Fido", 5, "Labrador");
console.log(fido.verso()); // "Bau bau!"
console.log(fido.mostraEta()); // "Fido ha 5 anni"

// ESEMPIO COMPLETO CON PROTECTED
export class Veicolo {
  protected velocitaMassima: number;

  constructor(
    public marca: string,
    velocita: number
  ) {
    this.velocitaMassima = velocita;
  }

  protected accelera(): void {
    console.log(`Accelerando fino a ${this.velocitaMassima} km/h`);
  }
}

export class Moto extends Veicolo {
  constructor(marca: string, velocita: number, public cilindrata: number) {
    super(marca, velocita);
  }

  // Può accedere a proprietà e metodi protected del padre
  public avvia(): void {
    console.log(`Moto ${this.marca} avviata`);
    this.accelera(); // Metodo protected accessibile
  }

  public getVelocitaMassima(): number {
    return this.velocitaMassima; // Proprietà protected accessibile
  }
}

/*
NOTE IMPORTANTI
- extends crea una relazione di ereditarietà (figlia estende padre)
- super() deve essere chiamato nel costruttore della classe figlia PRIMA di usare "this"
- protected permette accesso nella classe e nelle classi figlie, ma non dall'esterno
- Le classi figlie possono fare override dei metodi del padre
- Le classi figlie ereditano tutti i metodi e proprietà public e protected
- private NON è accessibile nelle classi figlie, solo protected e public
*/
