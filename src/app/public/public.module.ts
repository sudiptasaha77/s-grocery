import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './components/home/home.component';
import { TileDetailsComponent } from './components/tile-details/tile-details.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { TileComponent } from './components/tile/tile.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { InventoryManagmentComponent } from './components/inventory-managment/inventory-managment.component';
import { CheckoutSidePannelComponent } from './components/checkout-side-pannel/checkout-side-pannel.component';
import { AddItemInventoryComponent } from './components/add-item-inventory/add-item-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import {TooltipModule} from './components/rating-tooltip/tooltip.module';
import { RatingModule } from 'ngx-bootstrap/rating';

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    TileComponent,
    TileDetailsComponent,
    ErrorPageComponent,
    CartComponent,
    CheckoutComponent,
    UserDetailsComponent,
    InventoryManagmentComponent,
    CheckoutSidePannelComponent,
    AddItemInventoryComponent,
  ],
  exports:[
    HomeComponent,
    TileComponent,
    TileDetailsComponent,
    ErrorPageComponent,
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    TooltipModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule.forRoot(),
  ]
})
export class PublicModule { }
