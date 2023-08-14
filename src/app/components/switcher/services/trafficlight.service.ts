import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class TrafficlightService {
    
    private activeColorSubject = new BehaviorSubject<string>('red');
    private isActivatedSubject = new BehaviorSubject<boolean>(false);

    setIsActivated(activated: boolean): void {
        this.isActivatedSubject.next(activated);
    }

    getIsActivated(): Observable<boolean> {
        return this.isActivatedSubject.asObservable();
    }

    setActiveColor(color: string): void{
        this.activeColorSubject.next(color);
    }

    getActiveColor(): Observable<string> {
        return this.activeColorSubject.asObservable();
    }
}
