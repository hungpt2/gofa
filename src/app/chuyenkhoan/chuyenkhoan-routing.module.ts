import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ChuyenkhoanComponent } from './chuyenkhoan.component';

const routes: Routes = [
  {
    path: '',
    component: ChuyenkhoanComponent,
    data: {
      title: 'Chuyển khoản'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChuyenkhoanRoutingModule {}
