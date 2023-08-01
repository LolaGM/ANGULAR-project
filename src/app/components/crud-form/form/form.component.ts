import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { countries } from '../interfaces/country-data.model';
import { FakeData } from '../interfaces/fake-data.interface'; // Asegúrate de que la ruta sea correcta

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
    
   //crear formulario con FormBuilder: primero inyectamos servicio de Angular que importamos de Forms ( así no tenemos que estar usando siempre FormControl)
  public myForm:FormGroup = this.fb.group({ //mandamos un objeto con propiedades name, price,inStorage y les declaro un arreglo de: [valor inicial,validador síncrono,validador asíncrono] con valor vacío o 0
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

  public dataList: FakeData[] = [];


  constructor(
    private fb: FormBuilder,
    private formService: FormService, //register service
    private localDataService: LocalDataService, 
    private validatorsService: ValidatorsService
    ){}

  ngOnInit(): void { // cargue los datos en el formulario durante la inicialización.
    const register = this.formService.getRegisterToEdit(); //guardas en constante el método del servicio
    if (register) { //si el registro existe (es true)
      this.myForm.patchValue(register);
    };
    this.dataList = this.localDataService.getData();

  }

  //creamos un método para enviar datos desde el formulario a la tabla
  onSubmit(): void {

    if (this.myForm.valid) {  // Agregar nuevo registro al servicio FormService
      this.formService.addRegister(this.myForm.value);

      // Limpiar el formulario después de agregar el registro
      this.myForm.reset();

      // Obtener los registros actualizados del servicio y asignarlos a la propiedad 'registers'
      this.registers = this.formService.getRegisters();
    }
  }

  //método para editar el registro en el formulario
  editRegister(index: number) {
    const register = this.formService.getRegisterByIndex(index); // Obtener el registro del servicio por su índice
    if (register) {
      this.myForm.patchValue(register); // Configurar el formulario con los valores del registro seleccionado
    };
      
  }
}
