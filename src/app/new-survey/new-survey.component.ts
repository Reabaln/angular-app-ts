//@Reabaln
//Class that cmmunicate with the service to add new record
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../model/student';
import { StudentServiceService } from '../services/student-service.service';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit  {

  student: Student;

  constructor(private studentService: StudentServiceService,
    private router: Router) { }

  ngOnInit() {
    this.student = new Student();
  }

  saveSurvey() {
    this.studentService.saveSurvey(this.student).toPromise().then(() => {
      this.router.navigate(['list']);
    });
  }

}