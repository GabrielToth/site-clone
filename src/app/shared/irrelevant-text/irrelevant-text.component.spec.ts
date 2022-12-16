import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrelevantTextComponent } from './irrelevant-text.component';

describe('IrrelevantTextComponent', () => {
  let component: IrrelevantTextComponent;
  let fixture: ComponentFixture<IrrelevantTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrrelevantTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrrelevantTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
