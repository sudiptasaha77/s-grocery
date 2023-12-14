import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-error',
  templateUrl: './external-error.component.html',
  styleUrls: ['./external-error.component.scss']
})
export class ExternalErrorComponent implements OnInit {
  errorMessage: string = "500 SERVER ERROR, CONTACT ADMINISTRATOR!!!!";
  
  constructor() { }
  ngOnInit(): void {
  }
}
