import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingTooltipComponent } from './rating-tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { RatingModule } from 'ngx-bootstrap/rating';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RatingTooltipComponent,
    TooltipDirective,
  ],
  imports: [
    CommonModule,
    RatingModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [TooltipDirective]
})
export class TooltipModule { }
