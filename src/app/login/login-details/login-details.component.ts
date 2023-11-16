import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.scss']
})
export class LoginDetailsComponent implements OnInit{

  constructor(){

  }
  ngOnInit(): void {
    console.log("this is the value for login details ")
  }

}
