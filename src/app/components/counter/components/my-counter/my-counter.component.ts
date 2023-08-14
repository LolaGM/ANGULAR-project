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
  public initialValue: number = 0; 

  private counting: boolean = false;
  private countingUp: boolean = false;

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
      this.countingUp = true;
      
      // Utilizar el valor inicial directamente
      this.counterValue = this.initialValue;
      
      this.counterSubscription = interval(1000) 
        .pipe(
          takeWhile(() => this.counting) 
        )
        .subscribe(() => {
          if (this.countingUp) {
            this.counterValue += this.referenceNumber;
          } else {
            this.counterValue -= this.referenceNumber;
          }
          this.counterSubject.next(this.counterValue);
        });
    } else {
      this.onPauseCount();
    }
  }


  onPauseCount() {
    this.counting = false;
    this.stopCountDown(); 

  }

  onResetCount() {
    this.counting = false; 
    this.counterValue = 0; 
    this.counterSubject.next(0); 
  }

  onCountUp(){
    this.stopCountDown(); 
    this.countingUp = true; 
    this.counterValue += this.incrementCount;
    this.counterSubject.next(this.counterValue);
  }

  onCountDown(){
    this.stopCountDown(); 
    this.countingUp = false; 
    this.counterValue -= this.decrementCount;
    this.counterSubject.next(this.counterValue);
  }

  stopCountDown() {
    if (this.countDownSubscription) {
      this.countDownSubscription.unsubscribe();
      this.countDownSubscription = undefined;
    }
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }


}
