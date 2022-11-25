import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSpedComponent } from './tax-sped.component';

describe('TaxSpedComponent', () => {
  let component: TaxSpedComponent;
  let fixture: ComponentFixture<TaxSpedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxSpedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxSpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
