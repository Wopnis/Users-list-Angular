import {Component, Input} from '@angular/core';
import {User} from './user';
import {USERS} from './usersMock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Users-list';
  user = USERS;
  updateUsers(user: User) {
    console.log(user);
    this.user.unshift(user);
  }
}
