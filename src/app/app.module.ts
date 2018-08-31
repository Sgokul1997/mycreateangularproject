import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';  
import { MaterialModule } from './material.module';
import {MatTreeModule} from '@angular/material/tree';
//import { TreeviewModule } from 'ngx-treeview';
//import { TreeModule } from 'angular-tree-component';






//List Of Service
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { ForgetService } from './forget/forget.service';
import { DashboardService } from './dashboard/dashboard.service';
import { ViewService } from './view/view.service';


//List Of Modules
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';





/*import { HttpClientModule } from '@angular/common/http';
*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    DashboardComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatTreeModule
   

    
  ],
  providers: [
  LoginService,
  RegisterService,
  ForgetService,
  DashboardService,
  ViewService



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
