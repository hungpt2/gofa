import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { GiftCodeComponent } from './giftcode.component';

const routes: Routes = [
  {
    path: '',
    component: GiftCodeComponent,
    data: {
      title: 'Gift Code'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiftCodeRoutingModule {}
