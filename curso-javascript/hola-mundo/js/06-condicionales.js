'use strict'

//Condicional if
/*
var edad = 19;

var nombre = "David Suarez";

if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " años, es MAYOR de edad");
    if (edad <= 33) {
        console.log('Todavia eres millenial');
    } else if (edad >= 70) {
        console.log("Eres Anciano");
    } else {
        console.log("Ya no eres millenial");
    }
} else {
    console.log(nombre + " tiene " + edad + " años, es MENOR de edad")
}
*/
//Operadores logicos

//Negacion

var year = 2028;
if (year != 2016) {
    console.log("El año no es 2016, REALMENTE ES " + year);
}

//AND
if (year >= 2000 && year <= 2020 && year != 2018) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era post moderna");
}

//OR

if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año acaba en 8");
} else {
    console.log("AÑO NO REGISTRADO");
}