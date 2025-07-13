import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { WorkflowConfigService } from './workflow-config.service';
import { WorkflowService } from './workflow.service';
import { WorkflowType } from '../../../models/contracts/domain/models/workflow.model';

export const workflowResolver: ResolveFn<boolean> = (
  route: ActivatedRouteSnapshot
) => {
  const workflowConfig = inject(WorkflowConfigService);
  const workflowService = inject(WorkflowService);
  const router = inject(Router);

  // Obter workflowType do data da rota pai mais próxima
  let workflowType: WorkflowType | null = null;
  let currentRoute: ActivatedRouteSnapshot | null = route;

  while (currentRoute && !workflowType) {
    workflowType = currentRoute.data['workflowType'] as WorkflowType;
    currentRoute = currentRoute.parent;
  }

  if (!workflowType) {
    console.error('WorkflowResolver: Tipo de workflow não encontrado');
    router.navigate(['/']);
    return false;
  }

  const contractId = route.paramMap.get('contractId');
  const workflow = workflowConfig.getWorkflow(workflowType);

  if (!workflow) {
    console.error(
      `WorkflowResolver: Workflow não encontrado para o tipo ${workflowType}`
    );
    router.navigate(['/']);
    return false;
  }

  workflowService.initializeWorkflow(workflow, contractId);
  return true;
};
