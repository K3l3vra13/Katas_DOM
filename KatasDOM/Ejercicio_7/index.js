//! Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const divPrintHere = document.querySelector('[data-function="printHere"]');
const ulPlaces = document.createElement("ul");

for (const place of places) {
    const liPlace = document.createElement("li");
    liPlace.textContent = [place];
    ulPlaces.appendChild(liPlace);
}

divPrintHere.appendChild(ulPlaces);
