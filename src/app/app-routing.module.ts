import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartOnePageComponent } from './pages/part-one/part-one-page.component';
import { PartTwoPageComponent } from './pages/part-two/part-two-page.component';

import { DisplayComponent } from './componentes/display/display.component';

const routes: Routes = [
  {
    path: 'part-one',
    component: PartOnePageComponent,
    children: [ //rutas hija que aparecerá en navegador como /part-one/display o el elemento que hagamos clic
      {
        path: 'display',
        component: DisplayComponent
      },

    ]
  },
  {
    path: 'part-two', 
    component: PartTwoPageComponent
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
