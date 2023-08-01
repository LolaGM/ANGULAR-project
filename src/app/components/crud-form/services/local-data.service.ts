// al utilizar un servicio local, los datos solo permanecerán en memoria durante la ejecución de la aplicación. Si cierras el navegador o recargas la página, los datos almacenados se perderán
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { FakeData } from '../interfaces/fake-data.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  private registers: User[] = []; 
  private data: FakeData[] = [
    {
      name: 'John Dog',
      password: 'password123',
      email: 'johndog@example.com',
      wantNotifications: true,
      country: 'United States',
      city: 'New York'
    },
    {
      name: 'Laura Cat',
      password: 'password123',
      email: 'laucat@example.com',
      wantNotifications: false,
      country: 'United Kingdom',
      city: 'Bristol'
    },
    {
      name: 'Jim Pet',
      password: 'password123',
      email: 'jimpet@example.com',
      wantNotifications: true,
      country: 'Australia',
      city: 'Sidney'
    },
  ];

  constructor() {}

   // Método para obtener los datos falsos almacenados
  getData(): FakeData[] {
    return this.data;
  }

  getRegisters(): User[] {
    return this.registers;
  }

  //obtener registro por ID
  getRegisterById(index: number): User{
    return this.registers[index];
  }

  //añadir registro
  addRegister(register: any): void {
    this.registers.push(register);
  }

  //editar registro que primeramente has obtenido
  editRegister(index: number, register: any): void {
    this.registers[index] = register;
  }

  //borrar registro
  deleteRegister(index: number): void {
    this.registers.splice(index, 1);
  }
}
