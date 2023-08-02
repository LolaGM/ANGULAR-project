import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private messageToParent:string = '';
  private messageToChild:string = '';

  private messageToParentSubject = new BehaviorSubject<string>('');
  private messageToChildSubject = new BehaviorSubject<string>('');

  getMessageToParent(): string {
    return this.messageToParent;
  }

  getMessageToChild(): string {
    return this.messageToChild;
  }

  sendMessageToParent() {
    this.messageToParent = 'Child using service to send a message to Parent';
  }

  sendMessageToChild() {
    this.messageToChild = 'Parent using service OK';
  }

  sendMessageToChildByObservable(message: string) {
    this.messageToChildSubject.next(message);
  }

  sendMessageToParentByObservable(message: string) {
    this.messageToParentSubject.next(message);
  }

  getMessageToParentObs(): Observable<string> {
    return this.messageToParentSubject.asObservable();
  }

  getMessageToChildObs(): Observable<string> {
    return this.messageToChildSubject.asObservable();
  }
}