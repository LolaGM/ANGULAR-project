import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnDestroy{
  
  @Input() receivedMessage:string = '';

  @Output() messageToParent = new EventEmitter<string>();

  private subscription?: Subscription;

  constructor(private communicationService: CommunicationService) {
    this.subscription = this.communicationService.getMessageToChildObs()
      .subscribe(message => {
        this.receivedMessage = message;
    });   
  }
  
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  onClickSendMessageToParentUsingOutput() {
    this.messageToParent.emit('Child using Output OK');
  }

  onClickSendMessageToParentUsingService() {
    this.messageToParent.emit(this.communicationService.getMessageToParent());
    this.communicationService.sendMessageToParent();
  }

  onClickSendMessageToParentUsingObservable() {
    this.communicationService.sendMessageToParentByObservable('Child using Observable OK');
  }

}