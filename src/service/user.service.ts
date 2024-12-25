import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userlist:Array<any> = [];
  constructor() { }

  add(user:any)
  {
    this.userlist.push(user);
  }
  view()
  {
    return this.userlist;
  }

}
