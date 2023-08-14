import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit{
  
  public counter$: Observable<number>;
  public selectedNumber:number = 1;

  private countSubject = new BehaviorSubject<number>(0);
  
  constructor(){
    this.counter$ = this.countSubject.asObservable();
  }

  ngOnInit(): void {

  }


}
