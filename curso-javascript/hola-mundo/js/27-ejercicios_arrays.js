'use strict'

/* 
1. Pida 6 numeros por pantalla y los meta al array
2. Tiene que mostrar el array entero en el cuerpo de la pagina y en la consola
3. Ordenar y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantyo elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encontro y su indice
*/

function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>CONTENIDO DEL ARRAY " + textoCustom + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    });
    document.write("</ul>");
}

//Pedir 6 numeros
var numeros = [];

for (let i = 0; i < 6; i++) {
    //numeros[i] = parseInt(prompt('Introduce un numero', 0));
    numeros.push(parseInt(prompt('Introduce un numero', 0)));
}
//Mostrar en cuerpo de la pagina
mostrarArray(numeros);

//Consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort((a, b) => {
    return b - a;
});
mostrarArray(numeros, "Ordenado".toUpperCase());

// Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, "Revertido".toUpperCase());

//Contar indices o cuantos tiene el array
document.write("<h1> El array tiene: " + numeros.length + " elementos</h1>");

//Busqueda 

var busqueda = parseInt(prompt("Busca un número", 0));

var posicion = numeros.findIndex(numero => numero == busqueda)

if (posicion && posicion != -1) {
    document.write("<hr/><h1>Encontrado</h1>");
    document.write("<hr/><h1>Posición de la busqueda: " + posicion + " </h1>");
} else {
    document.write("<hr/><h1>No Encontrado</h1>");
}