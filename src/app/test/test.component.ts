import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <p>
  {{name}} <br/>
  {{"Name is: "+name}} <br/>
  {{"string length is: "+name.length}} <br/>
  {{"Uppercase: "+name.toUpperCase()}} <br/>
  {{username()}} 
  <br/>
  {{myurl}}
  </p>
  `,
  styles:[
    `p{
      color: red;
    }`
  ]    })
    
export class TestComponent implements OnInit {
  public name= "Sharanya MTECH"
  public myurl= window.location.href;
  

  constructor() { }

  ngOnInit(): void {
  }
  username() {
    return "username: " +this.name;
  }

} 
