import Swal from 'sweetalert2';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { FormService } from '../services/form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.css']
})
export class TablaCRUDComponent implements OnInit,OnDestroy,OnChanges {

  @Input() registers: User[] = []; 
  @Output() editRegister: EventEmitter<number> = new EventEmitter<number>();
  public newRegisterAddedSubscription: Subscription | undefined;
  

  constructor(
      private localDataService: LocalDataService,
      private formService: FormService,
      ) { }
  

  ngOnInit() {     
     // Suscribirse al evento newRegisterAdded solo si aún no está suscrito
     if (!this.newRegisterAddedSubscription) {
      this.newRegisterAddedSubscription = this.formService.newRegisterAdded.subscribe((newUser: User) => {
        // Verificar si el nuevo usuario ya existe en la tabla
        const existingUser = this.registers.find((user) => user.id === newUser.id);
        if (!existingUser) {
          this.registers.push(newUser);
        }
      });
    }  
  

  }

  ngOnChanges(changes: SimpleChanges) {
    // Si el input registers cambia, actualizamos la lista local
    if (changes['registers']) {
      this.registers = changes['registers'].currentValue;
    }
  }

  // Nos desuscribimos del evento antes de que el componente se destruya
  ngOnDestroy() {
    if (this.newRegisterAddedSubscription) {
      this.newRegisterAddedSubscription.unsubscribe();
    }
  }

  addRegister(register: User) {
    this.localDataService.addRegister(register);
    this.registers = this.localDataService.getRegisters();
  }

  //evento click del botón editar que tendrá un ID numérico
  onEditClick(index: number) {
    // Cuando se hace clic en el botón de editar, emitimos el índice del registro
    this.editRegister.emit(index);
  }

  //DELETE evento click en HTML
  onClickDeleteRegister(index: number) { //usando sweet alert para diálogo de eliminar
    Swal.fire({
      title: '¿De verdad quieres eliminar el registro?',
      text: '¡El registro será eliminado permanentemente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5bc0de',
      cancelButtonColor: '#d9534f',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.formService.deleteRegister(index);
        Swal.fire(
          'Eliminado',
          'El registro ha sido eliminado.',
          'success'
        );
      }
    });  
  }
}
