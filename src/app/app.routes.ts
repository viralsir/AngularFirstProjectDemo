import { Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactusComponent} from '../contactus/contactus.component';
import {AboutusComponent} from '../aboutus/aboutus.component';

export const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"aboutus",component:AboutusComponent}
];
