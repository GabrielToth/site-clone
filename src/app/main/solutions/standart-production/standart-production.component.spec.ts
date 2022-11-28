import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandartProductionComponent } from './standart-production.component';

describe('StandartProductionComponent', () => {
  let component: StandartProductionComponent;
  let fixture: ComponentFixture<StandartProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandartProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandartProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
