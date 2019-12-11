import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, subscribeOn} from 'rxjs/operators';
import {User} from '../user';


export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  address: object;
  phone: string;
  company: object;
}


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  constructor(private http: HttpClient) {}
  users: User[] = [];
  loading = false;
  selectedUser: User;
  userName = '';
  userSurname = '';
  userEmail = '';
  userAddress = '';
  userPhone = '';
  userCompany = '';
  userId = undefined;
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngOnInit() {
  }

  addUser() {
    if (!this.userName.trim() && !this.userSurname.trim() && !this.userEmail.trim()
      && !this.userAddress.trim() && !this.userPhone.trim() && !this.userCompany.trim()) {
            return;
    }
    const newUser: User = {
      name: this.userName,
      surname: this.userSurname,
      email: this.userEmail,
      address: this.userAddress,
      phone: this.userPhone,
      company: this.userCompany,
      id: this.userId
    };
    this.http.post<User>('https://jsonplaceholder.typicode.com/users', newUser)
      .subscribe(user => {
        console.log('user', user);
        this.users.push(user);
        this.userName = '';
        this.userSurname = '';
        this.userEmail = '';
        this.userAddress = '';
        this.userPhone = '';
        this.userCompany = '';
      });
  }

  fetchAllList() {
    this.loading = true;
    this.http.get<object>('https://jsonplaceholder.typicode.com/users?_limit=8')
      .pipe(delay(1500))
      .subscribe(users => {
        console.log(users);
        // @ts-ignore
        this.users = users;
        this.loading = false;
      });
  }

  removeUser(id: number) {
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe( () => {
        this.users = this.users.filter(user => user.id !== id);
      });
  }
}
