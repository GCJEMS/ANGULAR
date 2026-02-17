// src/main.ts
import '@angular/compiler'; // required for JIT in dev
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
})
.catch(err => console.error(err));
 