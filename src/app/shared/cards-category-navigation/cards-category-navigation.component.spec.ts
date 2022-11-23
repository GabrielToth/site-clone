import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCategoryNavigationComponent } from './cards-category-navigation.component';

describe('CardsCategoryNavigationComponent', () => {
  let component: CardsCategoryNavigationComponent;
  let fixture: ComponentFixture<CardsCategoryNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCategoryNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsCategoryNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
