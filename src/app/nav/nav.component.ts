import { Component, OnInit } from '@angular/core';
import {Usuario} from "../model/Usuario";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioApiService} from "../services/usuario-api.service";
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  usuarioData: Usuario;
  usuarioId: number = 0;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
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
