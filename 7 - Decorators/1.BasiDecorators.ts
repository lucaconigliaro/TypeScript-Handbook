/*
I decorators sono funzioni speciali che si "attaccano" alle classi usando il simbolo @.
Vengono eseguiti automaticamente quando la classe viene definita, non quando crei un'istanza.

IMPORTANTE: Abilita questa opzione nel tsconfig.json:
"experimentalDecorators": true
*/

// CLASSE NORMALE
class Prova {
  constructor() {
    console.log("Sto creando un oggetto di Prova");
  }
}

// Quando creo un'istanza, parte il constructor
const obj = new Prova(); // Output: "Sto creando un oggetto di Prova"

// CREARE UN DECORATOR
function Logger(constructor: Function) {
  console.log("Logger eseguito!");
  console.log(constructor);
}

// APPLICARE IL DECORATOR
@Logger
class ProvaDecorata {
  constructor() {
    console.log("Constructor della classe");
  }
}

/*
COSA SUCCEDE?
Quando il codice parte, PRIMA di fare qualsiasi cosa, il decorator @Logger
viene eseguito automaticamente.

Output immediato (senza creare istanze):
"Logger eseguito!"
[Function: ProvaDecorata]

Il decorator riceve il constructor della classe come parametro.
*/

// CONFRONTO: con e senza istanza
@Logger
class ClasseA {
  constructor() {
    console.log("Constructor ClasseA");
  }
}
// Anche senza fare "new ClasseA()", il decorator è già partito!

// Se poi creo un'istanza
const a = new ClasseA();
// Output:
// "Logger eseguito!" (dal decorator)
// [Function: ClasseA]
// "Constructor ClasseA" (dal new)

/*
NOTE IMPORTANTI
- I decorators sono funzioni normali
- Si applicano con @ davanti al nome della classe
- Vengono eseguiti quando definisci la classe, non quando la istanzi
- Ricevono automaticamente il constructor come parametro
- Utili per "preparare" o "configurare" una classe prima dell'uso
*/
