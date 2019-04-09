import { Component , OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

    public titulo: string;
    public listado: string;
    constructor(){

        this.titulo = "Componente de VideoJuegos";
        this.listado = "Listado de los juegos mas populares";
        //console.log("Se ha cargado el componente VideoJuegocomponente.ts");
    }

    ngOnInit(){
        //console.log("OnInit Ejecutado");
    }

    ngDoCheck(){
        //console.log("DoCheck ejecutado");
    }

    ngOnDestroy(){
        //console.log("OnDestroy Ejecutado");
    }

    cambiartitulo(){
        this.titulo = "Nuevo Titulo del componente";
    }
 }