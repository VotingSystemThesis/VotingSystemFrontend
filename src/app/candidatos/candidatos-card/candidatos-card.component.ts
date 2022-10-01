import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Candidato } from 'src/app/models/Candidato';
import { CandidateProfileComponent } from 'src/app/perfil/candidate-profile/candidate-profile.component';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidatos-card',
  templateUrl: './candidatos-card.component.html',
  styleUrls: ['./candidatos-card.component.scss'],
})
export class CandidatoCardComponent implements OnInit {
  @Input() candidato: Candidato = new Candidato();
  @Output() resultEmitter = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private candidateService: CandidateService
  ) {}
  imageUrl = '';

  ngOnInit(): void {
    this.candidateService.getProfilePic(this.candidato?.id!).subscribe(
      (response: any) => {
        //console.log(response);
      },
      (err) => {
        if (err.status == 200) {
          this.imageUrl = err.url;
        } else {
          this.imageUrl = '';
        }
      }
    );
  }
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
