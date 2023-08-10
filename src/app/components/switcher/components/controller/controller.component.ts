import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrafficlightService } from '../../services/trafficlight.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnDestroy {

  public isTrafficLightOn: boolean = false;
  private subscription!: Subscription;

  constructor(private trafficlightService: TrafficlightService) {}

  onChangeColor(event: Event): void {
    const color = (event.target as HTMLSelectElement).value;

    this.trafficlightService.setActiveColor(color);
    console.log(color);

  }

  onColorActivation() {
    console.log('Before toggle: isTrafficLightOn =', this.isTrafficLightOn);  
    this.isTrafficLightOn = !this.isTrafficLightOn;
    this.trafficlightService.setIsActivated(this.isTrafficLightOn);  
    console.log('After toggle: isTrafficLightOn =', this.isTrafficLightOn);
  }
  

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
