import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Ingresos} from "../model/Ingresos";
import {IngresosApiService} from "../services/ingresos-api.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  ingresos: Array<Ingresos> = [];
  usuarioId: number = 0;

  constructor(private route:ActivatedRoute,
              private ingresos_service : IngresosApiService) {
    this.route.params.subscribe(params=>this.usuarioId=params.usuarioId)
  }

  ngOnInit(): void {
    this.getAllIngresosByMedicoId();
    console.log('Component User, este es el User Id: ', this.usuarioId)
  }

  getAllIngresosByMedicoId(){
    this.ingresos_service.getAllIngresosByMedicoId(this.usuarioId).subscribe((response: any)=>{
      this.ingresos = response.content;
      console.log('Component User, este es la lista de ingresos: ',this.ingresos);
    })
  }

}
