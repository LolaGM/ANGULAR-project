import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({ providedIn: 'root' })
export class FormService { 

    private apiUrl = `${environment.apiUrl}/users`;

    private formDataSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
    public formData$: Observable<User | null> = this.formDataSubject.asObservable();

    constructor(private http: HttpClient) {}

    getRegisters(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }

    addRegister(newUser: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, newUser);
    }
    
    deleteRegister(id: number): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete(url);
    }

    getFormData(): User | null {
        return this.formDataSubject.getValue();
    }

    setFormData(formData: User) {
        this.formDataSubject.next(formData);
    }
    
}
