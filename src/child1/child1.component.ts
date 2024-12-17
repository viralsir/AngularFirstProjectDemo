import { Component } from '@angular/core';
import {Child2Component} from '../child2/child2.component';

@Component({
  selector: 'app-child1',
  imports: [
    Child2Component
  ],
  templateUrl: './child1.component.html',
  standalone: true,
  styleUrl: './child1.component.css'
})
export class Child1Component {

}
