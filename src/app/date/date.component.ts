import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  visibility: boolean = true;
  toggle() {
    this.visibility = !this.visibility;
  }
  
  constructor() { 
   
  }

  
  ngOnInit() {
  }

}
