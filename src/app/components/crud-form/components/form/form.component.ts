import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { countries } from '../../interfaces/country-data.model';

import { FormService } from '../../services/form.service'; 
import { ValidatorsService } from '../../services/validator.service';

import { Countries } from '../../interfaces/country.interface';
import {  Subscription, switchMap } from 'rxjs';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit,OnDestroy{

  public countries:Countries[] = countries; 

  public formSubmitted = false; 

  private formDataSubscription: Subscription | undefined;

  public selectedUserFromTable : User | null = null;

  public isEditMode: boolean = false;

  public myForm:FormGroup = this.fb.group({
    id: [''],
    name: ['', [Validators.required, Validators.minLength(3)]],
    password1: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required, Validators.minLength(6)]],
    email:    ['',[Validators.required, this.validatorsService.isValidEmail]],
    wantNotifications: [false], 
    country: ['', [Validators.required, Validators.minLength(3)]],
    city: ['', [Validators.required, Validators.minLength(3)]],
    },
    {
      validators: this.validatorsService.isFieldOneEqualFieldTwo('password1', 'password2')
    }
  );

  constructor(
    private fb: FormBuilder,
    private formService: FormService, 
    private validatorsService: ValidatorsService,
    ){ }

  ngOnDestroy(): void {
    if (this.formDataSubscription) {
      this.formDataSubscription.unsubscribe();
    }
  }
  
  ngOnInit(): void { 
    this.formService.getSelectedUserInForm().subscribe((user) => {
      if (user) {
        this.myForm.patchValue(user);
        this.isEditMode = true;
      } else {
        this.isEditMode = false;
      }
    });
  }
  
  onSaveOrUpdateUser() {
    if (this.myForm.valid) {
      const updatedUser: User = this.myForm.value;
      const user = this.formService.getUser();
      if (user) {
        this.formService.updateUser(updatedUser).subscribe(
          (response) => {
            console.log('Usuario actualizado:', response);
            this.formService.setUser(null); 
          },
          (error) => {
            console.error('Error al actualizar el usuario:', error);
          }
        );
      } else {
        this.formService.addUser(updatedUser).subscribe(
          (response) => {
            console.log('Usuario creado:', response);
            this.formService.setUser(null); 
          },
          (error) => {
            console.error('Error al crear el usuario:', error);
          }
        );
      }
    } else {
      console.warn('Formulario no válido. Verifica los campos antes de guardar.');
    }
  }
}