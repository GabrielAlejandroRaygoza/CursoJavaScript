'use strict'

//DOM- DOCUMENT OBJECT MODEL

function cambiaColor(color) {
    caja.style.background = color;
}

//************CONSEGUIR ELEMENTOS CON ID CONCRETO

//var caja = document.getElementById("micaja");
var caja = document.querySelector('#micaja');

caja.innerHTML = "¡Texto en la caja desde JS!";
caja.style.background = "RED";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";
console.log(caja);

//CONSEGUIR POR ETIQUETA
var todosLosDiv = document.getElementsByTagName('div');
var hr = document.createElement("hr");


var seccion = document.querySelector("#miseccion");

for (let valor in todosLosDiv) {
    if (typeof todosLosDiv[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
};
seccion.append(hr);

//CONSEGUIR POR CLASE
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");
for (let div in divsRojos) {
    if (divsRojos[div].className == "rojo") {
        divsRojos[div].style.background = "red";
    }
}
divsAmarillos[0].style.background = "yellow";


console.log(divsRojos);

//QuerySelector
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);