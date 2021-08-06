import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from '../components/button/button.component';
import { Button2Component } from '../components/button2/button2.component';

const routes: Routes = [
  { path: 'Log in', component: ButtonComponent},
  { path: 'Sign up', component: Button2Component}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
