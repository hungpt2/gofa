import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';

import { GiftCodeComponent } from './giftcode.component';
import { GiftCodeRoutingModule } from './giftcode-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GiftCodeRoutingModule,
    ChartsModule
  ],
  declarations: [ GiftCodeComponent ]
})
export class GiftCodeModule { }
