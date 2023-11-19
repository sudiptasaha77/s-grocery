import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { ShoppingCartService } from 'src/service/shopping-cart.service';
import {ShoppingCart} from '../../../../model/shopping-cart.model';

@Component({
  selector: 'app-inventory-managment',
  templateUrl: './inventory-managment.component.html',
  styleUrls: ['./inventory-managment.component.scss']
})
export class InventoryManagmentComponent implements OnInit {

  totalNumberOfItem: any;
  initialList: any;
  actualCheckoutList: any;
  actualShoppingList: ShoppingCart[] = []
  

  constructor(private router: Router, private shoppingCartService: ShoppingCartService, private authService:AuthService){

  }

  ngOnInit(): void {
    this.actualShoppingList = this.shoppingCartService.getShoppingCartList();
    console.log("actualShoppingList ==============>: ",this.actualShoppingList)
  }

  cartCheckout(){
    console.log("this is the cart btn")
  }
}