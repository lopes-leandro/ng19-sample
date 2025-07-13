import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { provideRouter } from "@angular/router";
import { CONTRACTS_ROUTES } from "./presentation/contracts.routes";

export const provideContracts = (): EnvironmentProviders => {
  return makeEnvironmentProviders([
    provideRouter(CONTRACTS_ROUTES),
    // Providers específicos do módulo
  ]);
};