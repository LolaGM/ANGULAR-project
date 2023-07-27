import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//no olvidemos importar en app module el servicio

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  //SERVICE mensaje vacío
  public messageUsingService:string = '';  

  //OBSERVABLE mensajes
  private messageFromParentUsingObservable$ = new BehaviorSubject<string>('');
  private messageFromChildUsingObservable$ = new BehaviorSubject<string>('');

  //SERVICIO para enviar mensaje hijo-padre
  getMessageUsingService(): string {
    return this.messageUsingService;
  }

  setMessageUsingService(message: string): void {
    this.messageUsingService = message;  
  }

  //OBSERVABLE padre
  getObservableParent() {
    return this.messageFromParentUsingObservable$.asObservable();
  }

  sendMessageToParent(message:string){
    this.messageFromParentUsingObservable$.next(message);
  }

  //OBSERVABLE hijo
  getObservableChild() {
    return this.messageFromChildUsingObservable$.asObservable();
  }

  sendMessageToChild(message:string){
    this.messageFromChildUsingObservable$.next(message);
  }
  
}