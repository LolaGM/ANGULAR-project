import { Component } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public messageForChild: string ='';

  //INPUT
  public messageToChildUsingInput = '';

  //OUTPUT
  public messageReceivedUsingOutput = '';

  //SERVICE propiedad
/*   public messageToChildUsingService:string ='' */;

  //SERVICE inyectado en componente
  constructor(private communicationService: CommunicationService) {
    
  } 

  //INPUT método para enviar mensaje al hijo
  sendMessageUsingInput() {
    this.messageToChildUsingInput = 'PARENT USING INPUT PROPERTY';
  }

  //OUTPUT método para recibir mensaje del hijo
  receiveMessageFromChildUsingOutput(messageReceivedFromChild:string): void {
    this.messageReceivedUsingOutput = messageReceivedFromChild;
  }
  
  //SERVICE método
 /*  sendMessageFromParentUsingService() {
    this.communicationService.setMessageFromParentUsingService('PARENT USING SERVICE')
  } */
  


  //OBSERVABLE método 
  /* changeMessageUsingObservable(message: string) {
    this.messageFromChild = message;
  } */

  /* sendMessageToChild() {
    this.communicationService.setMessage(this.messageToSend);
    this.messageToSend = ''; // Limpiamos el input después de enviar el mensaje
  } */

}
