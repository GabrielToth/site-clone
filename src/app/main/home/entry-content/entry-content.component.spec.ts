import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryContentComponent } from './entry-content.component';

describe('EntryContentComponent', () => {
  let component: EntryContentComponent;
  let fixture: ComponentFixture<EntryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
