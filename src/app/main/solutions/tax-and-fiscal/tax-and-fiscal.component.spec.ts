import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxAndFiscalComponent } from './tax-and-fiscal.component';

describe('TaxAndFiscalComponent', () => {
  let component: TaxAndFiscalComponent;
  let fixture: ComponentFixture<TaxAndFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxAndFiscalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxAndFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
