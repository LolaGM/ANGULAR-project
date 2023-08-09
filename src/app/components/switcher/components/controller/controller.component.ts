import { Component } from '@angular/core';
import { TrafficlightService } from '../../services/trafficlight.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  constructor(private trafficlightService: TrafficlightService) {}

  onColorChange(newColor: string) {
    this.trafficlightService.setActiveColor(newColor);

  }
  
  onColorActivation(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    console.log(event);

    this.trafficlightService.setIsActivated(isChecked);
  } 

}
