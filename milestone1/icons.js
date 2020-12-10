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

  //Creazione dell'array di oggetti icone
  let arrayIcone = [
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

  //Seleziono il container icons usando jquery
  const iconsDiv = $('.icons');

  console.log(iconsDiv);


/*****************************************************
 Inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
*****************************************************/

  //Creo una funzione con ciclo forEach che cicli tra gli oggetti e inserisca nel markup le icons


  function milestone1() {

    arrayIcone.forEach(icons => {
      let iconName = icons.name;
      let iconPrefix = icons.prefix;
      let iconType = icons.type;
      let iconFamily = icons.family;

      let markup = `
      <div>
      <i class="${iconPrefix} ${iconType}" style="color:black"></i>
      <div class="title">${iconName}</div>
      </div>
      `
      iconsDiv.append(markup);
    });

  }

  milestone1();

});
