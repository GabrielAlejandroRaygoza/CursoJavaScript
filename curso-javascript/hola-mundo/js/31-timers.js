'use strict'

window.addEventListener('load', () => {
    //TIMERS
    var tiempo;

    function intervalo() {
        tiempo = setInterval(() => {
            console.log("SetInterval Ejecutado");
            var encabezado = document.querySelector("h1");
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "20px";
            } else {
                encabezado.style.fontSize = "50px";
            }

        }, 1000);

        return tiempo;
    }

    intervalo();

    var stop = document.querySelector("#stop");
    stop.addEventListener("click", () => {
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");
    start.addEventListener("click", () => {
        alert("Has iniciado el intervalo en bucle");
        intervalo();
    });
});