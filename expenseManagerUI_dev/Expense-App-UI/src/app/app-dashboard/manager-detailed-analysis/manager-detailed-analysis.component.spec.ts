import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDetailedAnalysisComponent } from './manager-detailed-analysis.component';

describe('ManagerDetailedAnalysisComponent', () => {
  let component: ManagerDetailedAnalysisComponent;
  let fixture: ComponentFixture<ManagerDetailedAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerDetailedAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDetailedAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
