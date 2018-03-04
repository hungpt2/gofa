import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';

import { LichsuNaptienComponent } from './lichsunaptien.component';
import { LichsuNaptienRoutingModule } from './lichsunaptien-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LichsuNaptienRoutingModule,
    ChartsModule
  ],
  declarations: [ LichsuNaptienComponent ]
})
export class LichsuNaptienModule { }
