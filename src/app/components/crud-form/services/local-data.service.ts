import { Injectable } from '@angular/core';
import { User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {

  private registers: User[] = []; 
  private idCounter: number = 1; 

  constructor() {}

  getRegisters(): User[] {
    return this.registers;
  }

  getRegisterById(index: number): User{
    return this.registers[index];
  }

  addRegister(register: User): void {
    this.registers.push(register); 
  }

  editRegister(index: number, register: any): void {
    this.registers[index] = register;
  }

  deleteRegister(id: number): void {
    this.registers = this.registers.filter((user) => user.id !== id);
  }
}
