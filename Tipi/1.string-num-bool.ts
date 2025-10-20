/*
TypeScript introduce un sistema di tipi statici che include i tipi primitivi fondamentali,
i quali sono molto simili a quelli del JavaScript runtime ma con il controllo statico in più.

1. Tipo string:
   - Rappresenta una sequenza di caratteri testuali.
   - Le stringhe possono essere dichiarate usando virgolette singole o doppie.
   - Es: let nome: string = "Mario";

2. Tipo number:
   - Rappresenta numeri sia interi che floating-point.
   - Supporta valori in base decimale, binaria, esadecimale e ottale.
   - Non distingue tra int e float, tutto è number.
   - Es: let eta: number = 30; let prezzo: number = 19.99;

3. Tipo boolean:
   - Può assumere solo due valori: true o false.
   - È usato per logica condizionale e flag.
   - Es: let isActive: boolean = true;

*/

// ESEMPIO DI DICHIARAZIONE E UTILIZZO
let nome: string = "Luca";
let eta: number = 29;
let isStudente: boolean = false;

console.log(`Nome: ${nome}, Età: ${eta}, Studente: ${isStudente}`);

//ALTRE INFORMAZIONI IMPORTANTI
//TypeScript effettua il controllo statico, quindi questa operazione genera errore:
let error: string = 10; // errore: Type 'number' non assegnabile a string

// - TypeScript supporta l'inferenza dei tipi, non è sempre necessario specificare esplicitamente il tipo:
let nome2 = "Paolo"; // TypeScript deduce che nome è string

/*
CONCLUSIONE
I tipi string, number e boolean sono fondamentali per costruire variabili ben tipizzate in TypeScript.
Questo sistema permette di prevenire molti errori di tipo comuni e migliora la leggibilità e manutenzione del codice.
L'inferenza automatica riduce la necessità di scrivere tipi espliciti quando non serve, mantenendo il controllo rigoroso dove necessario.
*/
