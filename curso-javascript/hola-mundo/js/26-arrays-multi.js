'use strict'

var categorias = ['Accion', "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran Torino"];

peliculas.reverse();

console.log(peliculas);

var cine = [categorias, peliculas];

/* console.log(cine[0][1]);
console.log(cine[1][2]); */

/* var elemento = "";
do {
    elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento);
} while (elemento != "ACABAR"); */

var indice = peliculas.indexOf('Gran Torino');
if (indice > -1) {
    peliculas.splice(indice, 1);
}

var array_string = peliculas.join();

var cadena = "Texto1, Texto2, Texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);

console.log(array_string);