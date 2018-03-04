import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { NhanthuongComponent } from './nhanthuong.component';

const routes: Routes = [
  {
    path: '',
    component: NhanthuongComponent,
    data: {
      title: 'Đổi Thưởng'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NhanthuongRoutingModule {}
