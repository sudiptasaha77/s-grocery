import { Component, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { ShoppingCartService } from 'src/service/shopping-cart.service';
import { ShoppingCart } from '../../../../model/shopping-cart.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item-inventory',
  templateUrl: './add-item-inventory.component.html',
  styleUrls: ['./add-item-inventory.component.scss']
})
export class AddItemInventoryComponent implements OnInit {

  public addItemToInventoryEvent: EventEmitter<any> = new EventEmitter();
  modalRef?: BsModalRef;
  addItemToInventory: any = new Object;
  uploadImageValue = null;
  submitted = false;


  addItemForm = this.formBuilder.group({
    itemName: ['', [Validators.required]],
    itemType: ['', [Validators.required]],
    itemDescription: ['', [Validators.required]],
    itemPrice: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    itemQuantity: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
  });

  

  constructor(private router: Router, private shoppingCartService: ShoppingCartService, private authService: AuthService, private modalService: BsModalService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    console.log("this is the AddItemInventoryComponent")
  }

  get f() { return this.addItemForm.controls; }

  uploadImage($event: any) {
    this.uploadImageValue = $event.target.files[0];
    console.log("this is the value of the event", $event.target.files[0]);
  }

  close() {
    this.modalService.hide();
  }

  submitAddItem() {

    this.submitted = true;
    if (this.addItemForm.invalid) {
      return;
  }
    this.addItemToInventory['itemName'] = this.addItemForm.value.itemName?.trim();
    this.addItemToInventory['itemType'] = this.addItemForm.value.itemType?.trim();
    this.addItemToInventory['itemDescription'] = this.addItemForm.value.itemDescription?.trim();
    this.addItemToInventory['itemPrice'] = this.addItemForm?.value.itemPrice;
    this.addItemToInventory['itemQuantity'] = this.addItemForm?.value.itemQuantity;
    this.addItemToInventory['uploadImageValue'] = this.uploadImageValue;
    this.shoppingCartService.setTotalNumberOfItems(this.addItemToInventory);
    this.triggerEvent();
    this.modalService.hide();
  }

  triggerEvent() {
    this.addItemToInventoryEvent.emit(this.addItemToInventory);
  }
}
