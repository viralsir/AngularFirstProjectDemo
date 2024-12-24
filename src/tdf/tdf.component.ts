import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-tdf',
  imports: [
    FormsModule
  ],
  templateUrl: './tdf.component.html',
  standalone: true,
  styleUrl: './tdf.component.css'
})
export class TDFComponent {

  userlist:Array<any> = [];


  Save(RegisterformRef: NgForm)
  {
          // console.log(RegisterformRef.value);
           this.userlist.push(RegisterformRef.value);
           RegisterformRef.reset();

  }


}
