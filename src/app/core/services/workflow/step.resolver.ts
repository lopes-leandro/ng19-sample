import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { WorkflowService } from './workflow.service';

export const stepResolver: ResolveFn<boolean> = (route: ActivatedRouteSnapshot) => {
  const workflowService = inject(WorkflowService);
  const router = inject(Router);

  const requestedStepIndex = route.data['stepIndex'] ?? 0;
  const currentStepIndex = workflowService.currentStep();

  if (requestedStepIndex !== currentStepIndex) {
    const workflow = workflowService.currentWorkflow();
    if (workflow) {
       const currentStepPath = workflow.steps[currentStepIndex]?.path;

        if (currentStepPath) {
        // Reconstruir URL corretamente
        const segments = [];
        
        if (workflowService.contractId()) {
          segments.push(workflowService.contractId()!, 'incluir-item');
        } else {
          segments.push('novo-contrato');
        }
        
        segments.push(currentStepPath);
        
        router.navigate(segments);
        return false;
      }

      // router.navigate([
      //   workflowService.baseUrl(),
      //   workflow.steps[currentStepIndex].path
      // ]);
    }
    router.navigate(['/']);
    return false;
  }

  return true;
};
