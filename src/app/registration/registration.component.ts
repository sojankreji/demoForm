import { Component, OnInit } from '@angular/core';


import { User } from '../models/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {

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
