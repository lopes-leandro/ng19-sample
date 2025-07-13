import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { WorkflowNavigationComponent } from '../workflow-navigation/workflow-navigation.component';
import { WorkflowFooterComponent } from '../workflow-footer/workflow-footer.component';
import { WorkflowService } from '../../../../../../../core/services/workflow/workflow.service';

@Component({
  selector: 'app-workflow-wizard',
  imports: [RouterOutlet, WorkflowNavigationComponent, WorkflowFooterComponent],
  templateUrl: './workflow-wizard.component.html',
  styleUrl: './workflow-wizard.component.scss',
})
export class WorkflowWizardComponent {
  protected workflowService = inject(WorkflowService);
  private route = inject(ActivatedRoute);

  constructor() {
    console.log('WorkflowWizardComponent criado');

    this.route.data.subscribe((data) => {
      console.log('Dados da rota:', data);
    });

    console.log('Workflow atualizado:', this.workflowService.currentWorkflow());
  }
}
