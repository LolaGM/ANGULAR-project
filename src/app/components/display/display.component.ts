import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent {
  
  public visibleMessage:boolean = false;
  public messageForYou:string = 'My name is Lola';

  displayHide(){
    this.visibleMessage = !this.visibleMessage;
  }
}