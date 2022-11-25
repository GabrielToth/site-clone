import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducedTopContentComponent } from './reduced-top-content.component';

describe('ReducedTopContentComponent', () => {
  let component: ReducedTopContentComponent;
  let fixture: ComponentFixture<ReducedTopContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReducedTopContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReducedTopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
