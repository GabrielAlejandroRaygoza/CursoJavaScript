import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatillas'
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {
    public titulo: string = "Componente de Zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillasService: ZapatillaService
    ){
        this.mi_marca = 'Fila';
        this.color = 'yellow';
        this.marcas = new Array;
    }

    ngOnInit(){
        this.zapatillas = this._zapatillasService.getZapatillas();
        alert(this._zapatillasService.getTexto())
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla_value, indice)=>{
            if(this.marcas.indexOf(zapatilla_value.marca) < 0)
            this.marcas.push(zapatilla_value.marca);
            console.log(indice);
        });

        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }
    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(indice){
        this.marcas.splice(indice,1);
    }

    onBlur(){
        console.log("Has salido del input");
    }

    mostrarPalabra(){
        alert(this.mi_marca);
    }
    
}