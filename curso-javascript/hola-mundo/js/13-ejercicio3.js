'use strict'

/* Hacer un programa que muestre todos los numeros entre 2 numero introducidos por el usuario */

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

document.write("<h1>" + numero1 + " a " + numero2 + " estan estos numeros: </h1>");

for (let i = numero1; i <= numero2; i++) {
    document.write(i + "<br/>");
}