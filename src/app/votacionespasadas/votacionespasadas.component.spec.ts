import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotacionespasadasComponent } from './votacionespasadas.component';

describe('VotacionespasadasComponent', () => {
  let component: VotacionespasadasComponent;
  let fixture: ComponentFixture<VotacionespasadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotacionespasadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotacionespasadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
