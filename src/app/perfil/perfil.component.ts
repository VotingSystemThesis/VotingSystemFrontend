import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Votante } from '../models/Voter';
import { VoterService } from '../services/voter.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  estado?: boolean;
  constructor(private voterService: VoterService, private datePipe: DatePipe) {}
  voter?: Votante;

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    let id = localStorage.getItem('votanteId');
    this.voterService.getVoterById(id!).subscribe((data: any) => {
      this.voter = data;
      this.estado = true;
    });
  }
  getAge() {
    return moment()
      .diff(moment(this.voter?.birthDate, 'DD-MM-YYYY'), 'years')
      .toString();
  }
}
