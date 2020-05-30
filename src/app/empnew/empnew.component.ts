import { Component, OnInit } from '@angular/core';
import { EmpcurdServiceService } from 'src/app/Services/empcurd-service.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empnew',
  templateUrl: './empnew.component.html',
  styleUrls: ['./empnew.component.scss']
})
export class EmpnewComponent implements OnInit {

  constructor(public service: EmpcurdServiceService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)

      form.resetForm();
     this.service.formData = {
      Age: 0,
      EmployeeID: 0,
      Salary: 0,
      EmployeeName: null

    }


  }

  onsubmit(form:NgForm)
  {
this.insertRecord(form);
  }
insertRecord(form:NgForm)
{
this.service.PostEmp(form.value).subscribe(res=>
  {

    this.resetForm();
  })
}

}
