import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { countries } from '../interfaces/country-data.model';

import { FormService } from '../services/form.service'; //service
import { User } from '../interfaces/user.interface'; //interface
import { TablaCRUDComponent } from '../table-crud.component.ts/table-crud.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  //TODO public countries: Countries[] = [];
  public countries:any = countries; 
  public registers: User[] = [];
    
   //crear formulario con FormBuilder: primero inyectamos servicio de Angular que importamos de Forms ( así no tenemos que estar usando siempre FormControl)
  public myForm:FormGroup = this.fb.group({ //mandamos un objeto con propiedades name, price,inStorage y les declaro un arreglo de: [valor inicial,validador síncrono,validador asíncrono] con valor vacío o 0
    name: ['', [Validators.required, Validators.minLength(3)]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    email:    ['',[Validators.required, Validators.email]],
    wantNotifications: [false,Validators.required], //true indica que tiene que haber un valor seleccionado
    country: ['', [Validators.required, Validators.minLength(3)]],
    city: ['', [Validators.required, Validators.minLength(3)]],
})

  constructor(
    private fb: FormBuilder,
    private formService: FormService, //register service
    ){}

  ngOnInit(): void { // cargue los datos en el formulario durante la inicialización.
    const register = this.formService.getRegisterToEdit(); //guardas en constante el método del servicio
    if (register) { //si el registro existe (es true)
      this.myForm.patchValue(register);
    }
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
