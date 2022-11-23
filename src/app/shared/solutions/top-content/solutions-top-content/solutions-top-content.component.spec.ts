import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsTopContentComponent } from './solutions-top-content.component';

describe('SolutionsTopContentComponent', () => {
  let component: SolutionsTopContentComponent;
  let fixture: ComponentFixture<SolutionsTopContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsTopContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsTopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
