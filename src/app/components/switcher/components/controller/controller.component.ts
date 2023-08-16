import { Component, OnDestroy } from '@angular/core';
import { TrafficlightService } from '../../services/trafficlight.service';
import { Subscription, interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnDestroy {

  public isTrafficLightOn: boolean = false;
  private intervalSubscription!: Subscription;

  private colorArray: string[] = ['red', 'yellow', 'green'];
  private colorIndex: number = 0;

  public selectedColor: string = 'red';

  constructor(private trafficlightService: TrafficlightService) {}

  onChangeColor(event: Event): void {    
    this.trafficlightService.setActiveColor(this.selectedColor);
    console.log(this.selectedColor);
  }

  onColorActivation() {
    console.log('Before toggle: isTrafficLightOn =', this.isTrafficLightOn);  
    this.isTrafficLightOn = !this.isTrafficLightOn;
    
    this.trafficlightService.setIsActivated(this.isTrafficLightOn);  

    if (this.isTrafficLightOn) {
      this.startTrafficLight();
    } else {
      this.stopTrafficLight();
    }

    console.log('After toggle: isTrafficLightOn =', this.isTrafficLightOn);
  }

  //temporizador del semáforo
  private startTrafficLight(): void {
    this.intervalSubscription = interval(1500)
      .pipe(takeWhile(() => this.isTrafficLightOn))
      .subscribe(() => {
        this.colorIndex = (this.colorIndex + 1) % this.colorArray.length;
        this.trafficlightService.setActiveColor(this.colorArray[this.colorIndex]);
      });
  }

  private stopTrafficLight(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.stopTrafficLight();
  }
}
