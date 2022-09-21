import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/models/Partido';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.scss'],
})
export class PartidosComponent implements OnInit {
  constructor() {}
  partidos: Partido[] = [];

  estado = true;
  ngOnInit(): void {}
}
