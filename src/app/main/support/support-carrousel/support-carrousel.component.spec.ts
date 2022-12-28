import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportCarrouselComponent } from './support-carrousel.component';

describe('SupportCarrouselComponent', () => {
  let component: SupportCarrouselComponent;
  let fixture: ComponentFixture<SupportCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportCarrouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
