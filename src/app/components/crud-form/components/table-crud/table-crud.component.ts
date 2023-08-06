import Swal from 'sweetalert2';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { FormService } from '../../services/form.service';
import { Subscription, switchMap } from 'rxjs';
import { UserUpdatedService } from '../../services/user-updated.service';

@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.css']
})

export class TablaCRUDComponent implements OnInit,OnDestroy {

  public users: User[] = [];
  public selectedUserFromTable: User | null = null;
  private userUpdatedSubscription!: Subscription;

  constructor(
      private formService: FormService,
      private userUpdateFormTableService: UserUpdatedService) {}

  
  ngOnInit() {
    this.readUsers();
    this.userUpdatedSubscription = this.userUpdateFormTableService.formTableUpdatedSubject$.subscribe(() => {
      this.readUsers();
    });
  }

  ngOnDestroy() {    
      this.userUpdatedSubscription.unsubscribe();    
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

  readUsers() {
    this.formService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    );
  }

  onClickEditUser(user: User) {
    this.formService.setUser(user);
  }

  onClickDeleteUser(user: User) { 
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
        this.formService.deleteUser(user.id).pipe(
          switchMap((_) => this.formService.getUsers())         
        )
        .subscribe((users: User[]) => {
            this.users = users;
            this.readUsers();
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
