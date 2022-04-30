var titulo = document.querySelector("#hola");
var parrafo = document.querySelector("#parrafo").innerHTML;
console.log(titulo.textContent = "chau");

document.querySelector("#hola").innerHTML = parrafo
document.querySelector("#parrafo").innerHTML = titulo

var parrafo2 = document.querySelector("#parrafo2");

var parrafo3 = document.createElement("p");
parrafo3.textContent = "Creado desde JS"


document.body.appendChild(parrafo3);

console.log(parrafo3.textContent);

