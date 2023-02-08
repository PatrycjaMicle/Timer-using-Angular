import {Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent {

  @Input() gameTimeEven:number;
  @Input() gameTimeEvenArr:number[];

  constructor() {
    this.gameTimeEven = 0;
    this.gameTimeEvenArr=[];
  }

}
