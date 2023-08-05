import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { ActorsComponent } from './components/actors/actors.component';
import { MoviesComponent } from './components/movies/movies.component';
import { GenresComponent } from './components/genres/genres.component';


@NgModule({
  declarations: [   
    MenuComponent,
    ActorsComponent,
    MoviesComponent,
    GenresComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      path: 'search-menu',
        component: MenuComponent,
        children: [
          { path: 'movies', component: MoviesComponent },
          { path: 'actors', component: ActorsComponent },
          { path: 'genres', component: GenresComponent },
        ]
    ])
  ]
})
export class SearchMenuModule { }
