import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

import { BehaviorSubject, Observable, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { UserUpdatedService } from './user-updated.service';


@Injectable({ providedIn: 'root' })
export class FormService { 

    private apiUrl = `${environment.apiUrl}/users`;

    private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
    public userChanges$: Observable<User | null> = this.userSubject.asObservable();

    constructor(
        private http: HttpClient,
        private userUpdateFormTableService: UserUpdatedService) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }

    addUser(newUser: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, newUser).pipe(
            tap(() => {
            this.userUpdateFormTableService.notifyUserUpdated();
            })
        );
    }

    updateUser(updatedUser: User): Observable<User> {
    const url = `${this.apiUrl}/${updatedUser.id}`;
    return this.http.put<User>(url, updatedUser).pipe(
            tap(() => {
            this.userUpdateFormTableService.notifyUserUpdated();
            })
        );
    }
    
    deleteUser(id: number) {
        const url = `${this.apiUrl}/${id.toString()}`;
        return this.http.delete<User>(url);
    }

    getUser(): User | null {
        return this.userSubject.getValue();
    }

    setUser(user: User | null) {
        this.userSubject.next(user);
    }

    getSelectedUserInForm(): Observable<User | null> {
        return this.userSubject.asObservable();
    } 
}
