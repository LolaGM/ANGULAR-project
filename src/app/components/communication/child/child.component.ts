import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnDestroy{
  
  //INPUT
  @Input() receivedMessage:string = '';

  //OUTPUT hijo-padre con un emisor de evento de tipo string
  @Output() messageToParent = new EventEmitter<string>();

  //la propiedad es opcional y permite que sea undefined o valor de tipo Suscription
  private subscription?: Subscription;

  constructor(private communicationService: CommunicationService) {
    //observable
    this.subscription = this.communicationService.getMessageToChildObs()
      .subscribe(message => {
        this.receivedMessage = message;
    });   
  }
  
  //acabar la suscripcion del observable
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  //OUTPUT hijo-padre
  onClickSendMessageToParentUsingOutput() {
    this.messageToParent.emit('Child using Output OK');
  }

  //TODO servicio + output con emit evento click que desde el botón hace click en el componente invocando al servicio
  onClickSendMessageToParentUsingService() {
    this.messageToParent.emit(this.communicationService.getMessageToParent()); // Emitir el mensaje al padre
    this.communicationService.sendMessageToParent();


  }

  //OBSERVABLE evento click hijo-padre. Contiene el mensaje a enviar
  onClickSendMessageToParentUsingObservable() {
    this.communicationService.sendMessageToParentByObservable('Child using Observable OK');
  }

}

/*
En el constructor del componente, estamos inyectando el servicio CommunicationService. Luego, nos suscribimos al observable getMessage() del servicio. Cuando llega un mensaje a través del observable, el callback que contiene el método subscribe() se ejecuta. En este caso, estamos asignando el mensaje recibido a la propiedad receivedMessage del componente. Esto significa que cada vez que se reciba un mensaje a través del servicio, la propiedad receivedMessage del componente se actualizará con ese mensaje.


*/


