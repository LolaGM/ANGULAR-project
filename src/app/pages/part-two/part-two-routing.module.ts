import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes [
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
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PartTwoModule { }
