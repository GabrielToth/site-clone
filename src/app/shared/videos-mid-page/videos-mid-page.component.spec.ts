import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosMidPageComponent } from './videos-mid-page.component';

describe('VideosMidPageComponent', () => {
  let component: VideosMidPageComponent;
  let fixture: ComponentFixture<VideosMidPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosMidPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosMidPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
