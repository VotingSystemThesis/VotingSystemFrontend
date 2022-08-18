import { Component, OnInit } from '@angular/core';
import {IngresosApiService} from "../services/ingresos-api.service";
import {ActivatedRoute} from "@angular/router";
import {Ingresos} from "../model/Ingresos";

@Component({
  selector: 'app-informacion-paciente-ingresado',
  templateUrl: './informacion-paciente-ingresado.component.html',
  styleUrls: ['./informacion-paciente-ingresado.component.css']
})
export class InformacionPacienteIngresadoComponent implements OnInit {

  usuarioId! :number;
  ingresoId! : number;
  pacientesId! : number;
  ingresoData!: Ingresos

  constructor(private ingreso_service: IngresosApiService,
              private route: ActivatedRoute) {
    this.ingresoData = {} as Ingresos;
    this.route.params.subscribe(params => this.usuarioId = params.usuarioId)
    this.route.params.subscribe(params => this.ingresoId = params.ingresoId)
  }

  ngOnInit(): void {
    console.log('Codigo del medico => ', this.usuarioId)
    console.log('Id de Ingreso => ', this.ingresoId)
    this.getIngresoById();
  }

  getIngresoById(){
    this.ingreso_service.getIngresoById(this.ingresoId)
      .subscribe((response: any) => {
        this.ingresoData = response;
        console.log('Ingreso: ', this.ingresoData);
      });
  }

}
