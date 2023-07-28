import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ValidatorsService } from 'src/app/services/validator.service';
import { FormService } from '../../../services/form.service';
import { countries } from '../interfaces/country-data.model';

//TODO import { MatSnackBar } from '@angular/material/snack-bar';
//TODO import { MatDialog } from '@angular/material/dialog';

//TODO import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component'; */



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
    private validatorsService: ValidatorsService,
    private activatedRoute:ActivatedRoute, 
    public formService: FormService,
    private router: Router, //por si el usuario escribe a mano la ruta 
    //TODO private snackbar: MatSnackBar, // servicio inyectable de Material (para modificar lo que hay en la vista según estés en nuevo  o editar ) que colocaré en dos lugares
    //TODO private dialog: MatDialog // servicio inyectable de Material (para mostrar mensajes como el de eliminación antes de borrar).Creamos método de OnDeleteHero
    ){}

  ngOnInit(): void {
  }

    //creamos un método para el formulario (no retorna nada)
    onSubmit(): void {
    
      //si el formulario es invalid que no haga nada
      if(this.myForm.invalid) return; 

      //doble validación: si el hero tiene ya un id=> actualizar, si no lo tiene=> crearlo
      //if( this.currentUser.id){ //también nos valdría el heroForm
        //this.formService.updateUser(this.currentUser) //la función update retorna un objeto observable que no se dispara hasta que me suscriba
          //.subscribe( user => {

            //TODO this.showSnackbar(`${user.superhero} actualizado`);

          //cuando estoy actualizando un héroe, llamamos al método showSnackBar y mostramos el mensaje indicando el mensaje y al héroe entre literals 

          //});//aquí el hero ya está actualizado
          
        //return; //está fuera del subscribe: si se hace estas líneas, no se sigue ejecutando nada: si tenemos el id hace lo de dentro, si no, actualiza fuera del id 
      //}

      //si no lo tiene, lo creamos con método add
      //this.formService.addUser( this.currentUser) //es el objeto que mando y al que me tengo que suscribir y tener la petición HTTP
        //.subscribe( user => {
          //this.router.navigate(['/users/edit',user.id]);
          //navegacion  al arreglo en este caso con la ruta en particular heroes/edit/ y luego el hero.id que es el que va a devolver el servicio (porque el hero que devuelve suscribe viene con el id del backend)
          //TODO this.showSnackbar(`${hero.superhero} creado`); // mensaje de creado correctamente
        

        //})
    //}
  }
}
