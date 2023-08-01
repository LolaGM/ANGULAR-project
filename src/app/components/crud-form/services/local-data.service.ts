// al utilizar un servicio local, los datos solo permanecerán en memoria durante la ejecución de la aplicación. Si cierras el navegador o recargas la página, los datos almacenados se perderán
import { Injectable } from '@angular/core';
import { User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {

  private registers: User[] = []; 

  // Variable contadora para generar ids únicos
  private idCounter: number = 1; 

  constructor() {}

      /*  ------------CRUD datos locales (memoria)------------------ */


    // READ --> Método para obtener los datos almacenados
  getRegisters(): User[] {
    return this.registers;
  }

  //obtener registro por ID
  getRegisterById(index: number): User{
    return this.registers[index];
  }

  //CREATE-->añadir registro
  addRegister(register: User): void {
    //register.id = this.idCounter++; 
    this.registers.push(register); 
  }

  // UPDATE --> editar registro que primeramente has obtenido
  editRegister(index: number, register: any): void {
    this.registers[index] = register;
  }

  // DELETE borrar registro que es llamado en el formService
  deleteRegister(id: number): void {
    this.registers = this.registers.filter((user) => user.id !== id);
  }
}
