import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'gofa',
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
        loadChildren: './napthe/napthe.module#NaptheModule'
      },
    ]
  },
  {
    path: 'gofa',
    loadChildren: './main/main.module#MainModule'
  },
  {
    path: 'nap-the-nhanh',
    loadChildren: './napthenhanh/napthenhanh.module#NaptheNhanhModule'
  },
  {
    path: 'dang-nhap',
    loadChildren: './login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
