import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';

import { GiftCodeComponent } from './giftcode.component';
import { GiftCodeRoutingModule } from './giftcode-routing.module';

import { AlertModule } from '../common/alert.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlertModule,
    GiftCodeRoutingModule,
    ChartsModule
  ],
  declarations: [ GiftCodeComponent ]
})
export class GiftCodeModule { }
