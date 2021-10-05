import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UserValidator {

  static startsWithS(control: AbstractControl): ValidationErrors | null {
    var  s:string = control.value as string;
    return s.startsWith('s')?null:{startsWithS:s}
  }
}
