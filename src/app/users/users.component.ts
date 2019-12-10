import { Component, OnInit } from '@angular/core';
import { USERS } from '../usersMock';
import {User} from '../user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {
  user = User; // why did you assign interface to variable?
  users = USERS;
  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor() { }

  ngOnInit() {
  }

}
