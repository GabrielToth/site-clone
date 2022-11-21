import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPageContentComponent } from './top-page-content.component';

describe('TopPageContentComponent', () => {
  let component: TopPageContentComponent;
  let fixture: ComponentFixture<TopPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPageContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
