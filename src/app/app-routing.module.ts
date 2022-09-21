import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { InicioComponent } from './authinicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { VotacionespasadasComponent } from './votacionespasadas/votacionespasadas.component';
import { AuthGuard } from './guards/auth.guard';
import { CandidatosComponent } from './candidatos/candidatos.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'verificacion', component: InicioComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'candidates',
    component: CandidatosComponent,
    canActivate: [AuthGuard],
  },

  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  {
    path: 'VotacionesPasadas',
    component: VotacionespasadasComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
