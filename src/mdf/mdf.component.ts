import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-mdf',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './mdf.component.html',
  standalone: true,
  styleUrl: './mdf.component.css'
})
export class MdfComponent {

  userlist:Array<any> = [];

  formGroup: FormGroup=new FormGroup({
    "firstname":new FormControl("",[Validators.required,Validators.minLength(3)]),
    "lastname":new FormControl(""),
    "email":new FormControl("",[Validators.required,Validators.email]),

  })

  add() {
       //console.log(this.formGroup.value);
      this.userlist.push(this.formGroup.value);
      this.formGroup.reset();
  }
}
