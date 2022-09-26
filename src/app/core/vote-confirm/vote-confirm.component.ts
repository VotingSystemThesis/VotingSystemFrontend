import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route } from '@angular/router';
import { FingerprintComponent } from 'src/app/fingerprint/fingerprint.component';
import { Candidato } from 'src/app/models/Candidato';
import { EleccionVoting } from 'src/app/models/ElectionVoting';
import { Votante } from 'src/app/models/Voter';
import { VoterService } from 'src/app/services/voter.service';

@Component({
  selector: 'app-vote-confirm',
  templateUrl: './vote-confirm.component.html',
  styleUrls: ['./vote-confirm.component.scss'],
})
export class VoteConfirmComponent implements OnInit {
  @Input() candidate?: Candidato;
  voter?: Votante;
  election?: EleccionVoting;
  constructor(
    public dialogRef: MatDialogRef<FingerprintComponent>,
    private snackBar: MatSnackBar,
    private voterService: VoterService,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}

  ngOnInit(): void {
    this.candidate = this.data.personToVote;
    let id = localStorage.getItem('votanteId');
    let electionId = this.data.electionId;

    this.voterService.getVoterById(id!).subscribe((data: any) => {
      this.voter = data;
      this.voterService.getElectionById(electionId).subscribe((data: any) => {
        this.election = data;
      });
    });
  }
  vote() {
    let body = {
      voter: this.voter,
      candidateList: [this.candidate],
      voting: this.election,
    };
    this.voterService.vote(body).subscribe((data: any) => {
      this.snackBar.open('Se ha registrado su voto correctamente', '', {
        duration: 2000,
        panelClass: ['green-snackbar'],
      });
      this.dialogRef.close(data);
    });
  }
  cancel() {
    this.dialogRef.close();
  }
}
