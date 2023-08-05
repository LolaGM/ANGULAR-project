import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  public receivedMessage:string = '';
  public receivedMessageFromChild:string = '';
  public messageToSendToChild:string = '';
  private subscription?: Subscription; 

  constructor(private communicationService: CommunicationService) {
    this.communicationService.getMessageToParentObs()
      .subscribe(message => {
        this.receivedMessageFromChild= message;
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  } 

  onClickSendMessageToChildInputOutput() {
    this.receivedMessage = 'Parent using Input OK';
  }

  receiveMessageFromChild(message: string) {
    this.receivedMessageFromChild = message;
  }
  
  onClickSendMessageToChildUsingService() {
    this.communicationService.sendMessageToChild();
    this.receivedMessage = this.communicationService.getMessageToChild();
  }

  onClickSendMessageToChildUsingObservable(){
    this.communicationService.sendMessageToChildByObservable('Parent using observable OK');
  }

}