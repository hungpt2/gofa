import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NaptheNhanhComponent } from './napthenhanh.component';
import { AlertModule } from '../common/alert.module';
import { NaptheNhanhRoutingModule } from './napthenhanh-routing.module';

@NgModule({
  imports: [
    AlertModule,
    CommonModule,
    FormsModule,
    NaptheNhanhRoutingModule,
    ChartsModule
  ],
  declarations: [ NaptheNhanhComponent ]
})
export class NaptheNhanhModule { }
