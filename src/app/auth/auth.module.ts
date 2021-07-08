import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ButtonComponent } from '../components/button/button.component';
import { Button2Component } from '../components/button2/button2.component';


@NgModule({
  declarations: [ButtonComponent, Button2Component],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [ButtonComponent, Button2Component]
})
export class AuthModule { }
