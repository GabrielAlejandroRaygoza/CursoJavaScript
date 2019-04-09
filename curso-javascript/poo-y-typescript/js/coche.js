var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == null)
            this.modelo = "BMW Generico";
        else
            this.modelo = modelo;
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelarar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche = new Coche("Renault Clio");
var coche_dos = new Coche();
var coche_tres = new Coche();
coche.setColor("Rojo");
coche.acelarar();
coche.acelarar();
coche.acelarar();
console.log("El modelo del coche 1: " + coche.getModelo());
console.log("El color del coche 1 es: " + coche.getColor());
console.log("La velocidad del coche 1: " + coche.getVelocidad());
coche.frenar();
console.log("Despues de frenar la velocidad es: " + coche.getVelocidad());
/*
coche_dos.setColor("Azul");
coche_tres.setColor("Verde");
console.log("El color del coche 2 es: "+coche_dos.getColor());
console.log("El color del coche 3 es: "+coche_tres.getColor()); */ 
