import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { countries } from '../interfaces/country-data.model';

import { FormService } from '../services/form.service'; 
import { ValidatorsService } from '../services/validator.service';

import { Countries } from '../interfaces/country.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  public countries:Countries[] = countries; 
  public formSubmitted = false; 

  public myForm:FormGroup = this.fb.group({
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


  constructor(
    private fb: FormBuilder,
    private formService: FormService, 
    private validatorsService: ValidatorsService,
    ){ }

  ngOnInit(): void { 
    const formData = this.formService.getFormData();
    if (formData) {
      this.myForm.patchValue(formData);
    }   
  }
  

  onSubmit(): void {
    if (this.myForm.valid) {    
      this.formService.addRegister(this.myForm.value)
      .subscribe(data => console.log(data));
      
      this.myForm.reset();
    }
  }

}
