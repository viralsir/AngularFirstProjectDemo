import { Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactusComponent} from '../contactus/contactus.component';
import {AboutusComponent} from '../aboutus/aboutus.component';
import {StringintropullationComponent} from '../stringintropullation/stringintropullation.component';
import {PropertyBindingComponent} from '../property-binding/property-binding.component';
import {EventBindingComponent} from '../event-binding/event-binding.component';
import {StudentComponent} from './student/student.component';

export const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"stringintropullation",component:StringintropullationComponent },
  {path:"PropertyBinding",component:PropertyBindingComponent},
  {path:"EventBinding",component:EventBindingComponent},
  {path:"Student",component:StudentComponent},

];
