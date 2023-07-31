import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';

@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.css']
})
export class TablaCRUDComponent implements OnInit {
  registers: any[] = [];
  dialog: any;
  datosLocalService: any;
  registros: any;

  constructor(private localDataService: LocalDataService) { }

  ngOnInit() {
    this.registers = this.localDataService.getRegisters();
  }

  addRegister(registro: any) {
    this.localDataService.addRegister(registro);
    this.registers = this.localDataService.getRegisters();
  }

  editRegister(index: number, registro: any) {
    this.localDataService.editRegister(index, registro);
  }

  deleteRegister(index: number) { //usando sweet alert para eliminar
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
        this.datosLocalService.eliminarRegistro(index);
        this.registros = this.datosLocalService.obtenerRegistros();
        Swal.fire(
          'Eliminado',
          'El registro ha sido eliminado.',
          'success'
        );
      }
    });
  
  }
}
