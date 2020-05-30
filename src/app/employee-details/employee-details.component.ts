import { Component, OnInit } from '@angular/core';
import { EmpcurdServiceService } from 'src/app/Services/empcurd-service.service'

import { observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  doughnutChartLabels: Label[] = ['internalUsers', 'ExternalUsers', 'Both'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';
  Data: any= [

    {
      'EmpName': 'Rajesh',
      'Salary': 10000,
      'Age': 30
    },
    {
      'EmpName': 'Rajesh2',
      'Salary': 10000,
      'Age': 30
    },
    {
      'EmpName': 'Rajesh3',
      'Salary': 10000,
      'Age': 30
    },
  ]
  constructor(private service: EmpcurdServiceService) { }

  ngOnInit(): void {

   
  }

}
