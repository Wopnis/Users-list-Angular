import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { USERS } from '../usersMock';
import {User} from '../user';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {
  users = USERS;
  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  constructor() { }

  ngOnInit() {
  }

}
