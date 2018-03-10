import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AlertModule } from '../common/alert.module';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AlertModule,
    LoginRoutingModule,
    FormsModule,
    ChartsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
