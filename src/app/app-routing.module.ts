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
        component: SearchOnComponent,
        children: [ 
          { path: 'search-menu',
          loadChildren: () => import('./components/search-on/search-on-menu.module').then(m => m.SearchOnMenuModule) },  
        ]
      },
    ]
  },

  {
    path: 'part-two', 
    component: PartTwoPageComponent,
    children: [
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
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }