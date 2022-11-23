import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatEquipmentComponent } from './sat-equipment.component';

describe('SatEquipmentComponent', () => {
  let component: SatEquipmentComponent;
  let fixture: ComponentFixture<SatEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
