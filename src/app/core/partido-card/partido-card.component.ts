import { Component, Input, OnInit } from '@angular/core';
import { Partido } from 'src/app/models/Partido';

@Component({
  selector: 'app-partido-card',
  templateUrl: './partido-card.component.html',
  styleUrls: ['./partido-card.component.scss'],
})
export class PartidoCardComponent implements OnInit {
  constructor() {}
  @Input() partido: Partido = new Partido(
    'Test',
    'Fuerza Popular',
    new Date(),
    true
  );
  ngOnInit(): void {}
  vote() {}
}
