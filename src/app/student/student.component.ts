import { Interpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-student]',
   template: `
     <h2 [class]="first"> This is first heading </h2>
     <h2 [class]="second"> This is second heading </h2>
     <h2 [ngStyle]="group"> This is second heading </h2>
     <h2 [style.color]="' red'" > This is third heading </h2>
   <!-- <input type="text" value={{name}}/> <br/>
   <input type="text" [id]="name"/> -->
   `,
  styles: [ `
  .colors {
    color:red;
    border:2px pink solid;
  }
  .background-color {
    background-color:yellow;
  }
  `]
})
export class StudentComponent implements OnInit {
 //name="softcore";
 first="colors";
 second="background-color";
 group={
   color:"gold",
   fontStyle:"italic",
   fontSize:"30px"
 }
  constructor() { }

  ngOnInit(): void {
  }
 

}
