'use strict'

/*--------------------------------------Transformacion de texto o cadenas--------*/

var numero = 444;
var texto1 = "       Bienvenido al curso de JavaScript de Victor Robles  ";
var texto2 = "Es muy buen curso";

/*//Convertir numero a string

var dato = numero.toString();

console.log(dato);

//Convertir texto de minusculas a mayusculas

dato = texto1.toUpperCase();

console.log(dato);

//Convertir texto de mayusculas a minusculas

dato = texto1.toLowerCase();

console.log(dato);

//Calcular longitud de texto

var nombre = "Gabriel Raygoza";

console.log(nombre.length);

//Concatenar->Unir textos

//var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" " + texto2)
console.log(textoTotal);*/

/*-------------------------------Buscar Palabra dentro de otra-------------------------------*/
//var busqueda = texto1.indexOf("curso"); -> primer coincidencia
//var busqueda = texto1.search("curso"); // Ultima concidencia es lo mismo de indexOf, a partir de que caracter esta
//var busqueda = texto1.match(/curso/g); //Hace un array y pone las veces que lo encuentra
//var busqueda = texto1.substr(14, 5);//Saca un string a partir de y el numero de letras
//var busqueda = texto1.charAt(44); //Saca una sola letra
//var busqueda = texto1.startsWith("Bienvenido al curso"); //Buscar al inicio del string
//var busqueda = texto1.endsWith("Robles");//Busca al finsl
//var busqueda = texto1.includes("JavaScript"); //Si existe o no una palabra

/*-------------------------- Reemplazar,cortar y demas textos dentro de otros------------------------------------------ */
//var busqueda = texto1.replace("JavaScript", "Symfony"); //reemplazar dentro de un texto
//var busqueda = texto1.slice(14,22);//Separar la cadena a partir de la letra numero?
//var busqueda = texto1.split(" "); //coleccion de palabras separando con las coincidencias de lo que se le meta
var busqueda = texto1.trim(); //Recortar los espacion por delante y atras(siempre y cuando tenga espacios)

console.log(busqueda);