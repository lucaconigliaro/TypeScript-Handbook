/*
INTRODUZIONE AI TIPI ANY, UNION, CUSTOM TYPE ED ENUM IN TYPESCRIPT

TypeScript offre diversi modi per definire i tipi, che aumentano la flessibilità e la sicurezza del codice.

1. any:
   - Il tipo più permissivo, permette qualsiasi valore.
   - Usato per bypassare il controllo dei tipi, utile in fasi di migrazione o codice legacy.
   - Va usato con cautela perché disabilita i benefici del sistema di tipi.

2. Union:
   - Permette a una variabile di assumere uno tra più tipi specificati.
   - Si usa l'operatore pipe `|` per indicare i tipi possibili.
   - Utile per esprimere valori multifunzione o possibili stati.

3. Custom Type (type alias):
   - Consente di definire un nome personalizzato per un tipo o un'unione di tipi.
   - Facilita la leggibilità e manutenzione del codice.
   - Può rappresentare tipi primitivi, unioni, oggetti complessi ecc.

4. Enum:
   - Definisce un insieme di costanti con nomi significativi.
   - Aiuta a gestire valori predeterminati e restrizioni di input.
   - Può essere numerico (default) o a stringhe.
   - Molto utile per rappresentare stati, opzioni o categorie fisse.

*/

// 1. any
let valoreIncert: any = 5;
valoreIncert = "può essere stringa ora";
valoreIncert = true;

// 2. Union
let id: number | string;
id = 123; // Ok
id = "ABC123"; // Ok
// id = false;    // Errore

// 3. Custom Type
type IdTipo = number | string;
let userId: IdTipo;
userId = 789;
userId = "XYZ789";

// 4. Enum
enum Direzione {
  Su,
  Giù,
  Sinistra,
  Destra,
}

let movimento: Direzione = Direzione.Su;

// Enum stringa
enum Stato {
  Attivo = "ATTIVO",
  Inattivo = "INATTIVO",
  Sospeso = "SOSPESO",
}

let statoUtente: Stato = Stato.Attivo;

/*
NOTE IMPORTANTI
- **any** annulla i controlli di tipi, va usato solo quando necessario.
- Le **union** permettono grande flessibilità, ma richiedono controlli nei blocchi condizionali.
- I **type alias** migliorano la chiarezza e facilitano modifiche centralizzate dei tipi.
- Gli **enum** migliorano leggibilità e robustezza, prevenendo errori di typo su stringhe/literal.
- TypeScript fornisce la possibilità di combinare questi strumenti per tipizzazione avanzata e robusta.
*/
