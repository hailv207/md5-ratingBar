import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  remainingSeconds = 0;
  interval = 0;
  message = '';

  @Input()
  seconds = 10;

  countDown() {
    this.interval = window.setInterval(() => {
      this.remainingSeconds--;
      if (this.remainingSeconds === 0) {
        this.message = 'Done';
        window.clearInterval(this.interval);
      }
    },1000);
  }

  setSeconds(seconds : number){
    if (seconds >= 0){
      this.seconds = seconds;
    }else {
      this.seconds = 10;
    }
  }

  start() {
    this.stop();
    this.countDown();
    if (this.remainingSeconds <= 0){
      this.remainingSeconds = this.seconds;
    }
  }

  reset(){
    this.stop();
    this.remainingSeconds = this.seconds;
  }

  stop(){
    window.clearInterval(this.interval);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
