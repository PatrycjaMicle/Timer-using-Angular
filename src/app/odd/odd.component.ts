import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {

  @Input() gameTimeOdd:number;
  @Input() gameTimeOddArr:number[];

  constructor() {
    this.gameTimeOdd=0;
    this.gameTimeOddArr=[];
  }
}
