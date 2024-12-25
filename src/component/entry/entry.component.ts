import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {User} from '../../Model/user';

@Component({
  selector: 'app-entry',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './entry.component.html',
  standalone: true,
  styleUrl: './entry.component.css'
})

export class EntryComponent
{

   userservice:UserService=inject(UserService);
   user:User=new User();

  add() {

    console.log(this.user);
    this.userservice.add(this.user);


  }
}
