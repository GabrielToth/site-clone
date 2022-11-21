import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatFiscalComponent } from './sat-fiscal.component';

describe('SatFiscalComponent', () => {
  let component: SatFiscalComponent;
  let fixture: ComponentFixture<SatFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatFiscalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
