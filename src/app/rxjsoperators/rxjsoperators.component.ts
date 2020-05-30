import { Component, OnInit } from '@angular/core';
import{of, fromEvent, Observable} from 'rxjs';
import{from} from 'rxjs';
import{skipWhile, tap,filter,map} from 'rxjs/operators'

@Component({
  selector: 'app-rxjsoperators',
  templateUrl: './rxjsoperators.component.html',
  styleUrls: ['./rxjsoperators.component.scss']
})
export class RxjsoperatorsComponent implements OnInit {

  obj:any
 object=[
  {id:1,Name:'Rajesh' },
  {id:2,Name:'Mahesh'},
  {id:3,Name:'balaji'},
  {id:4,Name:'ramu'},
  {id:5,Name:'Ramesh'}
  
]
object2=[
  {id:1,Name:'hyd' },
  {id:2,Name:'vijayavada'},
  {id:3,Name:'elruru'},
  {id:4,Name:'amalapura'},
  {id:5,Name:'rajamundry'}
  
]

  constructor() { }

  ngOnInit(): void {
    
    from(this.object).pipe(
      tap(x=>x.Name="tap"+x.Name),
      tap(x=>x.id=2+x.id),
      map(x=>x.id=2+x.id)).subscribe(z=>console.log(z));


    
  }
  




}
