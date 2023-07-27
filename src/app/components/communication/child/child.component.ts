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

  //la propiedad es opcional y permite que sea undefined al principio
  private subscription?: Subscription;

  constructor(private communicationService: CommunicationService) {
    this.subscription = this.communicationService.getMessage()
      .subscribe(message => {
        this.receivedMessage = message;
    });
  }

  //acabar la suscripcion del obserbvable
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  //OUTPUT hijo-padre
  sendMessageToParentUsingOutput() {
    const message = 'Child using Output OK';
    this.messageToParent.emit(message);
  }

  //SERVICE hijo-padre
  sendMessageToParentUsingService() {
    const message = 'Child using Service OK';
    this.messageToParent.emit(message);
  }

  //OBSERVABLE hijo-padre evento click
  onClickButtonSendObservableToParent() {
    this.communicationService.sendMessageToParent('CHILD USING OBSERVABLE');
  }







}
