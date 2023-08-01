import Swal from 'sweetalert2';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.css']
})
export class TablaCRUDComponent implements OnInit {

  @Input() registers: User[] = []; 
  datosLocalService: any;
  @Output() editRegister: EventEmitter<number> = new EventEmitter<number>();

  constructor(
      private localDataService: LocalDataService,
      private formService: FormService,
      ) { }

  ngOnInit() {
    this.registers = this.formService.getRegisters();
  }

  addRegister(register: any) {
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
