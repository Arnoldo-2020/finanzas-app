import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { RevenueMetrics } from '../../models/revenue-metrics';
import { RevenueChartComponent } from '../../components/revenue-chart/revenue-chart.component';
import { CurrencyPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [RevenueChartComponent, CurrencyPipe, TranslateModule],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})
export class DashboardHomeComponent implements OnInit{

  ventas!:RevenueMetrics[];
  totalRevenue!: number;

  constructor(private dashboardService: DashboardService){}

  ngOnInit(): void {

    this.dashboardService.getRevenueMetrics().subscribe(
      data => {

      this.ventas = data;

      this.totalRevenue = this.ventas.reduce((total, venta) => total + venta.value, 0);
    });


  }

}
