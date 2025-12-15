import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { RevenueMetrics } from '../models/revenue-metrics';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  ventas_enero:RevenueMetrics[] =[
    {
      label: 'laptop',
      value: 10,
      date: new Date('2025-11-10')
    }
  ]

  constructor() { }

  getRevenueMetrics(){
    return of(this.ventas_enero)
  }

}
