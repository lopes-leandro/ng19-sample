import { Routes } from '@angular/router';
import { WorkflowWizardComponent } from './pages/workflow/components/workflow-wizard/workflow-wizard.component';
import { workflowResolver } from '../../../core/services/workflow/workflow.resolver';
import { TipoVigenciaComponent } from './pages/workflow/steps/tipo-vigencia/tipo-vigencia.component';
import { stepResolver } from '../../../core/services/workflow/step.resolver';
import { DadosItemComponent } from './pages/workflow/steps/dados-item/dados-item.component';
import { CoberturasComponent } from './pages/workflow/steps/coberturas/coberturas.component';

export const CONTRACTS_ROUTES: Routes = [
  // Rota para novo contrato
  {
    path: 'novo-contrato',
    component: WorkflowWizardComponent,
    resolve: { workflow: workflowResolver },
    data: { workflowType: 'novo-contrato' },
    children: [
      { 
        path: 'tipo-vigencia', 
        component: TipoVigenciaComponent,
        resolve: { step: stepResolver },
        data: { stepIndex: 0 }
      },
      { 
        path: 'coberturas', 
        component: CoberturasComponent,
        resolve: { step: stepResolver },
        data: { stepIndex: 1 }
      },
      { 
        path: '', 
        redirectTo: 'tipo-vigencia', 
        pathMatch: 'full' 
      },
      { 
        path: '**', 
        redirectTo: 'tipo-vigencia' 
      }
    ]
  },
  
  // Rota para incluir item
  {
    path: ':contractId/incluir-item',
    component: WorkflowWizardComponent,
    resolve: { workflow: workflowResolver },
    data: { workflowType: 'incluir-item' },
    children: [
      { 
        path: 'dados-item', 
        component: DadosItemComponent,
        resolve: { step: stepResolver },
        data: { stepIndex: 0 }
      },
      { 
        path: '', 
        redirectTo: 'dados-item', 
        pathMatch: 'full' 
      },
      { 
        path: '**', 
        redirectTo: 'dados-item' 
      }
    ]
  }
];
