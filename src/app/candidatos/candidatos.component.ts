import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Candidato } from '../models/Candidato';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss'],
})
export class CandidatosComponent implements OnInit {
  constructor(private candidateService: CandidateService) {}
  estado = true;
  candidatos: Candidato[] = [];

  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.candidateService.getAllCandidates().subscribe((data: any) => {
      this.candidatos = data;
    });
  }
}
