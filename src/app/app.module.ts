import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'

const routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/index/index.module').then((m) => m.IndexModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home/scan-card',
    loadChildren: () =>
      import('./pages/scan-card/scan-card.module').then(
        (m) => m.ScanCardModule
      ),
  },
  {
    path: 'home/scan-driver',
    loadChildren: () =>
      import('./pages/scan-driver/scan-driver.module').then(
        (m) => m.ScanDriverModule
      ),
  },
  {
    path: 'home/amount',
    loadChildren: () =>
      import('./pages/amount/amount.module').then((m) => m.AmountModule),
  },
  {
    path: 'home/insert-n-i-p',
    loadChildren: () =>
      import('./pages/insert-n-i-p/insert-n-i-p.module').then(
        (m) => m.InsertNIPModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
