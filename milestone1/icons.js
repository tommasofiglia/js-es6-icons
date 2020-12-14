$(document).ready(function () {
/*********************************************
Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
**********************************************/

  //Per creare questo array di oggetti, ho deciso di usare il constructor e rendere la sintassi più semplice

  class icon {
    constructor(name, prefix, type, family) {
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family;
    }
  };

  //Creazione dell'array di oggetti icone che definisco con const in quanto non varieranno successivamente nel codice.
  const arrayIcone = [
    new icon("CAT" , "fas" , "fa-cat" , "animals" ),
    new icon("CROW" , "fas" , "fa-crow" , "animals" ),
    new icon("DOG" , "fas" , "fa-dog" , "animals" ),
    new icon("DOVE" , "fas" , "fa-dove" , "animals" ),
    new icon("DRAGON" , "fas" , "fa-dragon" , "animals" ),
    new icon("HORSE" , "fas" , "fa-horse" , "animals" ),
    new icon("HIPPO" , "fas" , "fa-hippo" , "animals" ),
    new icon("FISH" , "fas" , "fa-fish" , "animals" ),
    new icon("CARROT" , "fas" , "fa-carrot" , "Fruits & Vegetables" ),
    new icon("APPLE-ALT" , "fas" , "fa-apple-alt" , "Education" ),
    new icon("LEMON" , "fas" , "fa-lemon" , "Summer" ),
    new icon("PEPPER-HOT" , "fas" , "fa-pepper-hot" , "Fruits & Vegetables" ),
    new icon("USER-ASTRONAUT" , "fas" , "fa-user-astronaut" , "Science Fiction" ),
    new icon("USER-GRADUATE" , "fas" , "fa-user-graduate" , "Users & People" ),
    new icon("USER-NINJA" , "fas" , "fa-user-ninja" , "Users & People" ),
    new icon("USER-SECRET" , "fas" , "fa-user-secret" , "Users & People" )
  ];

  console.log(arrayIcone);

/***********************************************
Selezioniamo il container icons
************************************************/

  //Seleziono il container icons attraverso il querySelector che mi permette di indicare la classe dell'elemento da selezionare.

  const iconsContainer = document.querySelector('.icons');

/*****************************************************
 Inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
*****************************************************/

  print(arrayIcone , iconsContainer);

/************** FUNZIONI **************/

  //Creo una funzione print con ciclo forEach che cicli tra gli oggetti e inserisca nel markup le icons


  function print(array, selectorContainer) {

    array.forEach(iconElement => {

      //Per assegnare le proprietà name, prefix e type a delle variabili, uso il destructuring al posto di creare singole variabili che prendano le varie proprietà.

      const {name, prefix, type} = iconElement;

      //Creo il markup da inserire nel contenitore

        let markup =
          `
          <div>
          <i class="${prefix} ${type}" style="color:black"></i>
          <div class="title">${name}</div>
          </div>
          `;

        //"Stampo" all'interno del contenitore selezionato, il markup da inserire per ottenere le icone.
        selectorContainer.insertAdjacentHTML('beforeend',markup);
    });

  }

});
