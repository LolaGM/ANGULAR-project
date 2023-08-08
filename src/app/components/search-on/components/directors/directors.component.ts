import { Component } from '@angular/core';

import { Result } from '../../interfaces/directors.interface';
import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent {
  title: string = 'Directors';

  public directors: Result[] = [];
  public initialValue:string = '';

  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
  }
  
  searchByDirector(term:string):void{

    this.cinemaService.getDirectorsByQuery(term,1,10)
      .subscribe(directors => {
        console.log(directors);
        
        this.directors = directors.results;
      });
    
    console.log(this.directors);
  }

}
