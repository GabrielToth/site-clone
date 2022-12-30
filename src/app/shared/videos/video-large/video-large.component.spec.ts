import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLargeComponent } from './video-large.component';

describe('VideoLargeComponent', () => {
  let component: VideoLargeComponent;
  let fixture: ComponentFixture<VideoLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
