import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBottomComponent } from './cards-bottom.component';

describe('CardsBottomComponent', () => {
  let component: CardsBottomComponent;
  let fixture: ComponentFixture<CardsBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
