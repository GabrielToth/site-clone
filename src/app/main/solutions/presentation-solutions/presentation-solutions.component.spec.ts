import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationSolutionsComponent } from './presentation-solutions.component';

describe('PresentationSolutionsComponent', () => {
  let component: PresentationSolutionsComponent;
  let fixture: ComponentFixture<PresentationSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
