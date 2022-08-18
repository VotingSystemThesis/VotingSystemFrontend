import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';


import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {RouterModule} from "@angular/router";
import { UsuarioComponent } from './usuario/usuario.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import { NavComponent } from './nav/nav.component';
import {MatListModule} from "@angular/material/list";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfilComponent } from './perfil/perfil.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { IngresarPacienteComponent } from './ingresar-paciente/ingresar-paciente.component';
import { InformacionPacienteIngresadoComponent } from './informacion-paciente-ingresado/informacion-paciente-ingresado.component';
import { PatologiaComponent } from './patologia/patologia.component';
import { AddPatologiaComponent } from './add-patologia/add-patologia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    NavComponent,
    PerfilComponent,
    PacientesComponent,
    IngresarPacienteComponent,
    InformacionPacienteIngresadoComponent,
    PatologiaComponent,
    AddPatologiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
