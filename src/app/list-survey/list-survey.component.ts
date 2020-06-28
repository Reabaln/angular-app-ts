//@Reabaln
//Class that cmmunicate with the service to list the records
import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.css']
})
export class ListSurveyComponent implements OnInit {

  constructor(private studentService: StudentServiceService, private router: Router) { }
  public students;

  ngOnInit() {
    this.loadSurveys();
  }
  private loadSurveys() {
    
    this.studentService.listAll().subscribe(
      data => { this.students = data },
      err => console.error(err),
      () => console.log("Surveys loaded.")
    );
  }

}
