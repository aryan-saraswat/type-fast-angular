import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from '../../services/score.service';
import { TimekeeperService } from '../../services/timekeeper.service';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss',
})
export class ScoreboardComponent implements OnInit, OnDestroy {
  totalAttempts: number = 0;
  correctAttempts: number = 0;
  elapsedTime: number = 0;

  constructor(
    private scoreService: ScoreService,
    private timekeeper: TimekeeperService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.timekeeper.currentTime$.subscribe((value) => {
      this.elapsedTime = value;
      if (this.elapsedTime === 60) {
        this.finishGame();
      }
    });
    this.scoreService.totalAttempts$.subscribe(
      (value) => (this.totalAttempts = value)
    );
    this.scoreService.correctAttempts$.subscribe(
      (value) => (this.correctAttempts = value)
    );
  }

  startGame() {
    this.timekeeper.startTimer();
  }

  pauseGame() {
    this.timekeeper.pauseTimer();
  }

  finishGame() {
    this.router.navigate(['results']);
  }

  ngOnDestroy(): void {
    this.timekeeper.currentTime$.unsubscribe;
    this.scoreService.totalAttempts$.unsubscribe;
    this.scoreService.correctAttempts$.unsubscribe;
  }
}
