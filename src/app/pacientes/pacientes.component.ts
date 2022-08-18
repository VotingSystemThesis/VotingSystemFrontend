import { Component, OnInit } from '@angular/core';
import {LoginApiService} from "../services/login-api.service";
import {PacientesApiService} from "../services/pacientes-api.service";
import {Ingresos} from "../model/Ingresos";
import {Pacientes} from "../model/Pacientes";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacientes: Array<Pacientes> = [];
  usuarioId: number = 0;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private pacientesApi: PacientesApiService) {
    this.route.params.subscribe(params=>this.usuarioId=params.usuarioId)
  }

  ngOnInit(): void {
    this.getAllPacientes()
  }

  getAllPacientes():void{
    this.pacientesApi.getAllPacientes().subscribe((response: any) =>{
      this.pacientes = response.content;
      console.log('Se Cargaron todos los pacientes', this.pacientes)
    })
  }

}
