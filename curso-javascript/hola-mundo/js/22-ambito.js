'use strict'
var texto = "";

function holaMundo(texto) {
    var hola_mundo = "Texto dentro de function";
    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo soy una variable globaliti";
holaMundo(texto);
// NO SE PUEDE POR EL AMBITO DE LAS VARIABLES -> console.log(hola_mundo);