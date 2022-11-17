import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeAPartnershipComponent } from './be-a-partnership.component';

describe('BeAPartnershipComponent', () => {
  let component: BeAPartnershipComponent;
  let fixture: ComponentFixture<BeAPartnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeAPartnershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeAPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
