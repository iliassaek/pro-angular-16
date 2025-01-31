import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { routes } from '../app.routes';
import { provideRouter } from '@angular/router';
import { StoreFirstGuard } from './storeFirst.guard';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { PlatformService } from './store/plateform.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    StoreFirstGuard,
    provideHttpClient(), provideAnimationsAsync(), provideClientHydration(withEventReplay()), PlatformService
  ],
};
