import { Component, inject, OnInit } from '@angular/core';
import { DynamicFormComponent } from '../../../../../../../shared/ui/dynamic-form/dynamic-form.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { WorkflowService } from '../../../../../../../core/services/workflow/workflow.service';

@Component({
  selector: 'app-coberturas',
  imports: [ReactiveFormsModule, DynamicFormComponent],
  templateUrl: './coberturas.component.html',
  styleUrl: './coberturas.component.scss',
})
export class CoberturasComponent implements OnInit {
  protected workflowService = inject(WorkflowService);
  private fb = inject(FormBuilder);

  protected form = this.fb.group({
    policyType: ['individual', Validators.required],
    proposalNumber: ['', [Validators.required]],
  });

  ngOnInit() {
    // Forçar verificação inicial
    this.workflowService.formValid.set(this.form.valid);

    // Atualizar validade quando o formulário mudar
    this.form.statusChanges.subscribe(() => {
      this.workflowService.formValid.set(this.form.valid);
    });
  }
}
