'use strict'

//LocalStorage

//Comprobar disponiblidad del localStorage
if (typeof(Storage) !== 'undefined') {
    console.log("LocalStorage Disponible");
} else {
    console.log("Incompatible con LocalStorage");
}

//Guardar datos

localStorage.setItem("titulo", "Curso de Sympony de Gabriel Raygoza");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar Objetos
var usuario = {
    nombre: "Gabriel Raygoza",
    email: "gbri29@hotmail.com",
    web: "http://www.google.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto

var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(" " + userjs.web + " - " + userjs.nombre);

localStorage.clear();