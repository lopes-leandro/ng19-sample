// contracts/domain/models/workflow.model.ts
export interface WorkflowStep {
  id: string;
  label: string;
  path: string;
  component: string; // Nome do componente
  validationRequired: boolean;
}

export interface Workflow {
  id: string;
  name: string;
  steps: WorkflowStep[];
}

export enum WorkflowType {
  NEW_CONTRACT = 'novo-contrato',
  ADD_ITEM = 'incluir-item'
}