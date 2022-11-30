import { ComponentFixture, TestBed } from '@angular/core/testing';

import { standardProductionComponent } from './standard-production.component';

describe('standardProductionComponent', () => {
  let component: standardProductionComponent;
  let fixture: ComponentFixture<standardProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ standardProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(standardProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
