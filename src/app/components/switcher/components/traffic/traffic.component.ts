import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrafficlightService } from '../../services/trafficlight.service';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css']
})
export class TrafficComponent implements OnInit, OnDestroy {

  isRedOn: boolean = false;
  isYellowOn: boolean = false;
  isGreenOn: boolean = false;

  private subscription!: Subscription;

  constructor(private trafficlightService: TrafficlightService) {}

  ngOnInit() {
    this.subscription = combineLatest([
      this.trafficlightService.getIsActivated(),
      this.trafficlightService.getActiveColor()
    ]).subscribe(([isActivated, activeColor]) => {
      if (isActivated) {
        this.isRedOn = activeColor === 'red';
        this.isYellowOn = activeColor === 'yellow';
        this.isGreenOn = activeColor === 'green';
      } else {
        this.isRedOn = false;
        this.isYellowOn = false;
        this.isGreenOn = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
