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
  private subscription?: Subscription;
 

  constructor(private communicationService: CommunicationService){}

  sendServiceMessage(){
    this.communicationService.sendMessageToChild('Parent using service')
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  sendMessageToChildInputOutput() {
    this.receivedMessage = 'Parent using Input OK';
  }

  sendMessageToChildService() {
    this.communicationService.sendMessageToChild('Parent using Service OK');
  }

  sendObservableMessage(){
    this.communicationService.sendMessageToChild('Parent using observable OK');
  }

  receiveMessageFromChild(message: string) {
    this.receivedMessageFromChild = message;
  }

}

