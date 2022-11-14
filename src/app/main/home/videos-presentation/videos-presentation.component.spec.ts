import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosPresentationComponent } from './videos-presentation.component';

describe('VideosPresentationComponent', () => {
  let component: VideosPresentationComponent;
  let fixture: ComponentFixture<VideosPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
