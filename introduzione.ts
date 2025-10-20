/*
TypeScript è un superset di JavaScript che aggiunge il sistema di tipi statici opzionale e il controllo del tipo a compile-time.
Questo significa che è possibile definire tipi di variabili, parametri di funzione, ritorni,
e oggetti, così che gli errori potenziali vengano evidenziati prima dell'esecuzione del codice.

Con TypeScript si scrive codice più sicuro, più chiaro e più facile da mantenere,
grazie alle annotazioni di tipo e ai controlli statici effettuati dal compilatore.

TypeScript supporta tutte le funzionalità moderne di JavaScript,
aggiungendo inoltre tipi complessi, interfacce, generici, union, intersection, e molto altro,
per descrivere con precisione la struttura dei dati e i contratti delle funzioni.

---

CARATTERISTICHE PRINCIPALI
- Tipi primitivi forti: string, number, boolean, null, undefined.
- Tipi complessi: array, tuple, enum.
- Definizione di interfacce e tipi alias per strutture dati complesse.
- Funzioni tipizzate (parametri e tipi di ritorno).
- Controlli statici che prevengono errori comuni come assegnazioni errate o chiamate a metodi non esistenti.
- Supporto per la programmazione orientata agli oggetti con classi e interfacce.
- Sistema di tipi avanzato con generics, mapped types, conditional types.
- Compatibilità con librerie JavaScript esistenti.

---

VANTAGGI
- Migliora la qualità e affidabilità del codice grazie al controllo anticipato degli errori.
- Facilita la lettura e collaborazione grazie ai tipi espliciti.
- Aumenta la produttività degli sviluppatori con migliori strumenti di autocompletamento e refactoring.
- Predilige codice più robusto e meno soggetto a bug di tipo.
- Offre un percorso graduale di adozione, partendo da JavaScript puro.
*/

// ESEMPIO BASE TYPESCRIPT

// Definizione di una interfaccia per l'oggetto persona
interface Persona {
  nome: string;
  eta?: number; // proprietà opzionale
}

// Funzione che stampa informazioni con tipi espliciti
function saluta(persona: Persona): string {
  return `Ciao, ${persona.nome}${
    persona.eta ? ", hai " + persona.eta + " anni" : ""
  }.`;
}

// Uso della funzione
const messaggio = saluta({ nome: "Luca", eta: 30 });
console.log(messaggio); // Ciao, Luca, hai 30 anni.

/*

NOTE IMPORTANTI
- I tipi sono opzionali ma fortemente consigliati per evitare errori di runtime.
- Il sistema di tipi di TypeScript è strutturale, cioè basa la compatibilità sui membri effettivi dell'oggetto.
- TypeScript richiede la compilazione in JavaScript per essere eseguito nel browser o ambiente runtime.
- Supporta anche strumenti di build e IDE per una migliore esperienza di sviluppo.
*/
