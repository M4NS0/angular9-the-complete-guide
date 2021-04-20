import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer;
  @Output() timerStart = new EventEmitter<number>(); // event can be emited outside of component
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.timer = setInterval(() => {
      this.timerStart.emit(this.lastNumber + 1);
      this.lastNumber ++;
    },1000)
  }

  onPause() {
    clearInterval(this.timer);
  }
}
