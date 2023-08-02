import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes [
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
