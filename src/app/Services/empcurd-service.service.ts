import { Injectable } from '@angular/core';
import { observable, pipe, Observable } from 'rxjs'
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iempcurd } from 'src/app/Interfaces/iempcurd'
import { EmployeeModel } from 'src/app/modles/employee-model'


@Injectable({
  providedIn: 'root'
})
export class EmpcurdServiceService implements Iempcurd {
  urlprefix = 'http://localhost:1596/api'
  formData: EmployeeModel
  constructor(private http: HttpClient) { }
  GetAllEmployess(): Observable<any> {

    return this.http.get<any>(this.urlprefix + '/Employee/GetallEmployees', { headers: { 'Content-Type': 'application/json' } });
  }
  GetEmployeebyid(id: number): Observable<any> {
    return this.http.get<any>(this.urlprefix + '/Employee/Getbyid', { headers: { 'Content-Type': 'application/json' } })
  }
  PostEmp(obj: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<any>(this.urlprefix + '/Employee/SaveEmp', obj, { headers: { 'Content-Type': 'application/json' } });

  }



}
