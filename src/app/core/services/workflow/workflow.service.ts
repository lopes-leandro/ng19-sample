import { inject, Injectable, signal } from '@angular/core';
import { Workflow } from '../../../models/contracts/domain/models/workflow.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WorkflowService {
  private router = inject(Router);

  currentStep = signal<number>(0);
  currentWorkflow = signal<Workflow | null>(null);
  formValid = signal<boolean>(false);
  contractId = signal<string | null>(null);
  baseUrl = signal<string>('');

  initializeWorkflow(workflow: Workflow, contractId: string | null = null) {
    this.currentWorkflow.set(workflow);
    this.contractId.set(contractId);

    if (contractId) {
      this.baseUrl.set(`${contractId}/incluir-item`);
    } else {
      this.baseUrl.set('novo-contrato');
    }

    this.currentStep.set(0);
    this.formValid.set(false);
    // this.navigateToStep(0);
  }

  getCurrentStepPath(): string | null {
    const workflow = this.currentWorkflow();
    const stepIndex = this.currentStep();
    return workflow?.steps[stepIndex]?.path || null;
  }

  navigateToStep(stepIndex: number) {
    const workflow = this.currentWorkflow();
    if (workflow && workflow.steps[stepIndex]) {
      this.currentStep.set(stepIndex);
      this.router.navigate([this.baseUrl(), workflow.steps[stepIndex].path]);
    }
  }

  nextStep() {
    const currentStep = this.currentStep();
    const workflow = this.currentWorkflow();
    if (workflow && currentStep < workflow.steps.length - 1) {
      this.navigateToStep(currentStep + 1);
    }
  }

  previousStep() {
    const currentStep = this.currentStep();
    if (currentStep > 0) {
      this.navigateToStep(currentStep - 1);
    }
  }

  completeWorkflow() {
    const contractId = this.contractId();
    this.router.navigate(
      contractId ? ['/contracts', contractId] : ['/contracts']
    );
  }

  cancelWorkflow() {
    const contractId = this.contractId();
    this.router.navigate(
      contractId ? ['/contracts', contractId] : ['/contracts']
    );
  }
}
