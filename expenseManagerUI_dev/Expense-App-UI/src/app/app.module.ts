import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { AppLogoutComponent } from './app-logout/app-logout.component';
import { RunningBalanceComponent } from './app-dashboard/running-balance/running-balance.component';
import { ExpenseTodayComponent } from './app-dashboard/expense-today/expense-today.component';
import { MonthlyExpenseReportComponent } from './app-dashboard/monthly-expense-report/monthly-expense-report.component';
import { ManagerDetailedAnalysisComponent } from './app-dashboard/manager-detailed-analysis/manager-detailed-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppDashboardComponent,
    AppLogoutComponent,
    RunningBalanceComponent,
    ExpenseTodayComponent,
    MonthlyExpenseReportComponent,
    ManagerDetailedAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
