import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IngresosApiService} from "../services/ingresos-api.service";
import {PatologiaApoService} from "../services/patologia-apo.service";
import {Ingresos} from "../model/Ingresos";
import {Patologia} from "../model/Patologia";

@Component({
  selector: 'app-patologia',
  templateUrl: './patologia.component.html',
  styleUrls: ['./patologia.component.css']
})
export class PatologiaComponent implements OnInit {
  patologia: Array<Patologia> = [];

  usuarioId: number = 0;
  ingresoId: number = 0;
  pacientesId: number = 0;

  constructor(private route:ActivatedRoute,
              private patologia_service : PatologiaApoService) {
    this.route.params.subscribe(params=>this.usuarioId=params.usuarioId)
    this.route.params.subscribe(params=>this.ingresoId=params.ingresoId)
    this.route.params.subscribe(params=>this.pacientesId=params.pacientesId)
  }

  ngOnInit(): void {
    this.getAllPatologiaByPacienteId()
    console.log('Component Patologia, este es el User Id: ', this.usuarioId)
    console.log('Component Patologia, este es el Ingresos Id: ', this.ingresoId)
    console.log('Component Patologia, este es el Pacientes Id: ', this.pacientesId)
  }

  getAllPatologiaByPacienteId(){
    this.patologia_service.getAllPatologiaByPacienteId(this.pacientesId).subscribe((response: any)=>{
      this.patologia = response.content;
      console.log('Component User, este es la lista de patologias: ',this.patologia);
    })
  }

}
