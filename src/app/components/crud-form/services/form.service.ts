//snippet a-service o crear con schematics

//importar módulo http client en app module
import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { LocalDataService } from './local-data.service';

@Injectable({ providedIn: 'root' })
export class FormService { 

    // Arreglo para almacenar los registros  
    private registers: User[] = []; 

    // EventEmitter para notificar cuando se agrega un nuevo registro
    newRegisterAdded: EventEmitter<User> = new EventEmitter<User>();

    //editar el registro de la tabla en el mismo formulario
    private selectedRegister: any = null;

    constructor(
        private localDataService: LocalDataService    ) {}

    /*  ------------CRUD formulario------------------ */

    // READ Obtener todos los registros
    getRegisters(): User[] {
        return this.registers;  
    }

    // CREATE Agregar un nuevo registro
    addRegister(register: User) {
        this.registers.push(register);
        // Emitir el evento con el nuevo registro
        this.newRegisterAdded.emit(register); 
    }

    // READ Obtener un registro por su índice
    getRegisterByIndex(index: number): User | null {
        if (index >= 0 && index < this.registers.length) {
        return this.registers[index];
        }
        return null;
    }

    // UPDATE Actualizar un registro existente por su índice
    updateRegisterByIndex(index: number, updatedRegister: User): boolean {
        if (index >= 0 && index < this.registers.length) {
        this.registers[index] = updatedRegister;
        return true;
        }
        return false;
    }

    // DELETE Eliminar un usuario llamando al método correspondiente del LocalDataService
    deleteRegister(index: number): void {
        if (index >= 0 && index < this.registers.length) {
            this.registers.splice(index, 1);
        }
    }

    setRegisterToEdit(register: any) {
        this.selectedRegister = register;
    }

    getRegisterToEdit() {
        return this.selectedRegister;
    }

}
