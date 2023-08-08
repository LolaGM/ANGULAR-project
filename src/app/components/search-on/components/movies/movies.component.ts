import { Component } from '@angular/core';
import { Movie, Result } from '../../interfaces/movies.interface';
import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  public title: string = 'Movies';
  
  public movies: Result[] = [];
  public initialValue:string = '';

  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
  }
  
  searchByMovie(term:string):void{

    this.cinemaService.getMoviesByQuery(term,1,10)
      .subscribe(movies => {
        console.log(movies);
        
        this.movies = movies.results;
      });
    
    console.log(this.movies);
  }

}
