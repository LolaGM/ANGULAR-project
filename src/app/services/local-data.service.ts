// al utilizar un servicio local, los datos solo permanecerán en memoria durante la ejecución de la aplicación. Si cierras el navegador o recargas la página, los datos almacenados se perderán
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  private registers: any[] = [];

  constructor() {}

  getRegisters(): any[] {
    return this.registers;
  }

  addRegister(register: any): void {
    this.registers.push(register);
  }

  editRegister(index: number, register: any): void {
    this.registers[index] = register;
  }

  deleteRegister(index: number): void {
    this.registers.splice(index, 1);
  }
}
