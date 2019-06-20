import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTodayComponent } from './expense-today.component';

describe('ExpenseTodayComponent', () => {
  let component: ExpenseTodayComponent;
  let fixture: ComponentFixture<ExpenseTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
