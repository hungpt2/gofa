import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';

import { LichsuTieuComponent } from './lichsutieu.component';
import { LichsuTieuRoutingModule } from './lichsutieu-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LichsuTieuRoutingModule,
    ChartsModule
  ],
  declarations: [ LichsuTieuComponent ]
})
export class LichsuTieuModule { }
