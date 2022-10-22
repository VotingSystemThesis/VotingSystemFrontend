import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FingerprintComponent } from 'src/app/fingerprint/fingerprint.component';
import { Candidato } from 'src/app/models/Candidato';
import { EleccionVoting } from 'src/app/models/ElectionVoting';
import { Votante } from 'src/app/models/Voter';
import { VoterService } from 'src/app/services/voter.service';
import { create, toCanvas } from 'qrcode';

@Component({
  selector: 'app-vote-confirm',
  templateUrl: './vote-confirm.component.html',
  styleUrls: ['./vote-confirm.component.scss'],
})
export class VoteConfirmComponent implements OnInit {
  @ViewChild('myCanvas', { static: false, read: ElementRef })
  myCanvas?: ElementRef<HTMLCanvasElement>;

  context?: CanvasRenderingContext2D;

  @Input() candidate?: Candidato;
  voter?: Votante;
  election?: EleccionVoting;
  voted = false;
  constructor(
    public dialogRef: MatDialogRef<FingerprintComponent>,
    private snackBar: MatSnackBar,
    private voterService: VoterService,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}

  ngAfterViewInit(): void {
    this.context = this.myCanvas!.nativeElement.getContext('2d')!;
  }

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
    this.voted = true;
    this.voterService.vote(body).subscribe((data: any) => {
      var canvas = document.getElementById('canvas');
      toCanvas(canvas, data.id, { version: 10 });
      this.snackBar.open('Se ha registrado su voto correctamente', '', {
        duration: 2000,
        panelClass: ['green-snackbar'],
      });
    });
  }
  cancel() {
    this.dialogRef.close();
  }
}
