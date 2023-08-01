import { Countries } from './country.interface';

export interface User {
    id:    number; //lo pasaremos a string cuando lo necesiemos usando toString()
    name:  string;
    email: string;
    password: string;
    wantNotifications: boolean;
    country:Countries[]; //importamos interface creada con listado países por no haber usado API
    city:string;
}

