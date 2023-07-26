import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//no olvidemos importar en app module el servicio

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  //SERVICE mensajes 
  /* public messageFromParentUsingService:string = 'PARENT USING SERVICE';  
  public messageFromChildUsingService:string = 'CHILD USING SERVICE'; */

  //OBSERVABLE mensajes
  public messageForParentUsingObservable$ = new BehaviorSubject<string>('');
  public messageForChildUsingObservable$  = new BehaviorSubject<string>('');

  //SERVICE get y set para mensaje del padre en el hijo
  /* getMessageFromParentUsingService():string{
    return this.messageFromParentUsingService;
  }

  setMessageFromParentUsingService(message:string){
    this.messageFromParentUsingService = message;
  }  */

  //SERVICE get y set para mensaje del hijo en el padre

  /*  getMessageFromChildUsingService():string{
    return this.messageFromChildUsingService;
  }

  setMessageFromChildUsingService(message:string){
    this.messageFromChildUsingService = message;
  }  */


  
}