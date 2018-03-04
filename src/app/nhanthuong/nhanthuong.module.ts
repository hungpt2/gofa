import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { NhanthuongComponent } from './nhanthuong.component';
import { NhanthuongRoutingModule } from './nhanthuong-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NhanthuongRoutingModule,
    ChartsModule
  ],
  declarations: [ NhanthuongComponent ]
})
export class NhanthuongModule { }
