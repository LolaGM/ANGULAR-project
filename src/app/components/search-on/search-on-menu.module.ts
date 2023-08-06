import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ActorsComponent } from './components/actors/actors.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DirectorsComponent } from './components/directors/directors.component';

@NgModule({
  declarations: [
    ActorsComponent,
    MoviesComponent,
    DirectorsComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: '', redirectTo: 'movies', pathMatch: 'full' }, 
          { path: 'movies', component: MoviesComponent },
          { path: 'actors', component: ActorsComponent },
          { path: 'directors', component: DirectorsComponent },
        ]
      }
    ])
  ]
})
export class SearchOnMenuModule { }