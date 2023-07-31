import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

//no olvidemos importar en app module el servicio

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private messageToParent:string = '';
  private messageToChild:string = '';

  //propiedad privada que contiene una instancia de Behaviour Subject y le pasamos valor inicial vacío
  private messageToParentSubject = new BehaviorSubject<string>('');
  private messageToChildSubject = new BehaviorSubject<string>('');//(observable behaviour subject como fuente de datos que emite valores a los observadores)

   // Método para obtener el mensaje que se enviará al componente padre
  getMessageToParent(): string {
    return this.messageToParent;
  }

  // Método para obtener el mensaje que se enviará al componente hijo
  getMessageToChild(): string {
    return this.messageToChild;
  }

   // Método para enviar el mensaje desde el componente hijo al servicio y actualizar el mensaje del componente padre
  sendMessageToParent() {
    this.messageToChild = 'CHILD USING SERVICE';
  }

  // Método para enviar el mensaje desde el componente padre al servicio y actualizar el mensaje del componente hijo
  sendMessageToChild() {
    this.messageToChild = 'Parent using service';
  }

  //OBSERVABLE método padre-hijo que en el componente propio contiene 'mensaje'
  sendMessageToChildByObservable(message: string) {
    this.messageToChildSubject.next(message);
  }

  //OBSERVABLE método hijo-padre que en el componente propio contiene 'mensaje'
  sendMessageToParentByObservable(message: string) {
    this.messageToParentSubject.next(message);
  }

  //método que devuelve el messageSubject como observable: los componentes se suscriben para recibir mensajes pero no emiten

  getMessageToParentObs(): Observable<string> {
    return this.messageToParentSubject.asObservable();
  }

  getMessageToChildObs(): Observable<string> {
    return this.messageToChildSubject.asObservable();
  }
  
}

/*
El método next() es un método proporcionado por los objetos BehaviorSubject en RxJS. Es utilizado para emitir nuevos valores y notificar a los observadores registrados sobre ese nuevo valor.

Un BehaviorSubject actúa como una fuente de datos que emite un flujo de valores a todos sus observadores cada vez que se llama a next() con un nuevo valor. Cuando se crea un BehaviorSubject, se inicializa con un valor predeterminado. Cada vez que se llama a next() con un valor, el BehaviorSubject emite ese valor a todos los observadores, incluso si no ha habido cambios desde el último valor emitido.

private messageSubject = new BehaviorSubject<string>('');
 esta línea crea una propiedad privada llamada messageSubject en el servicio CommunicationService y la inicializa como un BehaviorSubject que emitirá valores de tipo string. Los componentes pueden enviar mensajes a través de este BehaviorSubject utilizando el método next(), y otros componentes pueden suscribirse a él para recibir los mensajes que se emiten. Es una herramienta útil para la comunicación entre componentes en Angular utilizando el patrón Observable.

*/