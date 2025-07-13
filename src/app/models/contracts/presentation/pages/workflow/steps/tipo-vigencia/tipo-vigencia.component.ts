import { Component, inject, OnInit } from '@angular/core';
import { DynamicFormComponent } from '../../../../../../../shared/ui/dynamic-form/dynamic-form.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { WorkflowService } from '../../../../../../../core/services/workflow/workflow.service';

@Component({
  selector: 'app-tipo-vigencia',
  imports: [ReactiveFormsModule, DynamicFormComponent],
  templateUrl: './tipo-vigencia.component.html',
  styleUrl: './tipo-vigencia.component.scss',
})
export class TipoVigenciaComponent implements OnInit {
  workflowService = inject(WorkflowService);
  fb = inject(FormBuilder);

  form = this.fb.group({
    policyType: ['individual', Validators.required],
    proposalNumber: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
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
