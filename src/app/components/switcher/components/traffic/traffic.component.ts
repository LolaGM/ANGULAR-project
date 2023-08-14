import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrafficlightService } from '../../services/trafficlight.service';
import { Subscription, interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css'],
})
export class TrafficComponent implements OnInit, OnDestroy {

  public isSelected: boolean = false;

  public selectedColor: string = 'red';

  public colorArray: string[] = ['red', 'yellow', 'green'];
  private colorIndex: number = 0;

  private intervalSubscription!: Subscription;
  private colorSubscription!: Subscription;
  private activationSubscription!: Subscription;

  constructor(private trafficlightService: TrafficlightService) {}

  ngOnInit(): void {

    this.colorSubscription = this.trafficlightService
      .getActiveColor()
      .subscribe((color) => {
        this.selectedColor = color;
      });

    this.activationSubscription = this.trafficlightService.getIsActivated().subscribe(
      (isActivated) => {
        this.isSelected = isActivated;
        if (isActivated) {
          this.startTrafficLight();
        } else {
          this.stopTrafficLight();
        }
      }
    );
  }

  ngOnDestroy(): void {

    this.stopTrafficLight();

    if (this.colorSubscription) {
      this.colorSubscription.unsubscribe();
    }
    
    if (this.activationSubscription) {
      this.activationSubscription.unsubscribe();
    }
  }

  private startTrafficLight(): void {
    
    this.intervalSubscription = interval(1500)
      .pipe(takeWhile(() => this.isSelected))
      .subscribe(() => {
        this.colorIndex = (this.colorIndex + 1) % this.colorArray.length;
        this.trafficlightService.setActiveColor(
          this.colorArray[this.colorIndex]
        );
      });
  }

  private stopTrafficLight(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}
