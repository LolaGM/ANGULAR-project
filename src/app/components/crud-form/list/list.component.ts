import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidatorsService } from 'src/app/services/validator.service';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private activatedRoute:ActivatedRoute, 
    private router: Router, //por si el usuario escribe a mano la ruta 
    //private snackbar: MatSnackBar, // servicio inyectable de Material (para modificar lo que hay en la vista según estés en nuevo  o editar ) que colocaré en dos lugares
    //private dialog: MatDialog // servicio inyectable de Material (para mostrar mensajes como el de eliminación antes de borrar).Creamos método de OnDeleteHero
    ){}

  ngOnInit(): void {
   // this.FormService.getHeroes()
     // .subscribe(users => this.users = users)
  }
}
