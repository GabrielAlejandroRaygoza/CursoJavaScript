'use strict'

/*Programa que pida dos numero y que nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son un numero o son menos o iguales a cero que vuelva a pedir los datos*/

var numero1 = parseInt(prompt("Ingresa el primer número", 0));
var numero2 = parseInt(prompt("Ingresa el segundo número", 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Ingresa el primer número", 0));
    numero2 = parseInt(prompt("Ingresa el segundo número", 0));
}
if (numero1 == numero2) {
    alert("Son iguales");
} else if (numero1 > numero2) {
    alert("El número mayor es: " + numero1);
    alert("El número menor es: " + numero2);
} else if (numero2 > numero1) {
    alert("El número mayor es: " + numero2);
    alert("El número menor es: " + numero1);
} else {
    alert("Introduce numero correctos");
}