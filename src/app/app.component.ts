import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Child1Component} from '../child1/child1.component';
import {Child2Component} from '../child2/child2.component';

@Component({
  selector: 'root',
  imports: [RouterOutlet, Child1Component, Child2Component, RouterLink],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularFirstProject';
}
