/*
Un decorator normale riceve solo il constructor. Ma se vogliamo passare
parametri personalizzati? Usiamo una factory!

Una factory è una funzione che RITORNA un decorator.
*/

// DECORATOR FACTORY
function Logger2(messaggio: string) {
  // Questa funzione ritorna il vero decorator
  return function(constructor: any) {
    console.log(messaggio);
    console.log(constructor);
  };
}

// USO DELLA FACTORY
@Logger2("Ciao dalla classe Prova")
class Prova2 {
  constructor() {}
}

@Logger2("Ciao dalla classe Qwerty")
class Qwerty {
  constructor() {}
}

/*
Output:
"Ciao dalla classe Prova"
[Function: Prova]
"Ciao dalla classe Qwerty"
[Function: Qwerty]

Ogni classe ha il suo messaggio personalizzato!
*/

// COME FUNZIONA?
/*
1. Scriviamo @Logger("messaggio")
2. Logger("messaggio") viene chiamato e ritorna una funzione
3. Quella funzione è il vero decorator che riceve il constructor
4. Il decorator viene eseguito

È come una fabbrica: una funzione produce tanti decorators diversi!
*/

// FACTORY CON PIÙ PARAMETRI
function CreaLogger(messaggio: string, colore: string) {
  return function(constructor: any) {
    console.log(`[${colore}] ${messaggio}`);
  };
}

@CreaLogger("Logger rosso", "ROSSO")
class ClasseRossa {}

@CreaLogger("Logger blu", "BLU")
class ClasseBlu {}

/*
RIASSUNTO
- Una factory è una funzione che ritorna un decorator
- Permette di passare parametri personalizzati
- Sintassi: @NomeFactory(parametri)
- Riutilizzabile per creare decorators diversi
*/
