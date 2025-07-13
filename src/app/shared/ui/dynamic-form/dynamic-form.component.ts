import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnChanges  {

  @Input() formGroup!: FormGroup;
  @Output() formValidity = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges) {

    if (changes['formGroup'] && this.formGroup) {
      // Emitir o estado atual quando o formGroup for alterado
      this.formValidity.emit(this.formGroup.valid);

      // Inscrever-se nas mudanças de status
      this.formGroup.statusChanges.subscribe(() => {
        this.formValidity.emit(this.formGroup.valid);
      });
    }
    
    // this.formGroup.statusChanges.subscribe(() => {
    //   this.formValidity.emit(this.formGroup.valid);
    // });
    // this.formValidity.emit(this.formGroup.valid);
  }
  
}
