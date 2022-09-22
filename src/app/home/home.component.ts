import { Component, OnInit } from '@angular/core';
import { Votante } from '../models/Voter';
import { VoterService } from '../services/voter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private voterService: VoterService) {}
  voter?: Votante;

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    let id = localStorage.getItem('votanteId');
    this.voterService.getVoterById(id!).subscribe((data: any) => {
      this.voter = data;
    });
  }
}
