import { Component } from '@angular/core';
import { GameAreaComponent } from '../game-area/game-area.component';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [GameAreaComponent],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss',
})
export class GamePageComponent {}
