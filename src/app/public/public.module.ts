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


@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    TileComponent,
    TileDetailsComponent,
    ErrorPageComponent,
    CartComponent,
    CheckoutComponent,
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
    PublicRoutingModule,
    FormsModule
  ]
})
export class PublicModule { }
