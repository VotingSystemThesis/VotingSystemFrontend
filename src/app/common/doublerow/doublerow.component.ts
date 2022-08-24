import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doublerow',
  templateUrl: './doublerow.component.html',
  styleUrls: ['./doublerow.component.scss'],
})
export class DoublerowComponent implements OnInit {
  @Input() title1: string = '';
  @Input() text1: string = '';

  @Input() title2: string = '';
  @Input() text2: string = '';
  constructor() {}

  ngOnInit(): void {}
}
