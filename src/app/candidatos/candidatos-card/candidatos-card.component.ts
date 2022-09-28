import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/models/Candidato';
import { CandidateProfileComponent } from 'src/app/perfil/candidate-profile/candidate-profile.component';

@Component({
  selector: 'app-candidatos-card',
  templateUrl: './candidatos-card.component.html',
  styleUrls: ['./candidatos-card.component.scss'],
})
export class CandidatoCardComponent implements OnInit {
  @Input() candidato: Candidato = new Candidato();
  @Output() resultEmitter = new EventEmitter();

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}
  vote() {}
  showDetail() {
    this.dialog.open(CandidateProfileComponent, {
      width: '80vw',
      height: '80vh',
      data: {
        candidate: this.candidato,
      },
    });
  }
}
