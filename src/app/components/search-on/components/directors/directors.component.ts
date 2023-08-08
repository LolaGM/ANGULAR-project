import { Component } from '@angular/core';
import { Director } from '../../interfaces/directors.interface';
import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent {
  title: string = 'Directors';

  public directors: Director[] = [];

  public searchTerm: string = '';
  public searchResults: Director[] = [];


  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
  }

/*   onSearchDirectors(): void {
    if (this.searchTerm.trim() !== '') {
      this.cinemaService.getMovies(this.searchTerm)
        .subscribe(
          (director: Director[]) => {
            this.searchResults = director;
          },
          (error: any) => {
            console.error('Error al buscar películas:', error);
          }
      );
    } else {
      this.searchResults = [];
    }
  } */


}
