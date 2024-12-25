import { Injectable } from '@angular/core';
import {User} from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userlist:Array<User> = [];
  constructor() { }

  add(user:User)
  {
    console.log("add userservice is being called");
    this.userlist.push(user);
  }
  view()
  {
    return this.userlist;
  }

}
