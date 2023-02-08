import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gameTime: number=0;
  gameTimeArr:number[]=[];


  receiveGameTime($event:number) {
    this.gameTime = $event;
    this.gameTimeArr=[];
  }

  receiveGameTimeArr($event:number[]) {
    this.gameTimeArr = $event;
    console.log(this.gameTimeArr)
  }
}
