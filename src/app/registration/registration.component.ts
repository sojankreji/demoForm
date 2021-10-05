import { Component, OnInit } from '@angular/core';


import { User } from '../models/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  // userForm = this.fb.group({
  //   userId: [0, [Validators.required]],
  //   loginId: ['', [Validators.required]],
  //   userName: ['', [Validators.required]],
  //   email: ['', [Validators.required, Validators.email]],
  //   active: [true],
  // });

  // //user = new User(0,false);
  // private subscriptions = new SubSink();

  constructor() {}

  ngOnInit(): void {
    var user = new User("name","email",["1"]);
    console.log(user);
  }

  onUserAdded(user:User){
    //this is where you would save it to store
    console.table(user);
  }

}
