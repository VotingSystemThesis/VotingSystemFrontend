import { Component, Input, OnInit } from '@angular/core';
import { MatDateFormats } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Candidato } from 'src/app/models/Candidato';
import { Partido } from 'src/app/models/Partido';
import { VoteConfirmComponent } from '../vote-confirm/vote-confirm.component';

@Component({
  selector: 'app-partido-card',
  templateUrl: './partido-card.component.html',
  styleUrls: ['./partido-card.component.scss'],
})
export class PartidoCardComponent implements OnInit {
  electionId = '';
  constructor(private dialog: MatDialog, private route: ActivatedRoute) {}
  @Input() candidato: Candidato = new Candidato();
  ngOnInit(): void {
    this.electionId = this.route.snapshot.params['id'];
  }
  vote() {
    this.dialog
      .open(VoteConfirmComponent, {
        width: '30vw',
        height: '50vh',
        data: {
          personToVote: this.candidato,
          electionId: this.electionId,
        },
      })
      .afterClosed();
  }
}
