$(document).ready(function () {
/***********************************
 Icone come da milestone 1
***********************************/

  class icon {
    constructor(name, prefix, type, family) {
      this.name = name;
      this.prefix = prefix;
      this.type = type;
      this.family = family;
    }
  };

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

  const iconsContainer = document.querySelector('.icons');

/*******************************************
  Colori come da milestone2
*******************************************/
  const arrayIconeColori = arrayIcone.map(element =>{
    // Impostiamo un if che ci selezioni solo alcuni oggetti dell'array "arrayIcone" in base al type e dia a queste selezioni dei colori.
    if (element.family === "animals") {
        element.color = "blue";
    } else if (element.family === "Fruits & Vegetables" || element.family === "Summer" || element.family === "Education"){
      element.color = "yellow";
    } else if (element.family === "Users & People" || element.family === "Science Fiction"){
      element.color = "purple";
    }
  }
  );

  // Stampa delle icone colorate attraverso

  print(arrayIcone, iconsContainer);

/********************************************
Aggiungiamo i tipi alla select.
*********************************************/
//Selezioniamo il tag select , racchiudiamolo in una variabile e diamo diverse opzioni di scelta all'utente aggiungendole all'html attraverso js.

  const selection = document.querySelector('#type');

  selection.insertAdjacentHTML('beforeend' ,
  `
  <option value="">Animals</option>
  <option value="">Vegetables</option>
  <option value="">Users</option>

  `
  )

//Aggiungiamo l'event al cambio di selezione
selection.addEventListener('change', choice =>{

});
//estrapoliamo i tipi di icone


  //al change mostriamo solo le icone filtrate
  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo



/* ---- FUNCTIONS ----*/

/****************************************
Funzione milestone 1
****************************************/

function print(array, selectorContainer) {

  array.forEach(iconElement => {

    const {name, prefix, type, color} = iconElement; //Cosi si destruttura un elemento, cioé le sue proprietà vengono "Estratte" dagli elementi.

      let markup =
        `
        <div>
        <i class="${prefix} ${type}" style="color:${color}"></i>
        <div class="title">${name}</div>
        </div>
        `;

      //"Stampo" all'interno del contenitore selezionato, il markup da inserire per ottenere le icone.
      selectorContainer.insertAdjacentHTML('beforeend',markup);
  });

}
});
