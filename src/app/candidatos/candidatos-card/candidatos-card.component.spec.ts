import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosCardComponent } from './candidatos-card.component';

describe('CandidatosCardComponent', () => {
  let component: CandidatosCardComponent;
  let fixture: ComponentFixture<CandidatosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatosCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
