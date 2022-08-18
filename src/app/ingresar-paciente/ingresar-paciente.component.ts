import { Component, OnInit } from '@angular/core';
import {IngresosApiService} from "../services/ingresos-api.service";
import {ActivatedRoute} from "@angular/router";
import {Ingresos} from "../model/Ingresos";

@Component({
  selector: 'app-ingresar-paciente',
  templateUrl: './ingresar-paciente.component.html',
  styleUrls: ['./ingresar-paciente.component.css']
})
export class IngresarPacienteComponent implements OnInit {

  pacientesId! :number
  usuarioId!: number
  ingresoData!: Ingresos

  constructor(private ingreso_service: IngresosApiService,
              private route: ActivatedRoute) {
    this.ingresoData = {} as Ingresos;
    this.route.params.subscribe(params => this.pacientesId = params.pacientesId)
    this.route.params.subscribe(params => this.usuarioId = params.usuarioId)
  }

  ngOnInit(): void {
    console.log('Historial Medico del paciente => ', this.pacientesId)
    console.log('Codigo del medico => ', this.usuarioId)
  }

  addIngresante(){
    const newIngresante ={
      fechaIngreso : this.ingresoData.fechaIngreso,
      condicion : this.ingresoData.condicion,
      numeroCama : this.ingresoData.numeroCama,
      observaciones : this.ingresoData.observaciones,
    }

    this.ingreso_service.addIngresos(this.pacientesId, this.usuarioId, newIngresante).subscribe((response:any) =>{
      console.log('Se ingreso correctamente los datos => ', newIngresante)
    })
  }
}
