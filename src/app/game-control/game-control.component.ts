import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  time:number;
  intervalId: any;

  @Output() currentTime = new EventEmitter<number>();
  @Output() seconds=new EventEmitter<number[]>();
  secondsArray:number[];

  constructor(){
    this.time=0;
    this.secondsArray=[];
  }

  updateTime() {
    this.time++;
    this.currentTime.emit(this.time);
    this.secondsArray.push(this.time);
    this.seconds.emit(this.secondsArray);
  }

  startTimer(event:any){
    this.intervalId=setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  clearTimer(event:any) {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    console.log('STOP')
  }
}
