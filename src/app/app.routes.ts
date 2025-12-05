import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/homepage/homepage.component').then((m) => m.HomepageComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'affiliate-link',
        loadComponent: () =>
          import('./pages/affiliate-link/affiliate-link.component').then(
            (m) => m.AffiliateLinkComponent,
          ),
      },
      // Add other routes here as needed
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];
