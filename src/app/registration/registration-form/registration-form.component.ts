import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/state/user/user.model';
import { UserValidator } from '../validators/userValidator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit, OnChanges {
  userForm: FormGroup;
  @Output() onSave = new EventEmitter<User>();
  @Input() uniqeValidator: (
    control: AbstractControl
  ) => Observable<ValidationErrors | null>;

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

  ngOnChanges(changes: SimpleChanges): void {
    this.userForm.get('username').setAsyncValidators(this.uniqeValidator);
  }

  public onSubmit() {
    if (this.userForm.valid) {
      var { username, email, tags } = this.userForm.value;
      var tagList = tags as Array<{ tagname: string }>;
      var obj = tagList.map((x) => x.tagname);
      this.onSave.emit(new User(username, email, obj));
      this.userForm.reset();
    }
  }


  getTagConroll(): FormGroup {
    return this.formBuilder.group({ tagname: ['', Validators.required] });
  }

  addTag() {
    var tag: FormArray = this.userForm.controls['tags'] as FormArray;
    tag.insert(tag.length, this.getTagConroll());
  }
}
