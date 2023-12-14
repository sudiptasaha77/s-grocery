import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalErrorComponent } from './external-error.component';

describe('ExternalErrorComponent', () => {
  let component: ExternalErrorComponent;
  let fixture: ComponentFixture<ExternalErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExternalErrorComponent]
    });
    fixture = TestBed.createComponent(ExternalErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
