import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

/** Auth Routes with children routes */
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent, // main route
    children: [
      { path: 'login', component: LoginPageComponent }, // logjn
      { path: 'new-account', component: RegisterPageComponent }, // new account
      { path: 'new-**', redirectTo: 'login' }, // other to redirect to login
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule, ],
})
export class AuthRoutingModule { }
