import { HashLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Sample} from '../form/form.component';

@Component({
  selector: 'app-structual',
  template: `
 <!-- <p *ngIf ="value else msg"> your name is: {{name}} </p>
 <ng-template #msg>
 your name is not correct
 </ng-template>  -->
 <div [ngSwitch]="value">
 <div *ngSwitchCase="'one'">your choose one  </div>
 <div *ngSwitchCase="'two'">your choose two </div>
 <div *ngSwitchCase="'three'">your choose three  </div>
 <div *ngSwitchCase="'four'">your choose four  </div>
 
 
 </div>
 <select class="form-control">  
                <option disabled>Select Website</option>  
                <option>Choose Website</option>  
                <option *ngFor="let s of mySentences"   [value]="s.id">{{s.text}}</option>  
  </select>  
 ` ,
  styles: [ ]
})
export class StructualComponent implements OnInit,Sample {
// public name="softcore";
// public value=true;
public value="four";
public mySentences:Array<any> = [
  {id: 1, text: 'Sentence 1'},
  {id: 2, text: 'Sentence 2'},
  {id: 3, text: 'Sentence 3'},
  {id: 4, text: 'Sentenc4 '},
];
  constructor() { }
  display2(): string {
   // throw new Error('Method not implemented.');
    return "hello";
  }

  ngOnInit(): void {
  }

}
