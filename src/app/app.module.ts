import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';                 // Para animaciones o componentes con las mismas
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Traducciones
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    BrowserAnimationsModule,
    VentasModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
