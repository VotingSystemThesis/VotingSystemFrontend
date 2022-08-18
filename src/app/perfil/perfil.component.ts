import { Component, OnInit } from '@angular/core';
import {Usuario} from "../model/Usuario";
import {BreakpointObserver} from "@angular/cdk/layout";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioApiService} from "../services/usuario-api.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuarioData: Usuario;
  usuarioId: number = 0;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private usuario_service : UsuarioApiService) {
    this.usuarioData = {} as Usuario;
    this.route.params.subscribe(params=>this.usuarioId=params.usuarioId)
  }
  ngOnInit(): void {
    this.getUsuariosById();
    console.log('Este es el user data: ', this.usuarioId)
  }

  getUsuariosById(){
    this.usuario_service.getUsuarioById(this.usuarioId)
      .subscribe((response: any) => {
        this.usuarioData = response;
        console.log('probando: ', this.usuarioData);
      });
  }

}
