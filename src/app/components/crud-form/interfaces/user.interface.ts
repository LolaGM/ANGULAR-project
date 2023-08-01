import { Countries } from './country.interface';

export interface User {
    id:    number;
    name:  string;
    email: string;
    password1: string;
    password2: string;
    wantNotifications: boolean;
    country:Countries[]; //importamos interface creada con listado países por no haber usado API
    city:string;
}

