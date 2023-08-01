import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { countries } from '../interfaces/country-data.model';

import { FormService } from '../services/form.service'; //service
import { LocalDataService } from '../services/local-data.service';

import { User } from '../interfaces/user.interface'; //interface
import { TablaCRUDComponent } from '../table-crud.component.ts/table-crud.component';
import { Countries } from '../interfaces/country.interface';
import { ValidatorsService } from '../services/validator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  public countries:Countries[] = countries; //archivo de datos countries y la interfaz Country
  public registers: User[] = [];
  public formSubmitted = false; // Variable para controlar si el formulario ha sido enviado y no salgan error de validación por defecto
  @Output() registerAdded = new EventEmitter<User>();

   //crear formulario con FormBuilder: primero inyectamos servicio de Angular que importamos de Forms ( así no tenemos que estar usando siempre FormControl)
  public myForm:FormGroup = this.fb.group({ //mandamos un objeto con propiedades name, price,inStorage y les declaro un arreglo de: [valor inicial,validador síncrono,validador asíncrono] con valor vacío o 0
    id: [''],
    name: ['', [Validators.required, Validators.minLength(3)]],
    password1: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required, Validators.minLength(6)]],
    email:    ['',[Validators.required, Validators.email]],
    wantNotifications: [false,Validators.required], //true indica que tiene que haber un valor seleccionado
    country: ['', [Validators.required, Validators.minLength(3)]],
    city: ['', [Validators.required, Validators.minLength(3)]],
  },
  {
    validators: this.validatorsService.isFieldOneEqualFieldTwo('password1', 'password2')
  });


  constructor(
    private fb: FormBuilder,
    private formService: FormService, //register service
    private validatorsService: ValidatorsService
    ){}

  ngOnInit(): void { 
    // cargue los datos en el formulario durante la inicialización.
    const register = this.formService.getRegisterToEdit(); //guardas en constante el método del servicio
    if (register) { //si el registro existe (es true)
      this.myForm.patchValue(register);
    };
    this.registerAdded.subscribe(() => {
      this.myForm.reset();
    });

    //TODO Añadir la validación de correo electrónico al campo de email
    //this.myForm.get('email')?.setValidators([Validators.required,Validators.email,this.validatorsService.isValidEmail 
    //]);

    // Limpiar formulario antes de cada nuevo registro    
      //this.myForm.reset();

  }

  //creamos un método que será evento click para enviar datos desde el formulario a la tabla
  onSubmit(): void {
    if (this.myForm.valid) {
      const newUser: User = {
        id: this.generateNewId(), // Asegúrate de tener una función para generar un nuevo ID único
        name: this.myForm.get('name')?.value,
        password1: this.myForm.get('password1')?.value,
        password2: this.myForm.get('password2')?.value,
        email: this.myForm.get('email')?.value,
        wantNotifications: this.myForm.get('wantNotifications')?.value,
        country: this.myForm.get('country')?.value,
        city: this.myForm.get('city')?.value
      };

      this.formService.addRegister(newUser);
      //console.log(this.formService.getRegisters());
      this.registerAdded.emit(newUser); 
      // Emitir el evento solo después de agregar el registro


      //la limpieza del formulario con reset la hacemos en onInit
    }
  }
  //id único 
  generateNewId(): number {   
    const lastId = this.formService.getRegisters().length;
    return lastId + 1;
  }

  //método para editar el registro en el formulario
  editRegister(index: number) {
    const register = this.formService.getRegisterByIndex(index); // Obtener el registro del servicio por su índice
    if (register) {
      this.myForm.patchValue(register); // Configurar el formulario con los valores del registro seleccionado
    };
      
  }
}
