import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-error',
  templateUrl: './internal-error.component.html',
  styleUrls: ['./internal-error.component.scss']
})
export class InternalErrorComponent implements OnInit {
  notFoundText: string = `404 SORRY COULDN'T FIND IT!!!`;

  constructor() { }

  ngOnInit(): void {
  }

}
