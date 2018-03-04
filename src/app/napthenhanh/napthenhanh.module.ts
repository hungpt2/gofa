import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';

import { NaptheNhanhComponent } from './napthenhanh.component';
import { NaptheNhanhRoutingModule } from './napthenhanh-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NaptheNhanhRoutingModule,
    ChartsModule
  ],
  declarations: [ NaptheNhanhComponent ]
})
export class NaptheNhanhModule { }
