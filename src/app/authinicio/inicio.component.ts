import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FingerprintComponent } from '../fingerprint/fingerprint.component';
import { FingerprintService } from '../services/fingerprint.service';
import { LoginService } from '../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private fingerprintService: FingerprintService
  ) {}

  ngOnInit(): void {}

  validateFingerprint() {
    if (this.loginService.hasDni()) {
      this.dialog
        .open(FingerprintComponent, {
          width: '50vw',
          height: '80vh',
        })
        .afterClosed()
        .subscribe((response: any) => {
          if (response) {
            this.snackBar.open('Ha ingresado correctamente', '', {
              duration: 2000,
              panelClass: ['green-snackbar'],
            });
            localStorage.setItem('isAuthenticated', 'true');
            this.router.navigate(['/home']);
          } else {
            this.snackBar.open(
              'Ha ocurrido un error en su validación, Reintente',
              '',
              {
                duration: 2000,
                panelClass: ['red-snackbar'],
              }
            );
          }
        });
    }
  }
}
