import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { countries } from '../interfaces/country-data.model';

import { FormService } from '../services/form.service'; 
import { ValidatorsService } from '../services/validator.service';

import { User } from '../interfaces/user.interface';
import { Countries } from '../interfaces/country.interface';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  public countries:Countries[] = countries; 
  //TODO public registers: User[] = [];
  public formSubmitted = false; 
  public myForm:FormGroup;

  

  constructor(
    private fb: FormBuilder,
    private formService: FormService, 
    private validatorsService: ValidatorsService,
    ){
      this.myForm = this.fb.group({
        id: [''],
        name: ['', [Validators.required, Validators.minLength(3)]],
        password1: ['',[Validators.required, Validators.minLength(6)]],
        password2: ['',[Validators.required, Validators.minLength(6)]],
        email:    ['',[Validators.required, Validators.email]],
        wantNotifications: [false], 
        country: ['', [Validators.required, Validators.minLength(3)]],
        city: ['', [Validators.required, Validators.minLength(3)]],
      },
      {
        validators: this.validatorsService.isFieldOneEqualFieldTwo('password1', 'password2')
      });
    }

  ngOnInit(): void { 
    const formData = this.formService.getFormData();
    if (formData) {
      this.myForm.patchValue(formData);
    }
    
  
  }
  
  //TODO Añadir la validación de correo electrónico al campo de email */

  onSubmit(): void {
    if (this.myForm.valid) {    
      this.formService.setFormData(this.myForm.value);
      this.myForm.reset();
    }
  }
  
 /*  editRegister(index: number) {
    const register = this.formService.getRegisterByIndex(index);
    if (register) {
      this.myForm.patchValue(register); 
    };
      
  } */
}
