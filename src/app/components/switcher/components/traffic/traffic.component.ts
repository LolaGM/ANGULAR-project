import { Component } from '@angular/core';
import { TrafficlightService } from '../../services/trafficlight.service';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css']
})
export class TrafficComponent {


  constructor(private trafficlightService: TrafficlightService) {}

}
