import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/service/shopping-cart.service';
@Component({
  selector: 'app-checkout-side-pannel',
  templateUrl: './checkout-side-pannel.component.html',
  styleUrls: ['./checkout-side-pannel.component.scss']
})
export class CheckoutSidePannelComponent implements OnInit, OnChanges  {
  @Input() newItemList : any;
  initialListmultipleValues: any;
  initialListmultipleParsedValues: any;
  initialListSingleValue: any;
  initialListSingleParsedValue: any;
  actualCheckoutList: any;
  quantity: any = {};
  totalValue: any;
  discountValue: any;
  totalSum = 0;
  newTotal = 0;
  errorDiscount: boolean = false;
  successDiscount: boolean = false;
  discountPatter = '^[A-Z0-9]{6}$';
  constructor(private shoppingCartService: ShoppingCartService, private router: Router ) {}

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
    if (list.length == 0) {
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
    }
  }

  appliedDiscount() {
    this.newTotal = this.totalSum;
    if (this.discountValue === '') {
      this.successDiscount = false;
      this.errorDiscount = false;
      this.newTotal = 0;
    } else if (this.discountValue === 'ILSG50') {
      this.successDiscount = true;
      this.errorDiscount = false;
      this.newTotal = this.totalSum / 2;
    } else if (this.discountValue === 'BOGO50') {
      this.successDiscount = true;
      this.errorDiscount = false;
      let newQuantity = 0;
      let newQuantityDiscountPriceOfEvenItems = 0;
      let newQuantityDiscountPriceOfOddItems = 0;
      let newQuantityDiscountPriceOfEvenItemsSum = 0;
      let newQuantityDiscountPriceOfOddItemsSum = 0;
      for (let i = 0; i < this.actualCheckoutList?.length; i++) {
        if (this.actualCheckoutList[i].quantity % 2 == 0) {
          newQuantity = this.actualCheckoutList[i].quantity / 2;
          newQuantityDiscountPriceOfEvenItems =
            (this.actualCheckoutList[i].price * newQuantity) / 2;
          newQuantityDiscountPriceOfEvenItemsSum =
            newQuantityDiscountPriceOfEvenItemsSum +
            newQuantityDiscountPriceOfEvenItems;
        } else {
          newQuantity = Math.floor(this.actualCheckoutList[i].quantity / 2);
          newQuantityDiscountPriceOfOddItems =
            this.actualCheckoutList[i].price * newQuantity;
          newQuantityDiscountPriceOfOddItemsSum =
            newQuantityDiscountPriceOfOddItemsSum +
            newQuantityDiscountPriceOfOddItems;
        }
      }

      this.newTotal =
        newQuantityDiscountPriceOfEvenItemsSum +
        newQuantityDiscountPriceOfOddItemsSum;
    } else {
      this.successDiscount = false;
      this.errorDiscount = true;
      this.newTotal = 0;
    }
  }
}
