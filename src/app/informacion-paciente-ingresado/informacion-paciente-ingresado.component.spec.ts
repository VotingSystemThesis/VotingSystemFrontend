import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPacienteIngresadoComponent } from './informacion-paciente-ingresado.component';

describe('InformacionPacienteIngresadoComponent', () => {
  let component: InformacionPacienteIngresadoComponent;
  let fixture: ComponentFixture<InformacionPacienteIngresadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionPacienteIngresadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPacienteIngresadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
