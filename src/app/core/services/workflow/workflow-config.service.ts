import { Injectable, signal } from '@angular/core';
import { Workflow, WorkflowType } from '../../../models/contracts/domain/models/workflow.model';
import { TipoVigenciaComponent } from '../../../models/contracts/presentation/pages/workflow/steps/tipo-vigencia/tipo-vigencia.component';

@Injectable({
  providedIn: 'root'
})
export class WorkflowConfigService {

  private workflows = signal<Workflow[]>([
    {
      id: WorkflowType.NEW_CONTRACT,
      name: 'Novo Contrato',
      steps: [
        { 
          id: 'tipo-vigencia', 
          label: 'Tipo de Vigência', 
          path: 'tipo-vigencia', 
          component: 'TipoVigenciaComponent', 
          validationRequired: true 
        },
        { 
          id: 'coberturas', 
          label: 'Coberturas e Assistências', 
          path: 'coberturas', 
          component: 'CoberturasComponent', 
          validationRequired: true 
        },
        { 
          id: 'condicao-comercial', 
          label: 'Condição Comercial', 
          path: 'condicao-comercial', 
          component: 'CondicaoComercialComponent', 
          validationRequired: true 
        },
        { 
          id: 'informacoes', 
          label: 'Informações e Dados', 
          path: 'informacoes', 
          component: 'InformacoesComponent', 
          validationRequired: true 
        }
      ]
    },
    {
      id: WorkflowType.ADD_ITEM,
      name: 'Incluir Item',
      steps: [
        { 
          id: 'dados-item', 
          label: 'Dados do Item', 
          path: 'dados-item', 
          component: 'DadosItemComponent', 
          validationRequired: true 
        },
        { 
          id: 'coberturas-item', 
          label: 'Coberturas do Item', 
          path: 'coberturas-item', 
          component: 'CoberturasItemComponent', 
          validationRequired: true },
        { 
          id: 'confirmacao', 
          label: 'Confirmação', 
          path: 'confirmacao', 
          component: 'ConfirmacaoComponent', 
          validationRequired: false 
        }
      ]
    }
  ]);

  getWorkflow(type: WorkflowType) {
    return this.workflows().find(w => w.id === type);
  }
}
