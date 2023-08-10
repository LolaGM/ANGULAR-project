import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrafficlightService } from '../../services/trafficlight.service';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css']
})
export class TrafficComponent implements OnInit, OnDestroy {


  public isSelected: boolean = false;
  public selectedColor: string = 'red';

  private subscription!: Subscription;

  constructor(private trafficlightService: TrafficlightService) {}

  ngOnInit() {
    this.subscription = this.trafficlightService.getActiveColor().subscribe(
      (color) => {
        this.selectedColor = color;
      }
      );

    this.subscription = this.trafficlightService.getIsActivated().subscribe(
      (isActivated) => {
        this.isSelected = isActivated;
      }
    )
  

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
