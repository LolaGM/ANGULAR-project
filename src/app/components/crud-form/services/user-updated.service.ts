import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserUpdatedService {
    
    private formTableUpdateSubject = new Subject<void>();

    formTableUpdatedSubject$ = this.formTableUpdateSubject.asObservable();

    notifyUserUpdated() {
        this.formTableUpdateSubject.next();
    }
}