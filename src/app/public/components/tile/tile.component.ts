import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from '../../../../service/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit{

  @Input() actualShoppingList: any;
  
  selectedItemValues: any;
  selectedItemDetail:any;
  actualCheckoutList: any;
  initialListMultipleValue: any;
  initialListMultiParsedValue: any = [];
  totalNumberOfItem: any;
  newInitialListMultiParsedValue: any;
  existingItem: any;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router ,  private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    console.log("actualShoppingList ==============>: ",this.actualShoppingList);
  }

  

  selectedItem(id:number){
    console.log("this is the id", id);
    this.router.navigate(['/eachTileDetails', id], { queryParams: { id: id } });  
    
  }

  selectedItemAddToCart(id:number){
    this.initialListMultipleValue = localStorage.getItem('checkoutList');
    this.initialListMultiParsedValue = this.initialListMultipleValue == null   || this.initialListMultipleValue == undefined ? [] :  JSON.parse(this.initialListMultipleValue);
    this.selectedItemDetail = this.actualShoppingList.find((ele: any) => {
      if (ele.id === id) {
         return ele;
      }
    });
    if(this.initialListMultiParsedValue.length == 0){
      this.selectedItemDetail.quantity = 1;
    }else{
      this.existingItem = this.initialListMultiParsedValue.find((ele: any) => {
        if (ele.id === id) {
           return ele;
        }
      });
      if(this.existingItem === undefined){
        this.selectedItemDetail.quantity = 1;
      }else{
        this.selectedItemDetail.quantity = 1 + this.existingItem.quantity;
      }
      
    }
    
    this.newInitialListMultiParsedValue = this.initialListMultiParsedValue.filter((ele: any) => ele.id !== this.selectedItemDetail.id);

    this.newInitialListMultiParsedValue.push(this.selectedItemDetail);
    this.actualCheckoutList = JSON.stringify(this.newInitialListMultiParsedValue);
    localStorage.setItem('checkoutList', this.actualCheckoutList);
    this.shoppingCartService.setTotalNumberOfItems(this.newInitialListMultiParsedValue?.length)
    
  }

}


