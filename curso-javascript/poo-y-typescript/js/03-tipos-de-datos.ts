type alfanumerico = string | number;

//String 
let cadena: alfanumerico = "Gabriel Raygoza";

//Number
var numero: number = 12;

//Booleano
var verdadero_falso: boolean = true;

//Any
var cualquiera: any = 12;

//Arrays
var lenguajes: Array<any> = ["Java","c","c++","css",12,true];

let years: number[] = [2,13,14,15];

//LET VS var

var numero1 = 10;
var numero2 = 12;


if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2);
}

console.log(numero1, numero2);

console.log(cadena,numero, verdadero_falso, cualquiera, lenguajes,years);