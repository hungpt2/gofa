import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { LichsuTieuComponent } from './lichsutieu.component';

const routes: Routes = [
  {
    path: '',
    component: LichsuTieuComponent,
    data: {
      title: 'Lịch sử Tiêu'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LichsuTieuRoutingModule {}
