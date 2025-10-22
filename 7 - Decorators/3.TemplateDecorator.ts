/*
Questo esempio mostra come collegare una classe TypeScript all'HTML.

HTML necessario (index.html):
<div id="container"></div>
*/

// DECORATOR CHE MANIPOLA L'HTML
function CreaElemento(elemento: string, idContainer: string, nomeDaPassare: string) {
  return function(constructor: any) {
    // 1. Prendo il div dall'HTML
    const container = document.getElementById(idContainer);
    
    // 2. Creo un'istanza della classe passando il nome
    const istanza = new constructor(nomeDaPassare);
    
    // 3. Manipolo l'HTML
    if (container) {
      container.innerHTML = elemento;
      
      const h1 = container.querySelector("h1");
      if (h1) {
        h1.textContent = istanza.nome;
      }
    }
  };
}

// CLASSE PERSONA
@CreaElemento("<h1></h1>", "container", "Marco")
class Persona {
  constructor(public nome: string) {}
}

/*
COSA SUCCEDE?
1. Il decorator parte quando definiamo la classe
2. Prende il div con id="container"
3. Crea un oggetto Persona con nome "Marco"
4. Inserisce <h1></h1> nel div
5. Mette "Marco" dentro l'h1

Risultato nell'HTML: <div id="container"><h1>Marco</h1></div>
*/

// CAMBIAMO NOME
@CreaElemento("<h1></h1>", "container", "Luca")
class Studente {
  constructor(public nome: string) {}
}

// Ora nell'HTML appare: <h1>Luca</h1>

/*
IL MECCANISMO
Il decorator:
- Riceve parametri (elemento HTML, id container, nome)
- Crea un'istanza della classe (accede alle sue proprietà)
- Manipola il DOM inserendo HTML
- Collega la logica TypeScript con il template HTML
*/

// ESEMPIO PIÙ COMPLESSO
function ComponenteHTML(template: string, selector: string) {
  return function(constructor: any) {
    const elemento = document.getElementById(selector);
    
    if (elemento) {
      // Creo istanza con valori di default
      const istanza = new constructor();
      
      // Sostituisco {{nome}} nel template con il valore reale
      let html = template.replace("{{nome}}", istanza.nome);
      html = html.replace("{{età}}", istanza.età);
      
      elemento.innerHTML = html;
    }
  };
}

@ComponenteHTML("<div><h2>{{nome}}</h2><p>Età: {{età}}</p></div>", "app")
class Utente {
  nome = "Mario";
  età = 30;
}

/*
NOTE IMPORTANTI
- I decorators possono manipolare il DOM
- Collegano TypeScript e HTML
- Creano istanze della classe automaticamente
- Accedono alle proprietà della classe
*/
