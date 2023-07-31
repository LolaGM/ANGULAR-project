// al utilizar un servicio local, los datos solo permanecerán en memoria durante la ejecución de la aplicación. Si cierras el navegador o recargas la página, los datos almacenados se perderán
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  private registers: any[] = [];  //TODO tipo interface USER

  constructor() {}

  getRegisters(): any[] {
    return this.registers;
  }

  //obtener registro por ID
  getRegisterById(index: number): any{
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
