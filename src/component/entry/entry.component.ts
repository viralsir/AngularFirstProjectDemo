import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';

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

  formGroup: FormGroup=new FormGroup({
    "firstname":new FormControl("",[Validators.required,Validators.minLength(3)]),
    "lastname":new FormControl(""),
    "email":new FormControl("",[Validators.required,Validators.email]),

  })

  add() {
     this.userservice.add(this.formGroup.value);
     this.formGroup.reset();

  }
}
