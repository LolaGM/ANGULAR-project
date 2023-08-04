import { Component, OnInit } from '@angular/core';
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
export class FormComponent implements OnInit{

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
    });


  constructor(
    private fb: FormBuilder,
    private formService: FormService, 
    private validatorsService: ValidatorsService,
    ){ }

  
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
  
  onSubmit(): void {
    if (this.myForm.valid) {    
      this.formService.addUser(this.myForm.value)  
      .pipe(
        switchMap((_) => this.formService.getUsers())
      )
      .subscribe(users=> console.log(users))      
      

      this.myForm.reset();
    }
  }

}