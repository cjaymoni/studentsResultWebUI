import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

