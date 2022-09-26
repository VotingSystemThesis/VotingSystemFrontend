import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './authinicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { VotingCardComponent } from './common/voting-card/voting-card.component';
import { SinglerowComponent } from './common/singlerow/singlerow.component';
import { DoublerowComponent } from './common/doublerow/doublerow.component';
import { VotacionespasadasComponent } from './votacionespasadas/votacionespasadas.component';
import { DatePipe } from '@angular/common';
import { FingerprintComponent } from './fingerprint/fingerprint.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthGuard } from './guards/auth.guard';
import { PartidoCardComponent } from './core/partido-card/partido-card.component';
import { VotingConfirmationComponent } from './common/voting-confirmation/voting-confirmation.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { CandidatoCardComponent } from './candidatos/candidatos-card/candidatos-card.component';
import { PartidosComponent } from './core/partidos/partidos.component';
import { VoteConfirmComponent } from './core/vote-confirm/vote-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    HomeComponent,
    NavComponent,
    PerfilComponent,
    VotingCardComponent,
    SinglerowComponent,
    DoublerowComponent,
    VotacionespasadasComponent,
    FingerprintComponent,
    PartidoCardComponent,
    VotingConfirmationComponent,
    CandidatosComponent,
    PartidosComponent,
    PartidoCardComponent,
    CandidatoCardComponent,
    VoteConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatListModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
  ],
  providers: [AuthGuard, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
