import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmpnewComponent } from './empnew/empnew.component';
import { EmpeidtComponent } from './empeidt/empeidt.component';
import { HttpClientModule } from '@angular/common/http'
import { EmpcurdServiceService } from './Services/empcurd-service.service';
import { FormsModule } from '@angular/forms';
import { RxjsoperatorsComponent } from './rxjsoperators/rxjsoperators.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmpnewComponent,
    EmpeidtComponent,
    RxjsoperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpcurdServiceService],
  bootstrap: [AppComponent]
})
export class    AppModule { }
