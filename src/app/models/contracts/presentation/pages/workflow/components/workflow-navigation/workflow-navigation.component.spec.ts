import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowNavigationComponent } from './workflow-navigation.component';

describe('WorkflowNavigationComponent', () => {
  let component: WorkflowNavigationComponent;
  let fixture: ComponentFixture<WorkflowNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkflowNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
