import { Component } from '@angular/core';
import { Actor } from '../../interfaces/actors.interface';

import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {

  public title: string = 'Actors';

  public actors: Actor[] = [];
  public searchInput: string = '';
  public searchResults: Actor[] = [];

  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
  }

 /*  onSearchMovies() {
    if (this.searchInput && this.searchInput.length > 0) {
        this.cinemaService.searchActors(this.searchInput).subscribe(
        (actors: Actor[]) => {
          this.searchResults = actors;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.searchResults = [];
    }
  } */
}
