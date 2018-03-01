import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    MainRoutingModule,
    ChartsModule
  ],
  declarations: [ MainComponent ]
})
export class MainModule { }
