import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/state/user/user.model';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  @Input() users: Array<User>;
  displayedColumns = ['name','emailId','totaltags','actions']

  constructor() { }

  ngOnInit(): void {
  }

  onEditUser(user:User){
    alert("asds");
  }
  onDeleteUser(user:User){
    alert("delete");
  }

}
