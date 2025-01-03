import { Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactusComponent} from '../contactus/contactus.component';
import {AboutusComponent} from '../aboutus/aboutus.component';
import {StringintropullationComponent} from '../stringintropullation/stringintropullation.component';
import {PropertyBindingComponent} from '../property-binding/property-binding.component';
import {EventBindingComponent} from '../event-binding/event-binding.component';
import {StudentComponent} from './student/student.component';
import {TwowaydatabindingComponent} from '../twowaydatabinding/twowaydatabinding.component';
import {TDFComponent} from '../tdf/tdf.component';
import {MdfComponent} from '../mdf/mdf.component';
import {EntryComponent} from '../component/entry/entry.component';
import {ViewComponent} from '../component/view/view.component';
import {PostComponent} from '../APIDemo/post/post.component';

export const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"stringintropullation",component:StringintropullationComponent },
  {path:"PropertyBinding",component:PropertyBindingComponent},
  {path:"EventBinding",component:EventBindingComponent},
  {path:"Student",component:StudentComponent},
  {path:"Twoway",component:TwowaydatabindingComponent},
  {path:"tdf",component:TDFComponent},
  {path:"mdf",component:MdfComponent},
  {path:"entry",component:EntryComponent},
  {path:"view",component:ViewComponent},
  {path:"post",component:PostComponent}

];
