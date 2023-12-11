//! 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//! evento click que ejecute un console log con la información del evento del click

const buttonBtn = document.createElement("button");
buttonBtn.id = "btnToClick";
buttonBtn.textContent = "Click me";
document.body.appendChild(buttonBtn);
buttonBtn.addEventListener("click", (evento) => console.log(evento));


//! 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focusElement = document.querySelector(".focus");

focusElement.addEventListener("focus", (evento) => console.log(evento.target.value));


//! 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputElement = document.querySelector(".value");

inputElement.addEventListener("input", (evento) => console.log(evento.target.value));