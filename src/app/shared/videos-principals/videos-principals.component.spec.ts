import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosPrincipalsComponent } from './videos-principals.component';

describe('VideosPrincipalsComponent', () => {
  let component: VideosPrincipalsComponent;
  let fixture: ComponentFixture<VideosPrincipalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosPrincipalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosPrincipalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
