import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, interval, map, takeWhile } from 'rxjs';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit, OnDestroy {
  
  public counter$: Observable<number>;
  public referenceNumber:number = 1;

  private counterSubject = new BehaviorSubject<number>(0);
  private counterSubscription!: Subscription;
  public counterValue!: number;

  private counting: boolean = false;

  public incrementCount: number = 1;
  public decrementCount: number = 1;
  private countDownSubscription: Subscription | undefined;


  
  constructor(){
    this.counter$ = this.counterSubject.asObservable();
  }
  

  ngOnInit(): void {
    this.counterSubscription = this.counter$
      .pipe(
        map(count => count + this.referenceNumber))
      .subscribe( count => {
        this.counterSubject.next(count);
      })
  }

  onStartCount() {
    if (!this.counting) {
      this.counting = true;
      this.counterSubscription = interval(1000) 
        .pipe(
          map(count => count * this.referenceNumber),
          takeWhile(() => this.counting) 
        )
        .subscribe(count => {
          this.counterValue = count;
          this.counterSubject.next(count);
        });
    }
  }

  onPauseCount() {
    this.counting = false;
  }

  onResetCount() {
    this.counting = false; 
    this.counterValue = 0; 
    this.counterSubject.next(0); 
  }

  onCountUp(){
    this.counterValue += this.incrementCount;
    this.counterSubject.next(this.counterValue);
  }

  onCountDown(){
    if (!this.countDownSubscription) {
      this.countDownSubscription = interval(1000)
        .pipe(
          map(count => this.counterValue - (count + 1) * this.decrementCount), 
          takeWhile(count => count >= 0)
        )
        .subscribe(count => {
          this.counterValue = count;
          this.counterSubject.next(count);
        });
    }
  }
  

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }


}
