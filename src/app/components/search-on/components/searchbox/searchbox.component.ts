import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit, OnDestroy {

  private debouncer:Subject<string> = new Subject<string>();
  
  private debouncerSubscription?:Subscription;

  @Input() 
  public placeholder:string = '';

  @Input() 
  public initialValue:string = ''; 

  @Output() 
  public onValue = new EventEmitter<string>();  

  @Output() 
  public onDebounce = new EventEmitter<string>();  


  ngOnInit(): void {
    this.debouncer
      .subscribe(value =>{
        console.log('debouncer value',value);
        this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
      console.log('destruido');
      this.debouncer.unsubscribe();//nos desuscribimos para no estar pendientes de búsqueda
      this.debouncerSubscription?.unsubscribe();
  }

  emitValue(value:string):void {
      console.log(value);
      this.onValue.emit(value);
  }

  
  onKeyPress(searchTerm:string) {
      console.log(searchTerm);
      this.debouncer.next(searchTerm);
  }


}
