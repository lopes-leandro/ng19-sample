// contracts/presentation/state/contract-list.state.ts
import { signal } from '@angular/core';
import { Contract } from '../../domain/models/contract.model';


export class ContractListState {
  contracts = signal<Contract[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  constructor() {
    this.loadContracts();
  }

  async loadContracts() {
    try {
      this.loading.set(true);
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const contracts: Contract[] = [
        { id: 'UA002003001', clientName: 'Cliente A', startDate: new Date('2023-01-01'), endDate: new Date('2024-01-01') },
        { id: 'UA002003002', clientName: 'Cliente B', startDate: new Date('2023-02-01'), endDate: new Date('2024-02-01') },
        { id: 'UA002003003', clientName: 'Cliente C', startDate: new Date('2023-03-01'), endDate: new Date('2024-03-01') }
      ];
      
      this.contracts.set(contracts);
    } catch (error) {
      this.error.set('Erro ao carregar contratos');
      console.error(error);
    } finally {
      this.loading.set(false);
    }
  }
}