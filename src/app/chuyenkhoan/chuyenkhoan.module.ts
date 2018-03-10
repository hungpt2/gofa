import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { ChuyenkhoanComponent } from './chuyenkhoan.component';
import { ChuyenkhoanRoutingModule } from './chuyenkhoan-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertModule } from '../common/alert.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlertModule,
    TabsModule.forRoot(),
    ChuyenkhoanRoutingModule,
    ChartsModule
  ],
  declarations: [ ChuyenkhoanComponent ]
})
export class ChuyenkhoanModule { }
