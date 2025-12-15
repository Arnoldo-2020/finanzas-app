import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RevenueMetrics } from '../../models/revenue-metrics';
import { NgApexchartsModule, ApexOptions } from "ng-apexcharts";

@Component({
  selector: 'app-revenue-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './revenue-chart.component.html',
  styleUrl: './revenue-chart.component.scss'
})
export class RevenueChartComponent implements OnChanges {

  @Input() metrics!: RevenueMetrics[];

  chartOptions:Partial<ApexOptions> = {}

  ngOnChanges(changes: SimpleChanges): void {

    if(changes['metrics'] && changes['metrics'].currentValue){
      this.updateChart();
    }

  }

  updateChart(){
    const categories = this.metrics.map(items => items.label);

    const data = this.metrics.map(data => data.value);

    this.chartOptions = {
      series: [
        {
          name: "Ventas",
          data: data
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      xaxis: {
        categories: categories
      }
    }
  }
}
