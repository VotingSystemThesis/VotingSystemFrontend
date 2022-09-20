import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LoginService } from '../services/login.service';
import { Votante } from '../models/Voter';

/** Error when invalid control is dirty, touched, or submitted. */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    dni: new FormControl('', Validators.required),
    emissionDate: new FormControl('', Validators.required),
  });
  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    //this.getAllUsers()
  }

  submitForm() {
    if (this.loginForm.valid) {
      let newEmissionDate = this.loginForm.get('emissionDate')?.value;
      let body = {
        dni: this.loginForm.get('dni')?.value,
        emissionDate: this.datePipe.transform(newEmissionDate, 'dd-MM-yyyy'),
      };

      this.loginService.getAllVoters().subscribe((data: any) => {
        let response = this.loginService.validateVoter(data, body);
        if (response) {
          this.router.navigate(['/verificacion']);
        }
      });
    } else {
      console.log('Not Valid');
    }
  }
}
