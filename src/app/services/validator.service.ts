import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService  {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  public cityPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  //método usado en todos las pages de formularios para validar los campos
  public isValidField( form: FormGroup, field: string):boolean | null{ //regreso una condición para comprobar el campo del formulario usando errors o hasError y si ha sido tocado. Paso esto al HTML
        
    return form.controls[field].errors // retorno el form que recibo como argumento y el field
    && form.controls[field].touched;
}

  //validación de dos campos contraseña iguales: el uso de esta validación la colocaremos después del formGroup
  public isFieldOneEqualFieldTwo( field1: string, field2: string){
        
    //como puedo saber cuál es el formulario para hacerle la validación?: retorno formGroup de tipo AbstractControl que en realidad es un FormGroup
    return ( formGroup : AbstractControl ): ValidationErrors | null => {

        const fieldValue1 = formGroup.get(field1)?.value;
        const fieldValue2 = formGroup.get(field2)?.value;
        //guardamos el valor del campo 1 que es nuestro formulario con el campo 1  y el 2(que puede que no exista) y queremos su valor

        //ya tenemos los valores de las contraseñas de cada campo,ahora nos preguntamos si son diferentes !== pues retornamos el error

        if (fieldValue1 !== fieldValue2){
            formGroup.get(field2)?.setErrors({ notEqual: true});//conque un campo del formulario tenga un error, se va a marcar como no válido
            return { notEqual: true }
        }
        formGroup.get(field2)?.setErrors( null );
        //si son iguales, limpiamos y establecemos el error, retornando null (nada)
        return null;
    }

}

}
