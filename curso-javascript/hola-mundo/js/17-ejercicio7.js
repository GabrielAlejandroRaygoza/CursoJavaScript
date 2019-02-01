'use strict'

/* Tabla de multiplicar de un numero introducido por pantalla */

var numero = parseInt(prompt("De que numero quieres la tabla?", 1));

while (isNaN(numero)) {
    numero = parseInt(prompt("De que numero quieres la tabla?", 1));
}

document.write("<h1>Tabla del " + numero + "<h1/>");
for (let i = 1; i <= 10; i++) {
    document.write(i + " X " + numero + " = " + (i * numero) + "<br/>");
}

//Todas la tablas
for (let c = 1; c <= 10; c++) {
    document.write("<h1>Tabla del " + c + "<h1/>");
    for (let i = 1; i <= 10; i++) {
        document.write(i + " X " + c + " = " + (i * c) + "<br/>");
    }
}