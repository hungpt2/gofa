import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'nap-the',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
    ]
  },
  {
    path: 'gofa',
    loadChildren: './main/main.module#MainModule'
  },
  {
    path: 'nap-the-nhanh',
    loadChildren: './main/main.module#MainModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
