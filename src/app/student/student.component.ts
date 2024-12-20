import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  standalone: true,
  styleUrl: './student.component.css'
})
export class StudentComponent
{
    rollno:number=0;
    name:string="";
    maths:number=0;
    science:number=0;
    english:number=0;
    total:number=0;
    pass_fail:string="";


  Save(rollno: HTMLInputElement, name: HTMLInputElement, maths: HTMLInputElement, science: HTMLInputElement, english: HTMLInputElement) {

    this.rollno=parseInt(rollno.value);
    this.name=name.value;
    this.maths=parseInt(maths.value);
    this.science=parseInt(science.value);
    this.english=parseInt(english.value)
    if(this.maths>35 && this.science>35 && this.english>35){
      this.pass_fail="Pass";
      this.total=this.maths+this.science+this.english;
    }
    else{
      this.pass_fail="Fail";
    }

  }
}
