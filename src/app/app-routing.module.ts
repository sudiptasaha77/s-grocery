import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDetailsComponent } from './login/login-details/login-details.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { authGuard } from '../service/auth.guard';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'login-details', component: LoginDetailsComponent},
  {path: '', loadChildren: () => import('./public/public.module').then((m)=>m.PublicModule),canActivate:[authGuard]},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then((m)=>m.AdminModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
