import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfcEComponent } from './nfc-e.component';

describe('NfcEComponent', () => {
  let component: NfcEComponent;
  let fixture: ComponentFixture<NfcEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfcEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NfcEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
