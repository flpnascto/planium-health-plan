import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalInfoComponent } from './proposal-info.component';

describe('ProposalInfoComponent', () => {
  let component: ProposalInfoComponent;
  let fixture: ComponentFixture<ProposalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProposalInfoComponent]
    });
    fixture = TestBed.createComponent(ProposalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
