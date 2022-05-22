import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import localeId from '@angular/common/locales/id';
registerLocaleData(localeId, 'id')

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'id-ID'
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class AppModule { }
