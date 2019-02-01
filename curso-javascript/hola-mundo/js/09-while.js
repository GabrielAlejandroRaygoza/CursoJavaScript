'use strict'

//Buble while

var year = 2018;

while (year != 1991) {
    console.log("Estamos en el año " + year);

    if (year == 2000) {
        break;
    }

    year--;
}

//Do While

var years = 30;

do {
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years--;
} while (years > 25);