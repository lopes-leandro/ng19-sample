import { Component, inject } from '@angular/core';
import { WorkflowService } from '../../../../../../../core/services/workflow/workflow.service';

@Component({
  selector: 'app-workflow-footer',
  imports: [],
  templateUrl: './workflow-footer.component.html',
  styleUrl: './workflow-footer.component.scss',
})
export class WorkflowFooterComponent {
  workflowService = inject(WorkflowService);

  isFirstStep = () => this.workflowService.currentStep() === 0;
  isLastStep = () => {
    const workflow = this.workflowService.currentWorkflow();
    return (
      !!workflow &&
      this.workflowService.currentStep() === workflow.steps.length - 1
    );
  };

  cancel() {
    this.workflowService.cancelWorkflow();
  }
  previous() {
    this.workflowService.previousStep();
  }
  next() {
    this.workflowService.nextStep();
  }
  complete() {
    this.workflowService.completeWorkflow();
  }
}
