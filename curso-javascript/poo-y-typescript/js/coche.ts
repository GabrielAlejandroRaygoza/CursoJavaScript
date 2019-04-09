interface CocheBase{
    getModelo(): string;
    getVelocidad():number;
    
}

class Coche implements CocheBase{
   private color: string;
   private modelo: string;
   private velocidad: number;

   constructor(modelo:any = null){
        this.color = "Blanco"
        this.velocidad = 0;
         if(modelo==null) this.modelo = "BMW Generico";
        else this.modelo = modelo;
   }

   public getModelo():string{
       return this.modelo;
   }

   public setModelo(modelo:string):any{
       this.modelo = modelo;
   }
   
   public getColor(){
       return this.color;
   }

   public setColor(color){
       this.color = color;
   }

   public acelarar(){
       this.velocidad++;
   }

   public frenar(){
       this.velocidad--;
   }

   public getVelocidad():number{
       return this.velocidad;
   }
}

var coche = new Coche("Renault Clio");
var coche_dos = new Coche();
var coche_tres = new Coche();

coche.setColor("Rojo");
coche.acelarar();
coche.acelarar();
coche.acelarar();

console.log("El modelo del coche 1: "+coche.getModelo());
console.log("El color del coche 1 es: "+coche.getColor());
console.log("La velocidad del coche 1: "+coche.getVelocidad());

coche.frenar();

console.log("Despues de frenar la velocidad es: "+coche.getVelocidad());


/* 
coche_dos.setColor("Azul");
coche_tres.setColor("Verde");
console.log("El color del coche 2 es: "+coche_dos.getColor());
console.log("El color del coche 3 es: "+coche_tres.getColor()); */