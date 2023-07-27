import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  //INPUT padre-hijo
  @Input() messageToParent: string = '';

  //OUTPUT hijo-padre con un emisor de evento de tipo string
  @Output() messageToParentUsingOutput: EventEmitter<string> = new EventEmitter<string>();

  //SERVICE inyectado en componente
  constructor(private communicationService: CommunicationService) { 
    
  } 

  //OUTPUT método que envía mensaje con el texto dado usando EMIT
  sendMessageToParentUsingOutput() {    
    this.messageToParentUsingOutput.emit('CHILD USING OUTPUT EVENT');
  } 

  //SERVICE método que envía mensaje hijo-padre
  onClickSendMessageUsingService() {
    this.communicationService.setMessageUsingService('CHILD USING SERVICE');
  }

  //OBSERVABLE hijo-padre evento click
  onClickButtonSendObservableToParent() {
    this.communicationService.sendMessageToParent('CHILD USING OBSERVABLE');
  }

  //completar el OBSERVABLE
  



}
