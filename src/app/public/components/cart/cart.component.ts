import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { ShoppingCartService } from 'src/service/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  totalNumberOfItem: any;
  initialList: any;
  actualCheckoutList: any;

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.shoppingCartService.getTotalNumberOfItems().subscribe((data: any) => {
      this.totalNumberOfItem = data;
    });
  }

  cartCheckout() {
    console.log('this is the cart btn');
  }
}
