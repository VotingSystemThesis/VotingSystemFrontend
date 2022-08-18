import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatologiaComponent } from './add-patologia.component';

describe('AddPatologiaComponent', () => {
  let component: AddPatologiaComponent;
  let fixture: ComponentFixture<AddPatologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
