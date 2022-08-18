import {Component, OnInit} from '@angular/core';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  codigoexist!:string
  dniexist!:string

  validador=false
  ingresante!:number;

  constructor(
              private router: Router) { }

  ngOnInit(): void {
    //this.getAllUsers()
  }

  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);


  getAllUsers():void{
    /*
    this.usuarioApi.getAll().subscribe((response: any) =>{
      console.log('Se Cargaron todos los usuarios', response.content)

      for(var i=0;i<response.content.length;i++){
        if(response.content[i].codigoMedico==this.codigoexist &&
          response.content[i].dni==this.dniexist){
          this.validador=true;
          this.ingresante= response.content[i].codigoMedico;
          console.log('El ingresante for es: ', this.ingresante);
        }

      }
      console.log('El ingresante es: ', this.ingresante);

      if(this.validador){
        this.router.navigate([`usuario/${this.ingresante}`])
          .then(() => console.clear());
      }else {
        alert("Datos incorrectos intentelo nuevamente")
      }
      console.clear();
    })

     */
  }
  matcher = new MyErrorStateMatcher();
}
