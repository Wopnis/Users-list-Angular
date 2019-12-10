import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../user';
import {UsersComponent} from '../users/users.component';



@Component({
  selector: 'app-edit-user-data',
  templateUrl: './edit-user-data.component.html',
  styleUrls: ['./edit-user-data.component.scss']
})
export class EditUserDataComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAdd: EventEmitter<User> = new EventEmitter<User>();
  userName: '';
  userSurname = '';
  userAge = '';
  userCity = '';

  constructor() { }

  ngOnInit() {
  }
  addUser() {
    if (this.userName.trim() && this.userName.trim() && this.userAge.trim() && this.userCity.trim()) {
      const user: User = {
        firstName: this.userName,
        lastName: this.userSurname,
        age: this.userAge,
        city: this.userCity
      };
      this.onAdd.emit(user);
      console.log(user);
      this.userName = this.userSurname = this.userAge = this.userCity = '';
    }
  }
}
