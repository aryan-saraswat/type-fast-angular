import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  constructor(private scoreService: ScoreService) {}
  totalAttempts: number = this.scoreService.totalAttempts$.value;
  correctAttempts: number = this.scoreService.correctAttempts$.value;
  accuracy: string =
    this.totalAttempts > 0
      ? `${(this.correctAttempts / this.totalAttempts) * 100}%`
      : 'no words attempted';
  data: any = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        data: [300, 50, 100, 40],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40'],
      },
    ],
  };

  options: any = {};
}
