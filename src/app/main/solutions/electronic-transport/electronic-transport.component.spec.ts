import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicTransportComponent } from './electronic-transport.component';

describe('ElectronicTransportComponent', () => {
  let component: ElectronicTransportComponent;
  let fixture: ComponentFixture<ElectronicTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicTransportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
