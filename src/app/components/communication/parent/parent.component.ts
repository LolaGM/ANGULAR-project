import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnDestroy {

  public receivedMessage:string = '';
  public receivedMessageFromChild:string = '';
  private subscription?: Subscription; //suscripción opcional 

  constructor(private communicationService: CommunicationService) {
    this.subscription = this.communicationService.getMessage()
      .subscribe(message => {
        this.receivedMessage = message;
    });
  }
 
  // desuscribirnos del observable al que nos suscribimos anteriormente
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  //INPUT método para enviar mensaje 
  onClickSendMessageToChildInputOutput() {
    this.receivedMessage = 'Parent using Input OK';
  }

  //OUTPUT método prara recibir el padre el mensaje del hijo (el hijo tendrá otro método de enviar)
  receiveMessageFromChild(message: string) {
    this.receivedMessageFromChild = message;
  }

   //SERVICIO método que convoca al servicio y su método y le pasa el valor del mensaje
  onClickSendMessageToChildUsingService() {
    this.communicationService.sendMessageToChild();
    this.receivedMessage = this.communicationService.getMessageToChild();
  }

  //OBSERVABLE que invoca al servicio y el propio componente
  onClickSendMessageToChildUsingObservable(){
    this.communicationService.sendMessageToChildByObservable('Parent using observable OK');
  }

}

/*
estamos declarando una propiedad privada llamada subscription en la clase del componente. La propiedad tiene el tipo Subscription que es una clase de RxJS que representa una suscripción a un observable. Al agregar ? después de subscription, la propiedad se declara como opcional, lo que significa que puede ser undefined o tener un valor de tipo Subscription

El método ngOnDestroy() es un método del ciclo de vida de los componentes de Angular que se ejecuta justo antes de que el componente sea destruido. Aquí estamos utilizando este método para desuscribirnos del observable al que nos suscribimos anteriormente.

De esta manera, estamos suscribiéndonos al observable del servicio CommunicationService (método get) en el constructor del componente y almacenando la suscripción en la propiedad subscription. Luego, en el método ngOnDestroy(), nos desuscribimos solo si existe una suscripción activa. Así aseguramos que no haya errores al desuscribirnos.
*/

