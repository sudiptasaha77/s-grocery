import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './components/home/home.component';
import { TileDetailsComponent } from './components/tile-details/tile-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { InventoryManagmentComponent } from './components/inventory-managment/inventory-managment.component';

const routes: Routes = [
  {path: '', component: PublicComponent, children:[
  {path: 'home', component: HomeComponent},
  {path: 'userDetails', component: UserDetailsComponent},
  {path: 'eachTileDetails/:id', component: TileDetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'inventoryManagment', component: InventoryManagmentComponent},
  { path: '**', component: ErrorPageComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
