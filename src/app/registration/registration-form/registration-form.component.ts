import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserValidator } from '../validators/userValidator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  userForm: FormGroup;
  @Output() onSave = new EventEmitter<User>();

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  buildForm() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, UserValidator.startsWithS]],
      email: ['', [Validators.required, Validators.email]],
      tags: this.formBuilder.array([this.getTagConroll()]),
    });
  }

  public onSubmit() {
    if (this.userForm.valid) {
      var { username, email,tags } = this.userForm.value;
      var tagList = tags as Array<{tagname:string}>;
      var obj = tagList.map(x=>x.tagname)
      this.onSave.emit(new User(username, email, obj ));
    }
  }

  getTagConroll(): FormGroup {
    return this.formBuilder.group({ tagname: ['', Validators.required] });
  }
  addTag(){
    var tag:FormArray =  this.userForm.controls['tags'] as FormArray;
    tag.insert(tag.length,this.getTagConroll());

  }
}
