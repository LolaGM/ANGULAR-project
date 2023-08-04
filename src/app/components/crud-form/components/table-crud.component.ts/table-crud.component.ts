import Swal from 'sweetalert2';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { FormService } from '../../services/form.service';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.css']
})

export class TablaCRUDComponent implements OnInit,OnDestroy {

  public users: User[] = [];
  private formDataSubscription: Subscription | undefined;
  public formData: User | null = null;
  public selectedUserFromTable: User | null = null;

  constructor(
      private formService: FormService,
      ) { }
  
  ngOnInit() {
    this.getUsers();

    this.formDataSubscription = this.formService.formData$.subscribe((formData) => {
        if (formData) {
          this.formData = formData;    
        }
    });
  }

  ngOnDestroy() {
    if (this.formDataSubscription) {
      this.formDataSubscription.unsubscribe();
    }
  }

  getUsers() {
    this.formService.getUsers().subscribe(
      (users: User[]) => {
        console.log(users);
        this.users = users;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }

  onClickEditUser(user: User) {
    this.selectedUserFromTable = user;
    this.formService.setFormData(user);
  }

  onClickDeleteUser(id: number) { 
    Swal.fire({
      title: '¿De verdad quieres eliminar el usuario?',
      text: '¡El usuario será eliminado permanentemente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5bc0de',
      cancelButtonColor: '#d9534f',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.formService.deleteUser(id).pipe(
          switchMap((_) => this.formService.getUsers())         
        )
        .subscribe((users: User[]) => {
            this.users = users;
            Swal.fire(
              'Eliminado',
              'El usuario ha sido eliminado.',
              'success'
            );
          },          
        );
      }
    });  
  }
}
