import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeidtComponent } from './empeidt.component';

describe('EmpeidtComponent', () => {
  let component: EmpeidtComponent;
  let fixture: ComponentFixture<EmpeidtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpeidtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeidtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
