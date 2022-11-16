import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEnterpriseComponent } from './about-enterprise.component';

describe('AboutEnterpriseComponent', () => {
  let component: AboutEnterpriseComponent;
  let fixture: ComponentFixture<AboutEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEnterpriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
