import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimekeeperService {
  constructor() {}
  currentTime$ = new BehaviorSubject<number>(0);
  interval: NodeJS.Timeout | undefined;
  play: boolean = false;

  startTimer() {
    if (!this.play) {
      this.play = true;
      this.interval = setInterval(() => {
        this.currentTime$.next(this.currentTime$.value + 1);
      }, 1000);
    }
  }

  pauseTimer() {
    this.play = false;
    clearInterval(this.interval);
  }

  endTimer() {
    this.play = false;
    clearInterval(this.interval);
  }
}
