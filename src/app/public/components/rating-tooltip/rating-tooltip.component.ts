import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating-tooltip',
  templateUrl: './rating-tooltip.component.html',
  styleUrls: ['./rating-tooltip.component.scss']
})
export class RatingTooltipComponent implements OnInit {

  tooltip:  any = 0;
  left: number = 0;
  top: number = 0;
  fullStars: number = 0;
  halfStar: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log("this is the tooltip", this.tooltip);
    this.fullStars = Math.floor(this.tooltip);
    this.halfStar = this.tooltip % 1 >= 0.5;
  }

  // ngOnChanges(changes: any): void {
  //   if (changes.tooltip) {
  //     this.calculateStars();
  //   }
  // }

  // private calculateStars(): void {
  //   this.fullStars = Math.floor(this.tooltip);
  //   this.halfStar = this.tooltip % 1 >= 0.5;
  // }

}