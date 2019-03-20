//Interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

//decorador
function estampar(logo:string){
    return function(target:Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de "+logo);
        }
    }
}

// Clase (molde del objeto)
//@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{

    //Propiedades(Caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //Constructor

    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    //Metodos (funciones o acciones del objeto)
    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
}

class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Camiseta("1","2","3","4",5);
console.log(camiseta);
//camiseta.estampacion();

var sudadera_nike = new Sudadera("ROJO","ML","NIKE","L",5);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris");
console.log(sudadera_nike);
