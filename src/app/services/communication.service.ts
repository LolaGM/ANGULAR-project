import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//no olvidemos importar en app module el servicio

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private messageSubject = new BehaviorSubject<string>('');

  sendMessageToChild(message: string) {
    this.messageSubject.next(message);
  }

  //TODO:
  sendMessageToParent(message: string) {
    this.messageSubject.next(message);
  }

  getMessage() {
    return this.messageSubject.asObservable();
  }
  
}