
import { Component, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from '../../../../service/shopping-cart.service';
import { ShoppingCart } from 'src/model/shopping-cart.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tile-details',
  templateUrl: './tile-details.component.html',
  styleUrls: ['./tile-details.component.scss']
})
export class TileDetailsComponent implements OnInit {
  selectedItem: any;
  selectedItemValue: any;
  selectedItemId: number = 0;
  quantitySingleItem: number = 0;
  initialListSingleValue: any;
  initialListSingleParsedValue: any = [];
  actualCheckoutList: any;
  totalNumberOfItem: any;
  existingItem: any = 0;
  newInitialListSingleParsedValue: any;
  quantityCheck: boolean = false;

  constructor(private shoppingCartService: ShoppingCartService, private route: ActivatedRoute ,  private router: Router) { }

  ngOnInit(): void {
    console.log("this is the TileDetailsComponent@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", this.selectedItemValue)
    this.route.queryParams.subscribe((params: any) => {
      this.selectedItemId = Number(params.id);
      this.selectedItem = this.shoppingCartService.getShoppingCartList().find(
        element => element.id == this.selectedItemId
      );
    }
    );
    this.selectedItemValue = this.selectedItem;
    console.log("this is the TileDetailsComponent@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", this.selectedItemValue)
  }

  selectedItemAddToCart() {
    this.initialListSingleValue = localStorage.getItem('checkoutList');
    this.initialListSingleParsedValue = this.initialListSingleValue == null || this.initialListSingleValue == undefined ? [] : JSON.parse(this.initialListSingleValue);
    if(this.initialListSingleParsedValue.length == 0){
      this.selectedItemValue.quantity = this.quantitySingleItem;
    }else{
      this.existingItem = this.initialListSingleParsedValue?.find((ele: any) => {
        if (ele.id === this.selectedItemValue.id) {
          return ele;
        }
      });
      if(this.existingItem === undefined || this.existingItem === null){
        this.selectedItemValue.quantity = this.quantitySingleItem;
      }else{
        this.selectedItemValue.quantity = this.quantitySingleItem + this.existingItem.quantity;
      }
    }
    this.newInitialListSingleParsedValue = this.initialListSingleParsedValue.filter((ele: any) => ele.id !== this.selectedItemValue.id);

    this.newInitialListSingleParsedValue.push(this.selectedItemValue);

    this.actualCheckoutList = JSON.stringify(this.newInitialListSingleParsedValue);
    localStorage.setItem('checkoutList', this.actualCheckoutList);

    this.shoppingCartService.setTotalNumberOfItems(this.newInitialListSingleParsedValue?.length)
    // this.shoppingCartService.setNewCheckoutList(
    //   this.newInitialListSingleParsedValue
    // );

  }

  quantityChangeFun(){
    this.quantityCheck = this.quantitySingleItem == 0 ? false: true;
  }
}
