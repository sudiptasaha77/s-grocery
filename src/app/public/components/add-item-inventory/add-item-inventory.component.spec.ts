import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemInventoryComponent } from './add-item-inventory.component';

describe('AddItemInventoryComponent', () => {
  let component: AddItemInventoryComponent;
  let fixture: ComponentFixture<AddItemInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemInventoryComponent]
    });
    fixture = TestBed.createComponent(AddItemInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
