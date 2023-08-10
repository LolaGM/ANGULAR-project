import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class TrafficlightService {
    private isActivatedSubject = new Subject<boolean>();
    private activeColorSubject = new Subject<string>();

    setIsActivated(activated: boolean) {
        this.isActivatedSubject.next(activated);
    }

    getIsActivated(): Observable<boolean> {
        return this.isActivatedSubject.asObservable();
    }

    setActiveColor(color: string) {
        this.activeColorSubject.next(color);
    }

    getActiveColor(): Observable<string> {
        return this.activeColorSubject.asObservable();
    }
}
