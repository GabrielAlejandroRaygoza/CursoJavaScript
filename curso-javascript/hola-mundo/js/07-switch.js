'use strict'

var edad = 80;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad"
        break;
    case 25:
        imprime = "Ya eres un adulto"
        break;
    case 40:
        imprime = "Crisis de los cuarenta"
        break;
    case 70:
        imprime = "Veteranes absoluta"
        break;
    default:
        imprime = "Tu edad es neutra";
        break;
}
console.log(imprime);