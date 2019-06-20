import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningBalanceComponent } from './running-balance.component';

describe('RunningBalanceComponent', () => {
  let component: RunningBalanceComponent;
  let fixture: ComponentFixture<RunningBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
