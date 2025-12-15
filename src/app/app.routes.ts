import { Routes } from '@angular/router';
import { DashboardHomeComponent } from './features/dashboard/pages/dashboard-home/dashboard-home.component';
import { authGuard } from './core/auth/guards/auth.guard';
import { LoginComponent } from './features/auth/pages/login/login.component';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./features/dashboard/pages/dashboard-home/dashboard-home.component').
    then(m => m.DashboardHomeComponent),
    canActivate: [authGuard]
  },
  {
    path:'login',
    component: LoginComponent
  }
];
