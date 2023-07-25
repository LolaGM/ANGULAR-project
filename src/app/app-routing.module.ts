import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartOnePageComponent } from './pages/part-one/part-one-page.component';
import { PartTwoPageComponent } from './pages/part-two/part-two-page.component';

import { DisplayComponent } from './components/display/display.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { SearchOnComponent } from './components/search-on/search-on.component';
import { CounterComponent } from './components/counter/counter.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { SwitcherComponent } from './components/switcher/switcher.component';

const routes: Routes = [
  {
    path: 'part-one',
    component: PartOnePageComponent,
    children: [ //rutas hija que aparecerá en navegador como /part-one/display o el elemento que hagamos clic
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
    ]
  },
  {
    path: 'part-two', 
    component: PartTwoPageComponent,
    children: [ //rutas hija que aparecerá en navegador como /part-two/switcher o el elemento que hagamos clic
      {
        path: 'switcher',
        component: SwitcherComponent
      },
      {
        path: 'graphs',
        component: GraphsComponent
      },
      {
        path: 'counter',
        component: CounterComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'part-one'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
