import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { AuthGuard } from '../service/auth.guard';

// const routes: Routes = [
//   {path: '', component: LoginPageComponent},
//   {path: 'login', component: LoginPageComponent},
//   {path: '', loadChildren: () => import('./public/public.module').then((m)=>m.PublicModule),canActivate:[authGuard]}
// ];

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard]  },
  {path: '', loadChildren: () => import('./public/public.module').then((m)=>m.PublicModule),canActivate:[AuthGuard]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
