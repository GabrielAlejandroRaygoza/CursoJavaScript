'use strict'

var nombre = "Gabriel Raygoza";
var nombres = ["Gabriel Alejandro", "Edgar Dario", "Diegolinki", "Luis Angel", 52, true];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

var elemento = parseInt(prompt("Que elemento del array quieres?", 0));

if (elemento >= nombres.length) {
    alert("Introduce el numero correcto, menor que " + nombres.length);
} else {
    alert("El usuario seleccionado es: " + nombres[elemento]);
}
document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");
/*
for (let i = 0; i < lenguajes.length; i++) {
    document.write(`<li>${lenguajes[i]}</li>`)
}
*/

lenguajes.forEach((elemento, index) => {
    document.write("<li>" + index + "-" + elemento + "</li>")
});
document.write("</ul>");