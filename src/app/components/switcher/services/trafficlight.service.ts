// color.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TrafficlightService {

    private activeColorSubject = new Subject<string>();
    private isActivatedSubject = new Subject<boolean>();

   getActiveColor(): Observable<string> {
        return this.activeColorSubject.asObservable();
    }

    setActiveColor(color: string) {
        this.activeColorSubject.next(color);
    }

   getIsActivated(): Observable<boolean> {
        return this.isActivatedSubject.asObservable();
    }

    setIsActivated(activated: boolean) {
        this.isActivatedSubject.next(activated);
    }

}
