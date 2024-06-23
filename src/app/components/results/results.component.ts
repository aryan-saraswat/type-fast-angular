import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [NgIf],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  constructor(private scoreService: ScoreService) {}
  totalAttempts: number = this.scoreService.totalAttempts$.value;
  correctAttempts: number = this.scoreService.correctAttempts$.value;
  accuracy: string =
    this.totalAttempts > 0
      ? `${((this.correctAttempts / this.totalAttempts) * 100).toFixed(2)}%`
      : 'no words attempted';

  options: any = {};
}
