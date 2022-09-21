import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FingerprintService } from '../services/fingerprint.service';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.scss'],
})
export class FingerprintComponent implements OnInit {
  constructor(
    private fingerprintService: FingerprintService,
    public dialogRef: MatDialogRef<FingerprintComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}
  isLoading = true;
  testing: any = 'go';
  time: any;
  ngOnInit(): void {
    let dni = localStorage.getItem('dni');
    this.fingerprintService.validateFingerprint(dni!).subscribe((data: any) => {
      this.dialogRef.close(data);
    });
    this.countFourSeconds();
  }
  countFourSeconds() {
    setTimeout(() => {}, 100);
    this.time = setInterval(() => {
      this.testing = 'stop';
      setTimeout(() => {
        this.testing = 'go';
      }, 800);
    }, 4000);
  }
}
