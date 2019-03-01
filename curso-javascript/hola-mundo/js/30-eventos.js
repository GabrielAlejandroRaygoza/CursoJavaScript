'use strict'

window.addEventListener("load", () => {
    function cambiarColor() {
        var bg = boton.style.background;
        if (bg == "green")
            boton.style.background = "red";
        else
            boton.style.background = "green";

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
        return true;
    }

    var boton = document.querySelector("#boton");

    //Click
    boton.addEventListener('click', function() {
        cambiarColor();
        console.log(this);
        this.style.border = "10px solid black";
    });

    //MouseOvewr
    boton.addEventListener('mouseover', function() {
        this.style.background = "yellow";
    });

    //MouseOut
    boton.addEventListener('mouseout', function() {
        console.log("Entra");
        this.style.background = "#ccc";
    });

    //focus
    var input = document.querySelector("#campo_nombre");

    input.addEventListener('focus', function() {
        console.log("[focus]-Estas dentro del input");
    });

    //blur
    input.addEventListener('blur', function() {
        console.log("[blur]-Estas fuera del input");
    });

    //keydown
    input.addEventListener('keydown', function() {
        console.log("[keydown]-Pulsaldo esta tecla " +
            String.fromCharCode(event.keyCode));
    });

    //keypress
    input.addEventListener('keypress', function() {
        console.log("[keypress]-Tecla presionada " +
            String.fromCharCode(event.keyCode));
    });

    //keyup
    input.addEventListener('keyup', function() {
        console.log("[keyup]-Tecla soltada " +
            String.fromCharCode(event.keyCode));
    });
});