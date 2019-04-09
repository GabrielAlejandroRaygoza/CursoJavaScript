import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatillas';

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla('Nike AirMax',"Nike","Azules",40, true),
            new Zapatilla('Reebok Classic',"Reebok","Blanco",80, true),
            new Zapatilla('Reebok Spartan',"Reebok","negra",180, true),
            new Zapatilla('Nike Runner',"Nike","Negras",60, true),
            new Zapatilla('Adidas Yessy',"Adidas","Gris",180, false),
        ];
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}