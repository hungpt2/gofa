import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { ChuyenkhoanComponent } from './chuyenkhoan.component';
import { ChuyenkhoanRoutingModule } from './chuyenkhoan-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    ChuyenkhoanRoutingModule,
    ChartsModule
  ],
  declarations: [ ChuyenkhoanComponent ]
})
export class ChuyenkhoanModule { }
