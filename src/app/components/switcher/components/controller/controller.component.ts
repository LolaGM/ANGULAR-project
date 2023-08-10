import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrafficlightService } from '../../services/trafficlight.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit, OnDestroy{

  public isTrafficLightOn: boolean = false;
  private subscription!: Subscription;
  public selectedColor: string = 'red'; 


  constructor(private trafficlightService: TrafficlightService) {}
  ngOnInit(): void {
    this.subscription = this.trafficlightService.getIsActivated().subscribe(isActivated => {
      this.isTrafficLightOn = isActivated;
    });
  }  
  
  onColorActivation() {
    console.log('Before toggle: isTrafficLightOn =', this.isTrafficLightOn);  
    this.isTrafficLightOn = !this.isTrafficLightOn;

    this.trafficlightService.setIsActivated(this.isTrafficLightOn);  
    console.log('After toggle: isTrafficLightOn =', this.isTrafficLightOn);
  }

  onColorChange(newColor: string) {
    console.log('Color changed:', newColor);
    this.trafficlightService.setActiveColor(newColor);
  }


  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
