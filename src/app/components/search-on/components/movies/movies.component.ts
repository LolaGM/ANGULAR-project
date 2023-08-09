import { Component, OnDestroy } from '@angular/core';

import { CinemaService } from '../../services/cinema.service';

import { Result } from '../../interfaces/movies.interface';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnDestroy {

  public title: string = 'Movies';
  public movies: Result[] = [];
  public initialValue: string = '';
  private subscription: Subscription | undefined;

  constructor(private cinemaService: CinemaService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  searchByMovie(term: string): void {
    this.subscription = this.cinemaService.getMoviesByQuery(term, 1, 10)
      .subscribe(movies => {
        console.log(movies);
        this.movies = movies.results;
      });
  }
}
