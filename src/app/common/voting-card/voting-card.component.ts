import { Component, Input, OnInit } from '@angular/core';
import { EleccionVoting } from 'src/app/models/ElectionVoting';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.scss'],
})
export class VotingCardComponent implements OnInit {
  constructor() {}
  @Input() election: EleccionVoting = new EleccionVoting(
    '',
    '',
    new Date(),
    true
  );
  ngOnInit(): void {}
}
