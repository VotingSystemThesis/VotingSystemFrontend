import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { Candidato } from 'src/app/models/Candidato';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss'],
})
export class CandidateProfileComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CandidateProfileComponent>,
    private candidateService: CandidateService,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}
  estado?: boolean = true;
  candidate?: Candidato;
  imageUrl = '';
  ngOnInit(): void {
    this.candidate = this.data.candidate;
    this.candidateService.getProfilePic(this.candidate?.id!).subscribe(
      (response: any) => {
        //console.log(response);
      },
      (err) => {
        if (err.status == 200) {
          this.imageUrl = err.url;
        }
      }
    );
  }
  getAge() {
    return moment()
      .diff(moment(this.candidate?.birthDate, 'DD-MM-YYYY'), 'years')
      .toString();
  }
}
