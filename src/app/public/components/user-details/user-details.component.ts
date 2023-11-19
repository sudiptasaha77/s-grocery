import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  userDetails: any;
  userPassword: any;
  userName: any;
  userRole: any;
  userRoleIdentificationAdmin: any;
  userRoleIdentificationUser: any;
  constructor() {}
  ngOnInit() {
    this.userDetails = localStorage.getItem('session');
    this.userName = JSON.parse(this.userDetails).username;
    this.userPassword = JSON.parse(this.userDetails).password;
    this.userRole = JSON.parse(this.userDetails).role;
    if (this.userRole === 'admin') {
      this.userRoleIdentificationAdmin = true;
    } else {
      this.userRoleIdentificationUser = true;
    }
  }
}
