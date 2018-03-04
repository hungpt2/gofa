import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';

import { NaptheComponent } from './napthe.component';
import { NaptheRoutingModule } from './napthe-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NaptheRoutingModule,
    ChartsModule
  ],
  declarations: [ NaptheComponent ]
})
export class NaptheModule { }
