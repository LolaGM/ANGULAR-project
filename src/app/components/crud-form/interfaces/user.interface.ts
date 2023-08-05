import { Countries } from './country.interface';

export interface User {
    id:    number;
    name:  string;
    email: string;
    password1: string;
    password2: string;
    wantNotifications: boolean;
    country:Countries[]; 
    city:string;
}

