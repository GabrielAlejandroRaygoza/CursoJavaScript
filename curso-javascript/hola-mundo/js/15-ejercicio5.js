'use strict'

/*
    Muestre todos lo numero divisores de un numero introducido en un prompt
*/

var numero = parseInt(prompt("Introduce un numero", 1));


for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        console.log("Divisior: " + i);
    }
}