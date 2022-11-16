import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginComponent } from '../login/login.component';
import { signupComponent } from '../signup/signup.component';
import { homeComponent } from '../home/home.component';
import { studentcreateComponent } from '../studentcreate/studentcreate.component';

@NgModule({
  declarations: [
    AppComponent, loginComponent, signupComponent, homeComponent, studentcreateComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
