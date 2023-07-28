import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { CommunicationService } from './services/communication.service';

import { PartOnePageComponent } from './pages/part-one/part-one-page.component';
import { PartTwoPageComponent } from './pages/part-two/part-two-page.component';
import { DisplayComponent } from './components/display/display.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { SearchOnComponent } from './components/search-on/search-on.component';
import { CounterComponent } from './components/counter/counter.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { ChildComponent } from './components/communication/child/child.component';
import { ParentComponent } from './components/communication/parent/parent.component';
import { FormComponent } from './components/crud-form/form/form.component';
import { ListComponent } from './components/crud-form/list/list.component';
import { FormService } from './services/form.service';
import { ValidatorsService } from './services/validator.service';
import { LocalDataService } from './services/local-data.service';
import { TablaCRUDComponent } from './components/crud-form/table-crud.component.ts/table-crud.component';

@NgModule({
  declarations: [
    AppComponent, 
    PartOnePageComponent,
    PartTwoPageComponent,
    DisplayComponent,
    CommunicationComponent,
    ChildComponent,
    ParentComponent,
    CrudFormComponent,
    SearchOnComponent,
    CounterComponent,
    GraphsComponent,
    SwitcherComponent,
    FormComponent,
    ListComponent,
    TablaCRUDComponent,   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,    
    CommonModule,

  ],  
  
  providers: [ //agregamos el servicio dentro de proveedores
  CommunicationService,
  ValidatorsService,
  FormService,
  LocalDataService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
