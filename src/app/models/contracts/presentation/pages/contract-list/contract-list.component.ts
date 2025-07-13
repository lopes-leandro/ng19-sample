import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ContractListState } from '../../state/contract-list.state';

@Component({
  selector: 'app-contract-list',
  imports: [],
  templateUrl: './contract-list.component.html',
  styleUrl: './contract-list.component.scss',
   providers: [ContractListState]
})
export class ContractListComponent {
 private router = inject(Router);
  state = inject(ContractListState);
  
  // Formatar datas para exibição
  formatDate(date: Date): string {
    return date.toLocaleDateString('pt-BR');
  }

  startNewContract() {
    this.router.navigate(['/novo-contrato']);
  }

  addItemToContract(contractId: string) {
    this.router.navigate([contractId, 'incluir-item']);
  }

  viewContractDetails(contractId: string) {
    this.router.navigate(['/contracts', contractId]);
  }
}
