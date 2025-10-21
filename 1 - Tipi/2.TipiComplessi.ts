/*
AI TIPI COMPLESSI IN TYPESCRIPT: OBJECT, ARRAY, TUPLE

TypeScript consente di definire tipi complessi per modellare dati strutturati in modo preciso e sicuro.
Gli oggetti (object), gli array e le tuple sono elementi fondamentali per rappresentare dati in strutture varie e flessibili,
garantendo al contempo il controllo statico sui tipi.

OBJECT è una struttura con proprietà nominative e tipi associati, usata per descrivere entità reali e modelli di dati.

ARRAY è una collezione di valori dello stesso tipo, con lunghezza variabile.

TUPLE è una struttura simile ad array, ma con lunghezza e tipo di ogni posizione fissati, da usare per dati correlati e di lunghezza fissa.
*/

// 1. Definizione Object tramite interfaccia
export interface Persona {
  nome: string;
  eta: number;
}

// Esempio uso object
export const mario: Persona = { nome: "Mario", eta: 30 };

// 2. Definizione Array di numeri
export const numeri: number[] = [1, 2, 3, 4];

// Alternativa con generici
export const parole: Array<string> = ["ciao", "mondo"];

// 3. Definizione Tuple con tipi e lunghezza fissa
export const risposta: [number, string] = [200, "OK"];

// Esempio coordinata come tuple
export const coordinate: [number, number] = [45.4642, 9.19];

// Destructuring di tuple
export const [lat, long] = coordinate;

/*
NOTE IMPORTANTI
- Gli **object** sono tipizzati tramite interfacce o type alias per garantire sicurezza e strutturazione.
- Gli **array** sono collezioni di elementi omogenei; possono essere definiti con [] o Array<>.
- Le **tuple** sono array tipizzati con lunghezza e tipo specifici per ogni posizione.
- La destructuring migliora la leggibilità e il tipo dei valori estratti da tuple.
- Definire correttamente i tipi previene errori e migliora l'autocompletamento negli IDE.
- Comprendere le differenze tra Object, Array e Tuple è fondamentale per modellare correttamente i dati.
*/
