import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <input [(ngModel)]="name" type="text"/> <br/>
    <input type="button" value="send" (click)="display()"/> <br/>
    {{name}}
    {{val}}
  `,
  styles: [
  ]
})
export class FormComponent implements OnInit, Sample {
public name="";
public val="";

  constructor() { }
  display2(): string {
    return "hello";
  }

  ngOnInit(): void {
  }
display() {
  this.name="sharanya";
  this.val=this.display2();
}
}


export declare interface Sample{
  display2(): string;
}
