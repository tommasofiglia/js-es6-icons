$(document).ready(function () {
/*****************************************
Qui le icone definite nel milestone 1
*****************************************/

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

    //Seleziono il container icons usando jquery
    const iconsDiv = $('.icons');

    console.log(iconsDiv);

    //aggiungiamo dei colori usando una funzione

    changeColor(arrayIcone);
    console.log(arrayIcone);

    //Richiamo la funzione che crea le icone in html (Vista nel milestone1) che però stavolta ho modificato affinché, in base al colore assegnato, cambi lo style dell'icona in html.

    milestone1Modificata();

/* ---- FUNCTIONS ----*/

//1. Funzione milestone 1 Rivisitata
  function milestone1Modificata() {

      arrayIcone.forEach(icons => {
        let iconName = icons.name;
        let iconPrefix = icons.prefix;
        let iconType = icons.type;
        let iconFamily = icons.family;

        if (icons.color === "blue") {
          var markup = `
          <div>
          <i class="${iconPrefix} ${iconType}" style="color:blue"></i>
          <div class="title">${iconName}</div>
          </div>
          `;
        } else if (icons.color === "orange") {
          var markup = `
          <div>
          <i class="${iconPrefix} ${iconType}" style="color:orange"></i>
          <div class="title">${iconName}</div>
          </div>
          `;
        } else if (icons.color === "purple") {
          var markup = `
          <div>
          <i class="${iconPrefix} ${iconType}" style="color:purple"></i>
          <div class="title">${iconName}</div>
          </div>
          `;
        }

        iconsDiv.append(markup);
      });

  };

//2. funzione per assegnare un colore ad un icona

  function changeColor(array) {
    for (var i = 0; i < array.length; i++) {
      array[i].family === "animals" ? array[i].color = "blue" :  array[i].family === "Fruits & Vegetables" || array[i].family === "Education" || array[i].family === "Summer" ? array[i].color = "orange" : array[i].color = "purple";
    }
  }

});
