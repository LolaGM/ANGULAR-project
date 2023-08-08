import { Component } from '@angular/core';
import { Actor, Result } from '../../interfaces/actors.interface';

import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {

  public title: string = 'Actors';

  public actors: Result[] = [];
  public initialValue:string = '';


  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
  }

  searchByActor(term:string):void{

    this.cinemaService.getActorsByQuery(term,1,10)
      .subscribe(actors => {
        console.log(actors);
        
        this.actors = actors.results;
      });
    
    console.log(this.actors);
  }


}
