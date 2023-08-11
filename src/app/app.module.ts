import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchOnMenuModule } from './components/search-on/search-on-menu.module';


import { CommunicationService } from './components/communication/services/communication.service';
import { UserUpdatedService } from './components/crud-form/services/user-updated.service';
import { FormService } from './components/crud-form/services/form.service';
import { ValidatorsService } from './components/crud-form/services/validator.service';

import { PartOnePageComponent } from './pages/part-one/part-one-page.component';
import { PartTwoPageComponent } from './pages/part-two/part-two-page.component';

import { DisplayComponent } from './components/display/display.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { SearchOnComponent } from './components/search-on/search-on.component';
import { CounterComponent } from './components/counter/counter.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { ChildComponent } from './components/communication/components/child/child.component';
import { ParentComponent } from './components/communication/components/parent/parent.component';
import { FormComponent } from './components/crud-form/components/form/form.component';
import { TablaCRUDComponent } from './components/crud-form/components/table-crud/table-crud.component';
import { TrafficComponent } from './components/switcher/components/traffic/traffic.component';
import { ControllerComponent } from './components/switcher/components/controller/controller.component';

import { TrafficlightService } from './components/switcher/services/trafficlight.service';
import { SwitcherModule } from './components/switcher/switcher.module';

import { BarChartComponent } from './components/graphs/components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/graphs/components/line-chart/line-chart.component';
import { ChartsService } from './components/graphs/services/charts.service';



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
    TablaCRUDComponent,
    TrafficComponent,
    ControllerComponent,
    BarChartComponent,
    LineChartComponent
  

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,   
    FormsModule, 
    CommonModule,
    HttpClientModule,
    SearchOnMenuModule,
    SwitcherModule,

  ],  
  
  providers: [ 
  CommunicationService,
  ValidatorsService,
  FormService,
  UserUpdatedService,
  TrafficlightService,
  ChartsService


  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
