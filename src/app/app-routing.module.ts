import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {LoginComponent} from "./login/login.component";
import {UsuarioComponent} from "./usuario/usuario.component";
import {PerfilComponent} from "./perfil/perfil.component";
import {PacientesComponent} from "./pacientes/pacientes.component";
import {IngresarPacienteComponent} from "./ingresar-paciente/ingresar-paciente.component";
import {
  InformacionPacienteIngresadoComponent
} from "./informacion-paciente-ingresado/informacion-paciente-ingresado.component";
import {PatologiaComponent} from "./patologia/patologia.component";
import {AddPatologiaComponent} from "./add-patologia/add-patologia.component";

const routes: Routes = [
  { path:'', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'usuario/:usuarioId', component: UsuarioComponent },
  { path: 'usuario/:usuarioId/perfil', component: PerfilComponent },
  { path: 'usuario/:usuarioId/pacientes', component: PacientesComponent },
  { path: 'pacientes/:pacientesId/usuario/:usuarioId/ingresos', component: IngresarPacienteComponent },
  { path: 'usuario/:usuarioId/ingreso/:ingresoId', component: InformacionPacienteIngresadoComponent },
  { path: 'usuario/:usuarioId/ingreso/:ingresoId/pacientes/:pacientesId/allPatologia', component: PatologiaComponent },
  { path: 'usuario/:usuarioId/ingreso/:ingresoId/pacientes/:pacientesId/addPatologia', component: AddPatologiaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
