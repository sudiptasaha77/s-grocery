import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryManagmentComponent } from './inventory-managment.component';

describe('InventoryManagmentComponent', () => {
  let component: InventoryManagmentComponent;
  let fixture: ComponentFixture<InventoryManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryManagmentComponent]
    });
    fixture = TestBed.createComponent(InventoryManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
