'use strict'

window.addEventListener("load", function() {
    console.log("Dom Cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', () => {
        console.log("evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);
        var error_nombre = document.querySelector("#error_nombre");
        error_nombre.style.display = "none";
        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("El nombre no es valido");
            error_nombre.style.display = "block";
            error_nombre.innerHTML = "El nombre no es valido";
            error_nombre.style.color = "red";
            return false;
        } else {
            document.querySelector("#error_nombre").style.display = "none";
        }
        if (apellidos.trim() == null || apellidos.trim().length == 0) {
            alert("El apellidos no es valido");
            return false;
        }
        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert("El edad no es valida");
            return false;
        }

        box_dashed.style.display = "block";

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

        /* var datos_usuario = [nombre, edad, apellidos];

        for (let indice in datos_usuario) {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        } */




    });
});