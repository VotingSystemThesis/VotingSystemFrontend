import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublerowComponent } from './doublerow.component';

describe('DoublerowComponent', () => {
  let component: DoublerowComponent;
  let fixture: ComponentFixture<DoublerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoublerowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
