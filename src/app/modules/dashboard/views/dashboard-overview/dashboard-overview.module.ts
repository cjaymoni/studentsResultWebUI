import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardOverviewComponent } from './dashboard-overview.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DashboardOverviewComponent],
  exports: [DashboardOverviewComponent],
})
export class DashboardOverviewModule {}

