import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng.module';
import { SharedModule } from './shared/shared.module';

// configuracion zona local
import locale_es_CL from '@angular/common/locales/es-CL';
import locale_fr_FR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(locale_es_CL);
registerLocaleData(locale_fr_FR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    PrimeNgModule,

    SharedModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
