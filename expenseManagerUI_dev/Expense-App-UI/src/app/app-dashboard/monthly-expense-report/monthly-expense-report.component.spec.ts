import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyExpenseReportComponent } from './monthly-expense-report.component';

describe('MonthlyExpenseReportComponent', () => {
  let component: MonthlyExpenseReportComponent;
  let fixture: ComponentFixture<MonthlyExpenseReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyExpenseReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyExpenseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
