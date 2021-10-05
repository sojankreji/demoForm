import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserValidator } from '../validators/userValidator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  userForm: FormGroup;
  @Output() onSave= new EventEmitter<User>();

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  buildForm() {

    //note that the validators are in array of pos 1 , if validators need to check with anby external source use pos 2
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required,UserValidator.startsWithS] ],
      email: ['', [Validators.required,Validators.email]],
    });
  }

  public onSubmit(){
    if(this.userForm.valid){
      var {username,email} = this.userForm.value;
      this.onSave.emit(new User(username,email,[null]));}

  }

}
