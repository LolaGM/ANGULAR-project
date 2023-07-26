import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  //INPUT padre-hijo
  @Input() message: string = '';

  //OUTPUT hijo-padre con un emisor de evento de tipo string
  @Output() messageToParentUsingOutput: EventEmitter<string> = new EventEmitter<string>();

  //SERVICE propiedad
/*   public messageToParentUsingService:string =''; */

  //SERVICE inyectado en componente
/*   constructor(private communicationService: CommunicationService) {
    this.messageToParentUsingService = this.communicationService.getMessageFromParentUsingService();
  } */

  //OUTPUT método que envía mensaje con el texto dado
  sendMessageToParentUsingOutput() {    
    this.messageToParentUsingOutput.emit('CHILD USING OUTPUT EVENT');
  } 

  //SERVICE método que envía mensaje 
  /*  sendMessageFromChildUsingService() {
    this.communicationService.setMessageFromChildUsingService('CHILD USING SERVICE')
  } */


}
