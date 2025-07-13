import { Routes } from '@angular/router';
import { CONTRACTS_ROUTES } from './models/contracts/presentation/contracts.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './models/contracts/presentation/pages/contract-list/contract-list.component'
      ).then((m) => m.ContractListComponent),
  },
  ...CONTRACTS_ROUTES,
  { path: '**', redirectTo: '' },
];
