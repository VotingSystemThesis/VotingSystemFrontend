import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-singlerow',
  templateUrl: './singlerow.component.html',
  styleUrls: ['./singlerow.component.scss'],
})
export class SinglerowComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
