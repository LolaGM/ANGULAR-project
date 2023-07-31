//snippet a-service o crear con schematics

//importar módulo http client en app module
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class FormService {  //cambiamos el nombre a FormService

    private registers: User[] = []; // Arreglo para almacenar los registros  

  //editar el registro de la tabla en el mismo formulario
    private selectedRegister: any = null;

    constructor() {}

    /*  ------------CRUD------------------ */

    // Obtener todos los registros
    getRegisters(): User[] {
        return this.registers;
    }

     // Agregar un nuevo registro
    addRegister(register: User) {
        this.registers.push(register);
    }

    // Obtener un registro por su índice
    getRegisterByIndex(index: number): User | null {
        if (index >= 0 && index < this.registers.length) {
        return this.registers[index];
        }
        return null;
    }

    // Actualizar un registro existente por su índice
    updateRegisterByIndex(index: number, updatedRegister: User): boolean {
        if (index >= 0 && index < this.registers.length) {
        this.registers[index] = updatedRegister;
        return true;
        }
        return false;
    }

    // Eliminar un registro por su índice
    deleteRegisterByIndex(index: number): boolean {
        if (index >= 0 && index < this.registers.length) {
        this.registers.splice(index, 1);
        return true;
        }
        return false;
    }

    setRegisterToEdit(register: any) {
        this.selectedRegister = register;
    }

    getRegisterToEdit() {
        return this.selectedRegister;
    }
}
