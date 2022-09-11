import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  estado: boolean | undefined;
  constructor() { }

  ngOnInit(): void {
    this.estado = false;
  }
}
