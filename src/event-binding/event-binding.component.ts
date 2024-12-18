import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  standalone: true,
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {

  displaymsg:string="";

  Max(no1: HTMLInputElement, no2: HTMLInputElement)
  {
            //"12" => 12
         if(parseInt(no1.value)> parseInt(no2.value))
         {
           this.displaymsg="no1 is a maximum no";
         }
         else{
           this.displaymsg="no2 is a maximum no";
         }
  }
}
