import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TileDetailsComponent } from './components/tile-details/tile-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  //{path: 'login', component: LoginPageComponent},
  //{path: 'login-details', component: LoginDetailsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'eachTileDetails/:id', component: TileDetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  { path: '**', component: ErrorPageComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
