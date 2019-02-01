'use strict'

/* 
Calculadora
- Pida dos numero por pantalla
- Si metimos uno mal, los vuelve a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar, restar, dividir y multiplicar esas dos cifras
*/

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero1)) {
    numero1 = parseInt(prompt("Introduce el primer número", 0));
    numero2 = parseInt(prompt("Introduce el segundo número", 0));
}

var resultado = "La suma es: " + (numero1 + numero2) + "<br/>" +
    "La resta es: " + (numero1 - numero2) + "<br/>" +
    "La multiplicacion es: " + (numero1 * numero2) + "<br/>" +
    "La division es: " + (numero1 / numero2) + "<br/>";

var resultadoCMD = "La suma es: " + (numero1 + numero2) + "\n" +
    "La resta es: " + (numero1 - numero2) + "\n" +
    "La multiplicacion es: " + (numero1 * numero2) + "\n" +
    "La division es: " + (numero1 / numero2) + "\n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);