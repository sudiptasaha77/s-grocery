import { Component, OnInit , TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { ShoppingCartService } from 'src/service/shopping-cart.service';
import {ShoppingCart } from '../../../../model/shopping-cart.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddItemInventoryComponent } from '../add-item-inventory/add-item-inventory.component'
 

@Component({
  selector: 'app-inventory-managment',
  templateUrl: './inventory-managment.component.html',
  styleUrls: ['./inventory-managment.component.scss']
})
export class InventoryManagmentComponent implements OnInit {

  totalNumberOfItem: any;
  initialList: any;
  actualCheckoutList: any;
  actualShoppingList: ShoppingCart[] = [];
  modalRef?: BsModalRef;
  newAddedItem : any;
  newItem: any;
  initialListLength : number = 0;
  

  constructor(private router: Router, private shoppingCartService: ShoppingCartService, private authService:AuthService, private modalService: BsModalService){

  }

  ngOnInit(): void {
    
    this.actualShoppingList = this.shoppingCartService.getShoppingCartList();
    console.log("actualShoppingList ==============>: ", this.actualShoppingList)
    this.initialListLength = this.actualShoppingList?.length
  }

  cartCheckout(){
    console.log("this is the cart btn")
  }
  
  openAddItem(){
    this.modalRef = this.modalService.show(AddItemInventoryComponent);
      this.modalRef.content.addItemToInventoryEvent.subscribe((data: any) => {
        this.newAddedItem = data;
        this.newItem = [
          {
            "id" : this.initialListLength,
            "title": this.newAddedItem.itemName,
            "type":this.newAddedItem.itemType,
            "description": this.newAddedItem.itemDescription,
            "filename": '',
            "height": 0,
            "width": 0,
            "price": this.newAddedItem.itemPrice,
            "rating": 0,
            "currencyCode": 'USD',
            "imageUrl": this.newAddedItem.uploadImageValue,
            "quantity": this.newAddedItem.itemQuantity,
            "quantityVal": ''
        }
        ]
     this.actualShoppingList.push(this.newItem[0]);
     this.initialListLength = this.actualShoppingList?.length;
     });
      
  }

}