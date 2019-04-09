module Tienda{
    export class Ropa{
        constructor(titulo: string){
            alert(titulo);
        }
    }

    export class Informatica{
        constructor(titulo: string){
            alert("Tienda de "+titulo);
        }
    }


}

import Informatica = Tienda.Informatica;
let cargar_Informatica = new Informatica("supertienda");
function arranque(lanzar: string){
    return function(target: Function){
        target.prototype.lanzamiento = function(): void{
            alert(lanzar);
        }
    }
}

@arranque("Lanzamiento de TypeScript")
class Programa{
    public nombre: string;
    public version: number;

    public setNombre(nombre: string){
        this.nombre = nombre;
    }

    public setVersion(version: number){
        this.version = version;
    }

    public getNombre():string{
        return this.nombre;
    }

    public getVersion():number{
        return this.version;
    }
}

class EditorVideo extends Programa{
    public timeLine: number;

    public setTimeLine(timeLine: number){
        this.timeLine = timeLine;
    }

    public getTimeLine(): number{
        return this.timeLine;
    }

    public getAllData():string{
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine();
    }
}

var programa = new Programa();
programa.lanzamiento();


var editor = new EditorVideo();
editor.setVersion(8);
editor.setNombre("Camtasia Studio");
editor.setTimeLine(4000);

console.log(editor.getAllData());

//Logica de formulario

var programas: Array<Programa> = [];

function guardar(){
    var nombre: string = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(8);

    programas.push(programa);

    var list = "";

    for(let i = 0; i < programas.length; i++){
        list = list + "<li>"+programas[i].getNombre()+"</li>";
    }

    var listado = <HTMLElement> document.getElementById("listado");
    listado.innerHTML = list;

    (<HTMLInputElement>document.getElementById("nombre")).value = "";

}