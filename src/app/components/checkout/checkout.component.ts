import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/service/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
  initialListmultipleValues: any;
  initialListmultipleParsedValues : any;
  initialListSingleValue: any;
  initialListSingleParsedValue:any;
  actualCheckoutList: any;
  quantity: any = {};
  totalValue: any;
  discountValue: number=0;
  totalSum = 0;
  errorDiscount : boolean = false;
  successDiscount: boolean = false;
  constructor(private shoppingCartService: ShoppingCartService){

  }

  ngOnInit(): void {
    this.initialListSingleValue = localStorage.getItem('checkoutList');
    this.actualCheckoutList = JSON.parse(this.initialListSingleValue);
    this.quantityChangeCheck(this.actualCheckoutList);
  }


  selectedItemAddToCart(){
    console.log("selectedItemAddToCart ==============>")
  }

  finalCheckout(){
    console.log("finalCheckout=================>")
  }

  removeItem(id:number){
    let priceOfItem = this.actualCheckoutList.find((ele: any)=>{
      if(ele.id === id){
        return ele;
      }
    });
     let priceOfItemQuantity = priceOfItem.quantity;

    this.actualCheckoutList = this.actualCheckoutList.filter((ele: any) => ele.id !== id);
    let newAtualCheckoutList = JSON.stringify(this.actualCheckoutList);
    localStorage.setItem('checkoutList', newAtualCheckoutList);
    this.shoppingCartService.setTotalNumberOfItems( this.actualCheckoutList?.length);
     this.totalSum = this.totalSum - (priceOfItem.price * priceOfItemQuantity);
  }

  quantityChangeCheck(list: any){
    
    if(list.length == 0){
      this.totalSum = 0;

    }else{
      this.totalSum = 0;
      for(let i = 0; i < list?.length; i++ ){
      this.totalValue = list[i].price * list[i].quantity;
      this.totalSum = this.totalSum + this.totalValue;
      }
    }
  }


  quantityChange(id: any){
    if(this.actualCheckoutList.length == 0){
      this.totalSum = 0;
    }else{
      this.totalSum = 0;
      for(let i = 0; i < this.actualCheckoutList.length; i++ ){
      this.totalValue = this.actualCheckoutList[i].price * this.actualCheckoutList[i].quantity;
      this.totalSum = this.totalSum + this.totalValue;
      }
    }
  }

  appliedDiscount(){
    if(this.discountValue === 0){
      this.successDiscount = false;
      this.errorDiscount = false;
    }else{
      this.successDiscount = true;
    }
  }

}
