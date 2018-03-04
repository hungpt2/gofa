import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { NaptheNhanhComponent } from './napthenhanh.component';

const routes: Routes = [
  {
    path: '',
    component: NaptheNhanhComponent,
    data: {
      title: 'Main'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaptheNhanhRoutingModule {}
