import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';

import { NaptheComponent } from './napthe.component';
import { NaptheRoutingModule } from './napthe-routing.module';

import { FormsModule } from '@angular/forms';
import { AlertModule } from '../common/alert.module';

@NgModule({
  imports: [
    AlertModule,
    FormsModule,
    CommonModule,
    NaptheRoutingModule,
    ChartsModule
  ],
  declarations: [ NaptheComponent ]
})
export class NaptheModule { }
