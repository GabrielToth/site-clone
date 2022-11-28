import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOfServiceComponent } from './order-of-service.component';

describe('OrderOfServiceComponent', () => {
  let component: OrderOfServiceComponent;
  let fixture: ComponentFixture<OrderOfServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderOfServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderOfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
