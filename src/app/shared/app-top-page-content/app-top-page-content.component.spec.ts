import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTopPageContentComponent } from './app-top-page-content.component';

describe('AppTopPageContentComponent', () => {
  let component: AppTopPageContentComponent;
  let fixture: ComponentFixture<AppTopPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTopPageContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTopPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
