import { Injectable } from '@angular/core';
import {ShoppingCart } from '../model/shopping-cart.model'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCartList: ShoppingCart[] = [{
    "id":0,
    "title": "Brown eggs",
    "type": "dairy",
    "description": "Raw organic brown eggs in a basket",
    "filename": "0.jpg",
    "height": 600,
    "width": 400,
    "price": 30,
    "rating": 4,
    "currencyCode": "USD",
    "imageUrl": "../assets/brownEggs.png",
    "quantity": 0,
    "quantityVal":"quantityZero"
  }, {
  "id":1,
    "title": "Sweet fresh stawberry",
    "type": "fruit",
    "description": "Sweet fresh stawberry on the wooden table",
    "filename": "1.jpg",
    "height": 450,
    "width": 299,
    "price": 29.45,
    "rating": 4,
    "currencyCode": "USD",
    "imageUrl": "../assets/strawberrys.png",
    "quantity": 0,
    "quantityVal":"quantityOne"
  }, {
  "id":2,
    "title": "Asparagus",
    "type": "vegetable",
    "description": "Asparagus with ham on the wooden table",
    "filename": "2.jpg",
    "height": 450,
    "width": 299,
    "price": 18.95,
    "rating": 3,
    "currencyCode": "USD",
    "imageUrl": "../assets/asparagus.png",
    "quantity": 0,
    "quantityVal":"quantityTwo"
  }, {
  "id":3,
    "title": "Green smoothie",
    "type": "dairy",
    "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
    "filename": "3.jpg",
    "height": 600,
    "width": 399,
    "price": 17.68,
    "rating": 4,
    "currencyCode": "USD",
    "imageUrl": "../assets/greenSmoothie.png",
    "quantity": 0,
    "quantityVal":"quantityThree"
    
  }, {
  "id":4,
    "title": "Raw legums",
    "type": "vegetable",
    "description": "Raw legums on the wooden table",
    "filename": "4.jpg",
    "height": 450,
    "width": 299,
    "price": 17.11,
    "rating": 2,
    "currencyCode": "USD",
    "imageUrl": "../assets/rawLegums.png",
    "quantity": 0,
    "quantityVal":"quantityFour"
  }, {
  "id":5,
    "title": "Baking cake",
    "type": "dairy",
    "description": "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
    "filename": "5.jpg",
    "height": 450,
    "width": 675,
    "price": 11.14,
    "rating": 4,
    "currencyCode": "USD",
    "imageUrl": "../assets/cakeMix.png",
    "quantity": 0,
    "quantityVal":"quantityFive"
  }, {
  "id":6,
    "title": "Pesto with basil",
    "type": "vegetable",
    "description": "Italian traditional pesto with basil, chesse and oil",
    "filename": "6.jpg",
    "height": 450,
    "width": 299,
    "price": 18.19,
    "rating": 2,
    "currencyCode": "USD",
    "imageUrl": "../assets/pestoWithBasil.png",
    "quantity": 0,
    "quantityVal":"quantitySix"
  }, {
  "id":7,
    "title": "Hazelnut in black ceramic bowl",
    "type": "vegetable",
    "description": "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
    "filename": "7.jpg",
    "height": 450,
    "width": 301,
    "price": 27.35,
    "rating": 0,
    "currencyCode": "USD",
    "imageUrl": "../assets/hazelnut.png",
    "quantity": 0,
    "quantityVal":"quantitySeven"
  }, {
  "id":8,
    "title": "Fresh stawberry",
    "type": "fruit",
    "description": "Sweet fresh stawberry on the wooden table",
    "filename": "8.jpg",
    "height": 600,
    "width": 399,
    "price": 28.59,
    "rating": 4,
    "currencyCode": "USD",
    "imageUrl": "../assets/strawberrys.png",
    "quantity": 0,
    "quantityVal":"quantityEight"
  }, {
  "id":9,
    "title": "Lemon and salt",
    "type": "fruit",
    "description": "Rosemary, lemon and salt on the table",
    "filename": "9.jpg",
    "height": 450,
    "width": 299,
    "price": 15.79,
    "rating": 5,
    "currencyCode": "USD",
    "imageUrl": "../assets/saltAndLemon.png",
    "quantity": 0,
    "quantityVal":"quantityNine"
  }, {
  "id":10,
    "title": "Homemade bread",
    "type": "bakery",
    "description": "Homemade bread",
    "filename": "10.jpg",
    "height": 450,
    "width": 301,
    "price": 17.48,
    "rating": 3,
    "currencyCode": "USD",
    "imageUrl": "../assets/bread.png",
    "quantity": 0,
    "quantityVal":"quantityTen"
  }]

  private _totalNumberOfItems = new BehaviorSubject<any>('');
  totalNumberOfItems = this._totalNumberOfItems.asObservable();

  constructor() { }

  getShoppingCartList(){
    return this.shoppingCartList;
  }

  getTotalNumberOfItems(): Observable<any>{
    return this.totalNumberOfItems
  }

  setTotalNumberOfItems(value: any){
    this._totalNumberOfItems.next(value);
  }


}
