import { Component, OnDestroy } from '@angular/core';
import { CinemaService } from '../../services/cinema.service';
import { Result } from '../../interfaces/directors.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnDestroy {

  title: string = 'Directors';
  public directors: Result[] = [];
  public initialValue: string = '';
  private subscription: Subscription | undefined;

  constructor(private cinemaService: CinemaService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  searchByDirector(term: string): void {
    this.subscription = this.cinemaService.getDirectorsByQuery(term, 1, 10)
      .subscribe(directors => {
        console.log(directors);
        this.directors = directors.results;
      });
  }
}
