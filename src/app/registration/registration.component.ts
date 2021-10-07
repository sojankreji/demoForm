import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser } from '../state/user/user.action';
import { User } from '../state/user/user.model';
import  * as UserSelector  from '../state/user/user.selector';
import { UserValidator } from './validators/userValidator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {

  registerdUsers$:Observable<Array<User>>;
  uniqueNameVlidator:(control: AbstractControl)=> Observable<ValidationErrors | null>;

  constructor(private store:Store) {}

  ngOnInit(): void {
    this.registerdUsers$ = this.store.select(UserSelector.selectRegisterdUsers);
    this.uniqueNameVlidator = UserValidator.uniqueName(this.store);
  }

  onUserAdded(user:User){
    //this is where you would save it to store
    this.store.dispatch(addUser({user}))
    console.table(user);
  }

}
