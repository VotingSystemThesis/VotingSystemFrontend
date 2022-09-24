import { Component, OnInit } from '@angular/core';
import { EleccionVoting } from '../models/ElectionVoting';
import { Votante } from '../models/Voter';
import { VoterService } from '../services/voter.service';

@Component({
  selector: 'app-votacionespasadas',
  templateUrl: './votacionespasadas.component.html',
  styleUrls: ['./votacionespasadas.component.scss'],
})
export class VotacionespasadasComponent implements OnInit {
  estado: boolean | undefined;
  constructor(private voterService: VoterService) {}
  pastElections: EleccionVoting[] = [];
  voter?: Votante;
  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    let id = localStorage.getItem('votanteId');
    this.voterService.getVoterById(id!).subscribe((data: any) => {
      this.voter = data;
      this.voterService
        .getPastElections(this.voter?.city!)
        .subscribe((data: any) => {
          this.pastElections = data;
        });
    });
  }
}
