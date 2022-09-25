import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Candidato } from 'src/app/models/Candidato';
import { EleccionVoting } from 'src/app/models/ElectionVoting';
import { Votante } from 'src/app/models/Voter';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.scss'],
})
export class PartidosComponent implements OnInit {
  constructor(
    private candidateService: CandidateService,
    private route: ActivatedRoute
  ) {}
  candidatos: Candidato[] = [];
  voter?: Votante;
  actualElections?: EleccionVoting[] = [];

  estado = true;
  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    let electionId = this.route.snapshot.params['id'];
    this.candidateService
      .getCandidateByElection(electionId)
      .subscribe((data: any) => {
        this.candidatos = data;
      });
  }
}
