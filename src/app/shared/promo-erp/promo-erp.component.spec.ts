import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoErpComponent } from './promo-erp.component';

describe('PromoErpComponent', () => {
  let component: PromoErpComponent;
  let fixture: ComponentFixture<PromoErpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoErpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
