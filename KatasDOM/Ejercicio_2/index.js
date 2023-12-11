//! 1.1 Inserta dinamicamente en un html un div vacío con javascript.

let newDiv = document.createElement("div");
document.body.appendChild(newDiv);

//! 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let newP = document.createElement("p");
newDiv.appendChild(newP);
//Ya había insertado el div creado por lo que no es necesario que lo vuelva a insertar (newDiv), ahora el div creado tienen un p en su interior

//! 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divLoopP = document.createElement("div");

for (let i = 0; i < 6; i++) {
    const pLoop = document.createElement("p");
    divLoopP.appendChild(pLoop);
}

document.body.appendChild(divLoopP);
   
	

//! 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const pTest = document.createElement("p");
pTest.textContent = 'Soy dinámico!';
document.body.appendChild(pTest);
	

//! 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2Text = document.querySelector(".fn-insert-here");
h2Text.textContent = 'Wubba Lubba dub dub';


//! 1.6 Basándote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ulApps = document.createElement("ul");
    for (const app of apps) {
         let li = document.createElement("li")
         li.textContent = [app];
         ulApps.appendChild(li);
    }

    document.body.appendChild(ulApps);

    

//! 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let classRemove = document.querySelectorAll(".fn-remove-me");
// Recorremos cada elemento y lo elimina uno a uno, siempre tenemos que eliminar desde en Nodo padre, he usado un forEach por cambiar pero se podía usar un for of.
classRemove.forEach(function(fnRemove) {
    fnRemove.parentNode.removeChild(fnRemove);
});



//! 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//!	Recuerda que no solo puedes insertar elementos con .appendChild.

const pMedio = document.createElement("p");
pMedio.textContent = "Voy en medio!";
const firstDiv = document.querySelector("div");
firstDiv.insertAdjacentElement("afterend", pMedio);


//! 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const allFnInsert = document.querySelectorAll("div.fn-insert-here");


for (const divFnInsert of allFnInsert) {
    const pInside  = document.createElement("p");
    pInside.textContent = "Voy dentro!";
    divFnInsert.appendChild(pInside);
};


	
