import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsToKnowMoreComponent } from './buttons-to-know-more.component';

describe('ButtonsToKnowMoreComponent', () => {
  let component: ButtonsToKnowMoreComponent;
  let fixture: ComponentFixture<ButtonsToKnowMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsToKnowMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsToKnowMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
