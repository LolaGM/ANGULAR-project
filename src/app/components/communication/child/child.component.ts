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
    this.subscription = this.communicationService.getMessage()
      .subscribe(message => {
        this.receivedMessage = message;
    });
  }

  //acabar la suscripcion del observable
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  //OUTPUT hijo-padre
  sendMessageToParentUsingOutput() {
    const message = 'Child using Output';
    this.messageToParent.emit(message);
  }

  //SERVICE hijo-padre
  sendMessageToParentUsingService() {
    const message = 'Child using Service';
    this.messageToParent.emit(message);
  }

  //OBSERVABLE hijo-padre evento click
  onClickButtonSendObservableToParent() {
    const message = 'Child using Observable';
    this.messageToParent.emit(message);
  }

}

/*
En el constructor del componente, estamos inyectando el servicio CommunicationService. Luego, nos suscribimos al observable getMessage() del servicio. Cuando llega un mensaje a través del observable, el callback que contiene el método subscribe() se ejecuta. En este caso, estamos asignando el mensaje recibido a la propiedad receivedMessage del componente. Esto significa que cada vez que se reciba un mensaje a través del servicio, la propiedad receivedMessage del componente se actualizará con ese mensaje.


*/


