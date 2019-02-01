'use strict'

//let y var

//Prueba con var
var numero = 40;
console.log(numero); //40
if (true) {
    var numero = 50;
    console.log(numero); //50
}

console.log(numero); //50


//Prueba con let
var texto = "Curso JS gabrielraygoza.com";
console.log(texto); //js

if (true) {
    let texto = "Curso Laravel 5 de GabrielRaygoza";
    console.log(texto); //laravel
}
console.log(texto); //js