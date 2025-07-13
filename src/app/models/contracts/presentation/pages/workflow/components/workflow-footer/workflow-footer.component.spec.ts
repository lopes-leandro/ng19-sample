import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowFooterComponent } from './workflow-footer.component';

describe('WorkflowFooterComponent', () => {
  let component: WorkflowFooterComponent;
  let fixture: ComponentFixture<WorkflowFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkflowFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
