import { EmployeeModel } from '../modles/employee-model';
import { Observable } from 'rxjs';

export interface Iempcurd {

    GetAllEmployess():Observable<any>;
    GetEmployeebyid(empid:number):Observable<any>
    PostEmp(obj:EmployeeModel):Observable<any>
}
