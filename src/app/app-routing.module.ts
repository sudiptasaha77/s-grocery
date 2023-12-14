import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { AuthGuard } from '../service/auth.guard';
import { InternalErrorComponent } from './error-handeling-pages/internal-error/internal-error.component';
import { ExternalErrorComponent } from './error-handeling-pages/external-error/external-error.component';


const routes: Routes = [
  {path: '', component: LoginPageComponent},
  { path: 'login', component: LoginPageComponent},
  {path: '', loadChildren: () => import('./public/public.module').then((m)=>m.PublicModule),canActivate:[AuthGuard]},
  { path: '404', component: InternalErrorComponent },
  { path: '500', component: ExternalErrorComponent },
  { path: '**',  component: InternalErrorComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
