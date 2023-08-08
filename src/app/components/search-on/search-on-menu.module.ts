import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { ActorsComponent } from './components/actors/actors.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DirectorsComponent } from './components/directors/directors.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';

@NgModule({
  declarations: [
    ActorsComponent,
    MoviesComponent,
    DirectorsComponent,
    SearchboxComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
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