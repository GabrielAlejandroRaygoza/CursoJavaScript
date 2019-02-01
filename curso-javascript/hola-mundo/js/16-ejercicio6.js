'use strict'

/* Hacer un programa que nos diga si un numero es par o impar 
1. Ventana que pida numero(PROMPT)
2. Si no es valido que nos pida de nuevo el numero
*/

var number = parseInt(prompt("Introduce numero", 0));

while (isNaN(number)) {
    number = parseInt(prompt("Introduce numero", 0))
}

if (number % 2 == 0) {
    alert("Es un numero par");
} else {
    alert("Es impar");
}