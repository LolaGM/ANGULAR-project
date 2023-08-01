import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService  {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  //método usado en todos las pages de formularios para validar los campos
  isValidField( form: FormGroup, field: string):boolean | null{ 
      return form.controls[field].errors && form.controls[field].touched;
  }

  // TODO Método para validar el campo de correo electrónico
  isValidEmail(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    if (email && !email.match(this.emailPattern)) {
      return { invalidEmail: true };
    }
    return null;
  }

  //validación de dos campos contraseña iguales: el uso de esta validación la colocaremos después del formGroup
  isFieldOneEqualFieldTwo(field1: string, field2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }

      formGroup.get(field2)?.setErrors(null);
      return null;
    };
  }
}
