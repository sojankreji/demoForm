import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectRegisterdUser } from 'src/app/state/user/user.selector';
import {  first,  switchMap } from "rxjs/operators";
import { User } from 'src/app/state/user/user.model';

export class UserValidator {

  static startsWithS(control: AbstractControl): ValidationErrors | null {
    var  s:string = control.value as string;
    return s && s.startsWith('s')?null:{startsWithS:s}
  }


  static uniqueName(store:Store): (control: AbstractControl)=> Observable<ValidationErrors | null>
  {
    return (control: AbstractControl)=>{
      var  s:string = control.value as string;
      return store.select(selectRegisterdUser(s)).pipe(
        switchMap((x:User[])=>{
          return x.length==0?of(null):of({uniqueName:s});
        }),
        first()
      )
    }
  }
}
