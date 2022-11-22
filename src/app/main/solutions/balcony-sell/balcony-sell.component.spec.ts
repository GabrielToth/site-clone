import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalconySellComponent } from './balcony-sell.component';

describe('BalconySellComponent', () => {
  let component: BalconySellComponent;
  let fixture: ComponentFixture<BalconySellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalconySellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalconySellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
