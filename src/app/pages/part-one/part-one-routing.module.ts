import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommunicationComponent } from 'src/app/components/communication/communication.component';
import { CrudFormComponent } from 'src/app/components/crud-form/crud-form.component';
import { DisplayComponent } from 'src/app/components/display/display.component';
import { SearchOnComponent } from 'src/app/components/search-on/search-on.component';
import { PartOnePageComponent } from './part-one-page.component';

const routes: Routes [
  {
    path: '',
    children: [
      {
        path: 'display',
        component: DisplayComponent
      },
      {
        path: 'communication',
        component: CommunicationComponent
      },
      {
        path: 'crud-form',
        component: CrudFormComponent
      },
      {
        path: 'search-on',
        component: SearchOnComponent
      },
      {
        path: '**',
        redirectTo: 'communication'
      }
    ]
  }  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PartOneModule { }
