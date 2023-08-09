import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrafficComponent } from './components/traffic/traffic.component';
import { ControllerComponent } from './components/controller/controller.component';


@NgModule({
  declarations: [
    TrafficComponent,
    ControllerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SwitcherModule { }
