import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMediumComponent } from './video-medium.component';

describe('VideoMediumComponent', () => {
  let component: VideoMediumComponent;
  let fixture: ComponentFixture<VideoMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoMediumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
