import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class DataService {

    private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
    public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();
    private registers: User[] = [];

    constructor() { }

    setCurrentUser(user: User | null) {
        this.currentUserSubject.next(user);
    }

    getCurrentUser(): User | null {
        return this.currentUserSubject.getValue();
    }

    generateNewId(): number {
        const lastId = this.getRegisters().length;
        return lastId + 1;
    }

    getRegisters(): User[] {
        return this.registers;
    }

    addRegister(newUser: User) {
        this.registers.push(newUser);
    }    
}