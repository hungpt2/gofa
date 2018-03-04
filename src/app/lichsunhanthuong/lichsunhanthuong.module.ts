import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';

import { LichsuNhanthuongComponent } from './lichsunhanthuong.component';
import { LichsuNhanthuongRoutingModule } from './lichsunhanthuong-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LichsuNhanthuongRoutingModule,
    ChartsModule
  ],
  declarations: [ LichsuNhanthuongComponent ]
})
export class LichsuNhanthuongModule { }
