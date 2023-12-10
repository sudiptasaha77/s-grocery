import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/service/shopping-cart.service';
@Component({
  selector: 'app-checkout-side-pannel',
  templateUrl: './checkout-side-pannel.component.html',
  styleUrls: ['./checkout-side-pannel.component.scss']
})
export class CheckoutSidePannelComponent implements OnInit, OnChanges {
  @Input() newItemList: any;
  initialListmultipleValues: any;
  initialListmultipleParsedValues: any;
  initialListSingleValue: any;
  initialListSingleParsedValue: any;
  actualCheckoutList: any;
  quantity: any = {};
  totalValue: any;
  totalSum = 0;
  newTotal = 0;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    this.initialListSingleValue = localStorage.getItem('checkoutList');
    this.actualCheckoutList = JSON.parse(this.initialListSingleValue);
    this.quantityChangeCheck(this.actualCheckoutList);

  }

  ngOnChanges() {
    this.actualCheckoutList = this.newItemList
  }

  selectedItemAddToCart() {
    console.log('selectedItemAddToCart ==============>');
  }

  finalCheckout() {
    this.router.navigateByUrl('/checkout');
  }

  removeItem(id: number) {
    let priceOfItem = this.actualCheckoutList.find((ele: any) => {
      if (ele.id === id) {
        return ele;
      }
    });
    let priceOfItemQuantity = priceOfItem.quantity;

    this.actualCheckoutList = this.actualCheckoutList.filter(
      (ele: any) => ele.id !== id
    );
    let newAtualCheckoutList = JSON.stringify(this.actualCheckoutList);
    localStorage.setItem('checkoutList', newAtualCheckoutList);
    this.shoppingCartService.setTotalNumberOfItems(
      this.actualCheckoutList?.length
    );

    this.totalSum = this.totalSum - priceOfItem.price * priceOfItemQuantity;
  }

  quantityChangeCheck(list: any) {
    if (list?.length == 0) {
      this.totalSum = 0;
    } else {
      this.totalSum = 0;
      for (let i = 0; i < list?.length; i++) {
        this.totalValue = list[i].price * list[i].quantity;
        this.totalSum = this.totalSum + this.totalValue;
      }
    }
  }

  quantityChange(id: any) {
    if (this.actualCheckoutList.length == 0) {
      this.totalSum = 0;
    } else {
      this.totalSum = 0;
      for (let i = 0; i < this.actualCheckoutList.length; i++) {
        this.totalValue =
          this.actualCheckoutList[i].price *
          this.actualCheckoutList[i].quantity;
        this.totalSum = this.totalSum + this.totalValue;
      }
      let newAtualCheckoutList = JSON.stringify(this.actualCheckoutList);
      localStorage.setItem('checkoutList', newAtualCheckoutList);
      this.shoppingCartService.setTotalNumberOfItems(
        this.actualCheckoutList?.length
      );
    }
  }

}
