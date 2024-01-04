import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginPageComponent } from './login/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ErrorHandelingService } from '../service/error-handeling.service';
import { ProductPopularityPipe } from './product-popularity.pipe';
import {TooltipModule} from './public/components/rating-tooltip/tooltip.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProductPopularityPipe
  ],
  imports: [
    TooltipModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [{provide: ErrorHandler , useClass: ErrorHandelingService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
