import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser } from '../state/user/user.action';
import { User } from '../state/user/user.model';
import  * as UserSelector  from '../state/user/user.selector';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {

  registerdUsers$:Observable<Array<User>>;

  constructor(private store:Store) {}

  ngOnInit(): void {
    this.registerdUsers$ = this.store.select(UserSelector.selectRegisterdUsers);
  }

  onUserAdded(user:User){
    //this is where you would save it to store
    this.store.dispatch(addUser({user}))
    console.table(user);
  }

}
