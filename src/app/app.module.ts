import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {  RouterModule, Routes } from '@angular/router';

const appRouts: Routes = [
  {path: '',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
