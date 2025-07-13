import { Component, inject } from '@angular/core';
import { WorkflowService } from '../../../../../../../core/services/workflow/workflow.service';

@Component({
  selector: 'app-workflow-navigation',
  imports: [],
  templateUrl: './workflow-navigation.component.html',
  styleUrl: './workflow-navigation.component.scss',
})
export class WorkflowNavigationComponent {
  workflowService = inject(WorkflowService);
  currentStep = this.workflowService.currentStep;
  currentWorkflow = this.workflowService.currentWorkflow;
}
