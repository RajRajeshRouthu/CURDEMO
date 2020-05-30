import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpnewComponent } from './empnew.component';

describe('EmpnewComponent', () => {
  let component: EmpnewComponent;
  let fixture: ComponentFixture<EmpnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
