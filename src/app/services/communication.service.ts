import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//no olvidemos importar en app module el servicio

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  //SERVICE mensajes que se llamarán con método en cada componente
  public messageFromParentUsingService:string = 'PARENT USING SERVICE';  
  public messageFromChildUsingService:string = 'CHILD USING SERVICE'; 

  //OBSERVABLE mensajes
  public messageFromParentUsingObservable$:BehaviorSubject<string> = new BehaviorSubject('');
  public messageFromChildUsingObservable$:BehaviorSubject<string>  = new BehaviorSubject('');

  //SERVICIO para enviar mensaje hijo-padre
  getMessageFromChild(): string {
    return this.messageFromChildUsingService;
  }

  setMessageFromChild(message: string): void {
    this.messageFromChildUsingService = message;  
  }

  //OBSERVABLE padre
  getObservableParent() {
    return this.messageFromParentUsingObservable$;
  }

  sendMessageToParent(message:string){
    this.messageFromParentUsingObservable$.next(message);
  }

  //OBSERVABLE hijo
  getObservableChild() {
    return this.messageFromChildUsingObservable$;
  }

  sendMessageToChild(message:string){
    this.messageFromChildUsingObservable$.next(message);
  }
  
}