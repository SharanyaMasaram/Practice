import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intaraction',
  template: `
    {{FormParent}}
  `,
  styles: [
  ]
})
export class IntaractionComponent implements OnInit {
  @Input() public FormParent:any;
  constructor() { }

  ngOnInit(): void {
  }

}
