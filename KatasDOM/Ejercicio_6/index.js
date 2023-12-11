//! Dado el siguiente HTML: Elimina el elemento que tenga la clase .fn-remove-me.

const classRemove = document.querySelector(".fn-remove-me");

classRemove.parentNode.removeChild(classRemove);