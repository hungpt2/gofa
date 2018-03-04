import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { LichsuNaptienComponent } from './lichsunaptien.component';

const routes: Routes = [
  {
    path: '',
    component: LichsuNaptienComponent,
    data: {
      title: 'Lịch sử Nạp tiền'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LichsuNaptienRoutingModule {}
