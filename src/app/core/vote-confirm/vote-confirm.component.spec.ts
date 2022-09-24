import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteConfirmComponent } from './vote-confirm.component';

describe('VoteConfirmComponent', () => {
  let component: VoteConfirmComponent;
  let fixture: ComponentFixture<VoteConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
