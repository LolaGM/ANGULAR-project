import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartOneRoutingModule} from './partOneRouting.module';

import { CommunicationComponent } from 'src/app/components/communication/communication.component';
import { DisplayComponent } from 'src/app/components/display/display.component';
import { PartOnePageComponent } from './part-one-page.component';
import { CrudFormComponent } from 'src/app/components/crud-form/crud-form.component';
import { SearchOnComponent } from 'src/app/components/search-on/search-on.component';



@NgModule({
  declarations: [
    CommunicationComponent,
    DisplayComponent,
    CrudFormComponent,
    SearchOnComponent,
    PartOnePageComponent,
  ],
  imports: [
    CommonModule,
    
  ]
})
export class PartOneModule { }
