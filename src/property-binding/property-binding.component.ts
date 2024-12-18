import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  standalone: true,
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {

  isDisabled = false;
  mystyle:string="color:red;background-color:green";
  msg:string="Property Binding";
  msg1:string="String intropullation";

}
