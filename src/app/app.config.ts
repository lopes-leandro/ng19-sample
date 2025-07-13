import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { coreProviders } from './core/core.providers';
import { provideContracts } from './models/contracts/contracts.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    ...coreProviders.providers,
    provideContracts()
  ],
};
