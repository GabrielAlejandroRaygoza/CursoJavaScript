import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;
  public new_User: any;
  public usuario_guardado;

  constructor( private _peticionesService : PeticionesService) {
      this.userId=1;
      this.new_User = {
        "name" : "",
        "job": ""
      }
   }

  ngOnInit() {
    this.fecha = new Date(2019,5,20);
    this.cargaUsuario();
  }

  cargaUsuario(){
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(result=>{
      this.user = result.data;
    },error=>{
      console.log(error);
    });
  }

  onSubmit(form){
    this._peticionesService.addUser(this.new_User).subscribe(
      response=>{
      this.usuario_guardado = response;
      console.log(this.usuario_guardado);
      form.reset();
    },error=>{
      console.log(error);
    })
  }

}
