//@Reabaln
//Service that communicate with API Gateway and fetch from /add new record to database
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';





import { Student } from '../model/student';

const API_URL:string = 'AWS API Gateway URL';

@Injectable()
export class StudentServiceService {

  constructor(private http: HttpClient) { }

  saveSurvey(student: Student) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL, student, options);
  }


    listAll() {
    return this.http.get(API_URL).map((students: Array<any>)=>{
      let studentMap:Student[] = [];
      students && students.forEach((student)=>{
        studentMap.push({
          firstName: student['student_firstName'],
          lastName: student['student_lastName'],
          streetAddress: student['student_streetAddress'],
          city: student['student_city'],
          state: student['student_state'],
          zip: student['student_zip'],
          phoneNumber: student['student_phonNumber'],
          email: student['student_email'],
          surveyDate: student['student_surveyDate'],
          interest: student['student_interest'],
          isStudent: student['student_checkbox1'],
          isLocation: student['student_checkbox2'],
          isCampus: student['student_checkbox3'],
          isAtmosphere: student['student_checkbox4'],
          isDorm: student['student_checkbox5'],
          isRoom: student['student_checkbox6'],
          isSport: student['student_checkbox7'],
          likelihood: student['student_likelihood']
       
        });
      });
      return studentMap;
    });
  }

}
