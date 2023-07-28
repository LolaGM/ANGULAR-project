import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnDestroy{

  
  //INPUT
  @Input() receivedMessage: string = '';

  //OUTPUT hijo-padre con un emisor de evento de tipo string
  @Output() messageToParent = new EventEmitter<string>();

  //la propiedad es opcional y permite que sea undefined o valor de tipo Suscription
  private subscription?: Subscription;

  constructor(private communicationService: CommunicationService) {
    //observable
    this.subscription = this.communicationService.getMessage()
      .subscribe(message => {
        this.receivedMessage = message;
    });
    this.receivedMessage = this.communicationService.getMessageToChild();

  }

  
  //acabar la suscripcion del observable
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  //OUTPUT hijo-padre
  onClickSendMessageToParentUsingOutput() {
    this.messageToParent.emit('Child using Output OK');
  }

  //servicio que desde el botón hace click en el componente invocando al servicio
  onClickSendMessageToParentUsingService() {
    this.communicationService.sendMessageToParent();
    this.receivedMessage = this.communicationService.getMessageToParent();
  }

  //OBSERVABLE hijo-padre evento click. Contiene el mensaje a enviar
  onClickSendMessageToParentUsingObservable() {
    this.communicationService.sendMessageToParentByObservable('Child using Observable');
  }

}

/*
En el constructor del componente, estamos inyectando el servicio CommunicationService. Luego, nos suscribimos al observable getMessage() del servicio. Cuando llega un mensaje a través del observable, el callback que contiene el método subscribe() se ejecuta. En este caso, estamos asignando el mensaje recibido a la propiedad receivedMessage del componente. Esto significa que cada vez que se reciba un mensaje a través del servicio, la propiedad receivedMessage del componente se actualizará con ese mensaje.


*/


