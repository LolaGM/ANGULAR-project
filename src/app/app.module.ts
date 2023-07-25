import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayComponent } from './componentes/display/display.component';
import { CommunicationComponent } from './componentes/communication/communication.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CommunicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
