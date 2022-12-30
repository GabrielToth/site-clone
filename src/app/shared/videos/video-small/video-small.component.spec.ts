import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSmallComponent } from './video-small.component';

describe('VideoSmallComponent', () => {
  let component: VideoSmallComponent;
  let fixture: ComponentFixture<VideoSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
