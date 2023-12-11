//! 1.1 Basándote en el array siguiente, crea una lista ul > li 
//! dinamicamente en el html que imprima cada uno de los países.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement("ul");

for (const country of countries) {
    let liCountry = document.createElement("li");
    let pCountry = document.createElement("p");
    pCountry.textContent = ([country]);
    liCountry.appendChild(pCountry);
    ulCountries.appendChild(liCountry);
    
}
document.body.appendChild(ulCountries);

//! 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

// si solo hay un elemento de clase hay que usar querySelector y no querySelectorAll ya que este último da una lista aunque solo haya uno y no funciona parentNode, si hay más de uno, usar bucle y eliminar uno a uno dentro del bucle.

const classRemove = document.querySelector(".fn-remove-me");
classRemove.parentNode.removeChild(classRemove);

//! 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//! en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ulCars = document.createElement("ul");

for (const car of cars) {
    const liCar = document.createElement("li");
    const pCar = document.createElement("p");
    pCar.textContent = [car];
    liCar.appendChild(pCar);
    ulCars.appendChild(liCar);
}

const divPrintHere = document.querySelector('[data-function="printHere"]');

divPrintHere.appendChild(ulCars);

//! 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//! h4 para el titulo y otro elemento img para la imagen.
const countriesOthers = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

// for (const country of countriesOthers) {
//     const divCountry = document.createElement("div");
//     const h4Title = document.createElement("h4");
//     const img = document.createElement("img");
//     const imgTitle = country.title;
//     h4Title.textContent = imgTitle;
//     const imgRandom = country.imgUrl;
//     img.src = imgRandom;
//     divCountry.appendChild(h4Title);
//     divCountry.appendChild(img);
//     document.body.appendChild(divCountry);   
// }


//! 1.5 Basándote en el ejercicio anterior. Crea un botón que elimine el último 
//! elemento de la serie de divs.

// let divDelete = [];


// for (const country of countriesOthers) {
//     const divCountry = document.createElement("div");
//     const h4Title = document.createElement("h4");
//     const img = document.createElement("img");
//     const imgTitle = country.title;
//     h4Title.textContent = imgTitle;
//     const imgRandom = country.imgUrl;
//     img.src = imgRandom;
//     divCountry.appendChild(h4Title);
//     divCountry.appendChild(img);
//     document.body.appendChild(divCountry);
    
//     divDelete.push(divCountry);
// }

// const buttonDelete = document.createElement("button");
// buttonDelete.textContent = "Remove last IMG";
// document.body.appendChild(buttonDelete);

// buttonDelete.onclick = () => {
//     if (divDelete.length > 0) {
//         delDiv = divDelete.pop(); //obtenemos el último div del array
//         delDiv.remove();
//     }
// }


//! 1.6 Basándote en el ejercicio anterior. Crea un botón para cada uno de los 
//! divs que elimine ese mismo elemento del html.

for (const country of countriesOthers) {
    const divCountry = document.createElement("div");
    const h4Title = document.createElement("h4");
    const img = document.createElement("img");
    const imgTitle = country.title;
    const imgRandom = country.imgUrl;
    const buttonDelete = document.createElement("button")
    h4Title.textContent = imgTitle;
    buttonDelete.textContent = "Delete IMG"
    img.src = imgRandom;
    divCountry.appendChild(h4Title);
    divCountry.appendChild(img);
    divCountry.appendChild(buttonDelete); //Pongo el botón dentro del div para que también se elimine
    document.body.appendChild(divCountry); 
    buttonDelete.onclick = () => {
      divCountry.remove();
  } 
}


