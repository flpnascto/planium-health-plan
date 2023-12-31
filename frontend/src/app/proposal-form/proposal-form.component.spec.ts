import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalFormComponent } from './proposal-form.component';

describe('ProposalFormComponent', () => {
  let component: ProposalFormComponent;
  let fixture: ComponentFixture<ProposalFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProposalFormComponent]
    });
    fixture = TestBed.createComponent(ProposalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
