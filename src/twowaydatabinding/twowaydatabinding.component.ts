import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-twowaydatabinding',
  imports: [
    FormsModule
  ],
  templateUrl: './twowaydatabinding.component.html',
  standalone: true,
  styleUrl: './twowaydatabinding.component.css'
})
export class TwowaydatabindingComponent {

   name:string="Vimal";
   rollno:number=0;
   maths:number=0;
   science:number=0;
   english:number=0;




}
