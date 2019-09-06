import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // initialize a user's properties
  users: User[];
  data: Observable<any>

  constructor() {

    this.users = [
      {
     firstName: "collins",
     lastName: 'juma',
     email: 'collins@gmail.com', 
     isActive: true,
     date: new Date('01/09/2019'),
     hide: true
   },
   {
    firstName: "Jane",
    lastName: 'Doe',
    email: 'jane@gmail.com',  
    isActive: false,
    date: new Date('01/09/2019'),
    hide: true
  },
  {
    firstName: "John",
    lastName: 'Doe',
    email: 'john@gmail.com', 
    isActive: true,
    date: new Date('01/09/2019 08:30'),
    hide: true
  } 
 ];
}

getData() {
  this.data = new Observable(observer => {
    setTimeout(()=> {
      observer.next(1);
    }, 1000);
    setTimeout(()=> {
      observer.next(2);
    }, 2000);

    setTimeout(()=> {
      observer.next(3);
    }, 3000);
    setTimeout(()=> {
      observer.next({name: 'Brad'});
    }, 4000);
  });
  return this.data;
}

  getUsers(): Observable<User[]> {
    return of(this.users);

  }

  // method to add user
  addUser(user: User){
    this.users.unshift(user);
  }
}
