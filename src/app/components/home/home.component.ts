import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../service/shopping-cart.service';
import {ShoppingCart} from '../../../model/shopping-cart.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  actualShoppingList: ShoppingCart[] = []

  constructor(private shoppingCartService: ShoppingCartService){}

  ngOnInit(): void {
    this.actualShoppingList = this.shoppingCartService.getShoppingCartList();
    console.log("actualShoppingList ==============>: ",this.actualShoppingList)
  }

}
