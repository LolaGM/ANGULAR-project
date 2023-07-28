//snippet a-service o crear con schematics

//importar módulo http client en app module
import { Injectable } from '@angular/core';
import { User } from '../components/crud-form/interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class FormService { //cambiamos el nombre a FormService
    
    //private baseUrl:string = environments.baseUrl; //apunta al archivo environments que importamos y la propiedad del objeto environments y su clave baseUrl que coincide en nombre con la propiedad  privada que he creado

    //constructor(private http: HttpClient) { } //cambiamos a http 
    
    //función que va a retornar un observable así que importamos rxjs que va a estar emitiendo un objeto de tipo Hero arreglo

    //getUser(): Observable<User[]>{
      //  return this.http.get<Hero[]>( `${this.baseUrl}/heroes`);
        //retorna este http con pètición que retorna Hero como arreglo y para usar este arreglo nos creamos una propiedad baseUrl.
        //llamamos con ``  una interpolación a la propiedad y le pasamos el endpoint heroes
    }

    
    //TODO CRUD users: create con método HTTP request de tipo POST que apunta a donde tiene que crear el nuevo recurso de heroe y como segundo argumento la data que mando
    /* addUser(user: User): Observable<User>{
        return this.http.post<Hero>(`${this.baseUrl }/heroes/${ hero.id }`, hero);
    } */

    //TODO CRUD users: update con método HTTP request PATCH (actualización parcial de alguna propiedad del objeto) y decirle el id del objeto pero antes hacermos una validación de si existe
    /* updateUser(user: User): Observable<User>{

        if ( !user.id ) throw Error('El id de User es necesario');
        return this.http.patch<User>(`${this.baseUrl }/users/${ user.id }`, user);
    } */

    //CRUD heroes: delete con método HTTP request DELETE y decirle el id del objeto.
    //Como se haya borrado ya, nos deberá indicar esto si es verdadero o falso
    /* deleteUserById( id: string ): Observable<boolean>{

        return this.http.delete(`${this.baseUrl }/users/${ id }`)
            .pipe(
                map( resp =>true),
                catchError( err => of(false) )
            );

            }  */