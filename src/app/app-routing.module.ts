import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { 
  	path: '', 
  component: LoginComponent

  },
  {
  	path:'register',

  	component: RegisterComponent
  },
  {
  	path :'forget',
  	component : ForgetComponent
  },{
    path:'dashboard',
     component : DashboardComponent

  },{
    path :'view',
    component : ViewComponent
  }


];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
