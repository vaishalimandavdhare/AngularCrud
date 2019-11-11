import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.model';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees : Employee[] = [
    {
      id : 1,
      name : 'vaishali',
      gender :'female',
      email : 'vmandavdhare@gmail.com',
      phoneNumber : 7123456789,
      contactPreference : 'Email',
      dateOfBirth : new Date ('10/25/2019'),
      department : 'IT',
      isActive : true,
      photoPath : 'assets/images/2.png'
    },
    {
      id : 2,
      name : 'vaishali',
      gender :'female',
      email : 'vmandavdhare@gmail.com',
      phoneNumber : 7123456789,
      contactPreference : 'Email',
      dateOfBirth : new Date ('10/25/2019'),
      department : 'IT',
      isActive : true,
      photoPath : 'assets/images/2.png'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
