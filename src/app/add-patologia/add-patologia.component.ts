import { Component, OnInit } from '@angular/core';
import {Ingresos} from "../model/Ingresos";
import {Patologia} from "../model/Patologia";
import {IngresosApiService} from "../services/ingresos-api.service";
import {ActivatedRoute} from "@angular/router";
import {PatologiaApoService} from "../services/patologia-apo.service";

@Component({
  selector: 'app-add-patologia',
  templateUrl: './add-patologia.component.html',
  styleUrls: ['./add-patologia.component.css']
})
export class AddPatologiaComponent implements OnInit {

  usuarioId!: number
  ingresoId!: number
  pacientesId! :number
  patologiaData!: Patologia

  constructor(private patologia_service: PatologiaApoService,
              private route: ActivatedRoute) {
    this.patologiaData = {} as Patologia;
    this.route.params.subscribe(params => this.usuarioId = params.usuarioId)
    this.route.params.subscribe(params => this.ingresoId = params.ingresoId)
    this.route.params.subscribe(params => this.pacientesId = params.pacientesId)
  }

  ngOnInit(): void {
    console.log('Component Patologia, este es el User Id: ', this.usuarioId)
    console.log('Component Patologia, este es el Ingresos Id: ', this.ingresoId)
    console.log('Component Patologia, este es el Pacientes Id: ', this.pacientesId)
  }

  addPatologia(){
    const newPatologia ={
      restultado : this.patologiaData.restultado,
      nombreExamen : this.patologiaData.nombreExamen,
      fechaExamen : this.patologiaData.fechaExamen,
    }

    this.patologia_service.addPatologias(this.pacientesId, newPatologia).subscribe((response:any) =>{
      console.log('Se ingreso correctamente los datos => ', newPatologia)
    })
  }

}
