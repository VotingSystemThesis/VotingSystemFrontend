import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglerowComponent } from './singlerow.component';

describe('SinglerowComponent', () => {
  let component: SinglerowComponent;
  let fixture: ComponentFixture<SinglerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglerowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
