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

  StudentList:any=[];

    // rollno:number=0;
    // name:string="";
    // maths:number=0;
    // science:number=0;
    // english:number=0;
    // total:number=0;
    // pass_fail:string="";


  Save(rollno: HTMLInputElement, name: HTMLInputElement, maths: HTMLInputElement, science: HTMLInputElement, english: HTMLInputElement) {

        let student={
           rno:rollno.value,
           name:name.value,
           maths:maths.value,
           science:science.value,
           english:english.value
        }
        this.StudentList.push(student);

    }
}
