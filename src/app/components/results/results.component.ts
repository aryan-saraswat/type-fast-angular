import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [ChartModule, NgIf],
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
  data: any = {
    labels: ['Correct attempts', 'Wrong attempts'],
    datasets: [
      {
        data: [this.correctAttempts, this.totalAttempts - this.correctAttempts],
        backgroundColor: ['green', 'red'],
        hoverBackgroundColor: ['#9cffae', '#ff6e63'],
      },
    ],
  };

  options: any = {};
}
