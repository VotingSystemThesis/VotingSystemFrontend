import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/models/Candidato';

@Component({
  selector: 'app-candidatos-card',
  templateUrl: './candidatos-card.component.html',
  styleUrls: ['./candidatos-card.component.scss'],
})
export class CandidatoCardComponent implements OnInit {
  @Input() candidato: Candidato = new Candidato();
  @Output() resultEmitter = new EventEmitter();

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
  }
  vote() {}
}
