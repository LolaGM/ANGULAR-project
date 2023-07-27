import { Component } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  //INPUT 
  public messageToChild:string = '';

  //SERVICE
  public messageFromChild:string = '';

  //OUTPUT
  public messageReceivedUsingOutput:string = '';

  //SERVICE inyectado en componente
  constructor(private communicationService: CommunicationService) { } 

  //onInit del OBSERVABLE
  ngOnInit() {
    this.communicationService.getObservableChild()
      .subscribe((message: string) => {
        this.messageFromChild = message;
    });
  }


  //INPUT método para enviar mensaje al hijo
  sendMessageUsingInput() {
    this.messageToChild = 'PARENT USING INPUT PROPERTY';
  }

  //OUTPUT método para recibir mensaje del hijo
  receiveMessageFromChildUsingOutput(messageReceivedFromChild:string): void {
    this.messageReceivedUsingOutput = messageReceivedFromChild;
  }
  
  //SERVICE método para recibir mensaje del hijo
  onClickSendMessageUsingService() {
    this.communicationService.setMessageUsingService('PARENT USING SERVICE');
  }

  //OBSERVABLE padre-hijo
  onClickButtonSendObservableToChild(){
    this.communicationService.sendMessageToChild('PARENT USING OBSERVABLE');
  }

  //completar el OBSERVABLE
  
}

