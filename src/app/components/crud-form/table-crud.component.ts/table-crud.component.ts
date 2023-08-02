import Swal from 'sweetalert2';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';
import { User } from '../interfaces/user.interface';
import { FormService } from '../services/form.service';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.css']
})

export class TablaCRUDComponent implements OnInit,OnDestroy {

  public registers: User[] = [];
  private formDataSubscription: Subscription | undefined;
  public formData: User | null = null;

  constructor(
      private formService: FormService,
      private dataService: DataService,
      ) { }
  
  ngOnInit() {
    this.getRegisters();

    this.formDataSubscription = this.formService.formData$.subscribe((formData) => {
        if (formData) {
            console.log('Nuevo registro recibido:', formData);
            this.registers.push(formData);
        }
    });
  }

  ngOnDestroy() {
    if (this.formDataSubscription) {
      this.formDataSubscription.unsubscribe();
    }
  }

  getRegisters() {
    this.formService.getRegisters().subscribe(
      (data: User[]) => {
        console.log(data);
        this.registers = data;
      },
      (error) => {
        console.error('Error al obtener los registros:', error);
      }
    );
  }


  /* onClickDeleteRegister(index: number) { 
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
  } */
}
