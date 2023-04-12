import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'cal-modal',
    loadComponent: () => import('./pages/cal-modal/cal-modal.page').then( m => m.CalModalPage)
  },
];
