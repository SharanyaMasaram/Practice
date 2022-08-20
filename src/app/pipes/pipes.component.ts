import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <h2> {{ name | uppercase }} </h2>
    <h2> {{ name | lowercase }} </h2>
    <h2> {{ name | slice:3:6 }} </h2>
    <h2> {{ 5.675 | number:'1.1-2' }} </h2>
    <h2> {{ 5.675 | number:'2.4-5' }} </h2>
    <h2> {{ 5.675 | number:'3.1-2' }} </h2>

  `,
  styles: [
  ]
})
export class PipesComponent implements OnInit {
public name="This is India";
  constructor() { }

  ngOnInit(): void {
  }

}
