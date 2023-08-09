import { Component, OnDestroy } from '@angular/core';
import { CinemaService } from '../../services/cinema.service';
import { Result } from '../../interfaces/actors.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnDestroy {

  public title: string = 'Actors';
  public actors: Result[] = [];
  public initialValue: string = '';
  private subscription: Subscription | undefined;

  constructor(private cinemaService: CinemaService) { }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  searchByActor(term: string): void {
    this.subscription = this.cinemaService.getActorsByQuery(term, 1, 10)
      .subscribe(actors => {
        console.log(actors);
        this.actors = actors.results;
      });
  }
}
