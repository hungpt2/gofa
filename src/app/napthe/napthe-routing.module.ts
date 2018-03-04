import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { NaptheComponent } from './napthe.component';

const routes: Routes = [
  {
    path: '',
    component: NaptheComponent,
    data: {
      title: 'Nạp thẻ'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaptheRoutingModule {}
