import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosSatComponent } from './videos-sat.component';

describe('VideosSatComponent', () => {
  let component: VideosSatComponent;
  let fixture: ComponentFixture<VideosSatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosSatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosSatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
