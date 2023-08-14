import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrafficlightService } from '../../services/trafficlight.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css'],
})
export class TrafficComponent implements OnInit, OnDestroy {

  public selectedColor: string = 'red';
  public isSelected: boolean = false; 

  private colorSubscription!: Subscription;

  constructor(private trafficlightService: TrafficlightService) {}

  ngOnInit(): void {
    this.colorSubscription = this.trafficlightService.getActiveColor()
      .subscribe((color) => {
        this.selectedColor = color;
      });

    this.trafficlightService.getIsActivated()
      .subscribe(
        (isActivated) => {
          this.isSelected = isActivated;
        }
    );
  }

  ngOnDestroy(): void {
    if (this.colorSubscription) {
      this.colorSubscription.unsubscribe();
    }
  }
}
