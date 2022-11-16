import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from '../login/login.component';
import { signupComponent } from '../signup/signup.component';
import { homeComponent } from '../home/home.component';
import { studentcreateComponent } from '../studentcreate/studentcreate.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: loginComponent },
  { path: 'signup', component: signupComponent },
  { path: 'home', component: homeComponent },
  { path: 'studentcreate', component: studentcreateComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
