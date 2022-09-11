import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votacionespasadas',
  templateUrl: './votacionespasadas.component.html',
  styleUrls: ['./votacionespasadas.component.scss']
})
export class VotacionespasadasComponent implements OnInit {
  estado: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
    this.estado = false;
  }

}
