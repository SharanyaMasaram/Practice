import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
message="";

  constructor() { }

  ngOnInit(): void {
  }
display(a:any) {
  //console.log("button is clicked...");
  this.message="your enter value is: " +a;

}
}
