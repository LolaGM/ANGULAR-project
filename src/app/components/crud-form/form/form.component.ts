import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { countries } from '../interfaces/country-data.model';
import { LocalDataService } from '../services/local-data.service';

//TODO import { MatSnackBar } from '@angular/material/snack-bar';
//TODO import { MatDialog } from '@angular/material/dialog';

//TODO import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component'; */
import { FormService } from '../services/form.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  //TODO public countries: Countries[] = [];
  public countries:any = countries; 
    
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
    private activatedRoute:ActivatedRoute, 
    private formService: FormService,
    private localDataService: LocalDataService,
    private router: Router, //por si el usuario escribe a mano la ruta 
    //TODO private snackbar: MatSnackBar, // servicio inyectable de Material (para modificar lo que hay en la vista según estés en nuevo  o editar ) que colocaré en dos lugares
    //TODO private dialog: MatDialog // servicio inyectable de Material (para mostrar mensajes como el de eliminación antes de borrar).Creamos método de OnDeleteHero
    ){}

  ngOnInit(): void {
  }

  //creamos un método para enviar datos desde el formulario a la tabla
  onSubmit(): void {

      if (this.myForm.valid) {
        // Agregar el nuevo registro al servicio DatosLocalService
        this.localDataService.addRegister(this.myForm.value);
  
        // Limpiar el formulario después de agregar el registro
        this.myForm.reset();
      }
    
  }
}
