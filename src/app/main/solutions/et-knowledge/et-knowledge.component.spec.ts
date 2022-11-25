import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtKnowledgeComponent } from './et-knowledge.component';

describe('EtKnowledgeComponent', () => {
  let component: EtKnowledgeComponent;
  let fixture: ComponentFixture<EtKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtKnowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
