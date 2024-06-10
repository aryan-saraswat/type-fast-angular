import { Component } from '@angular/core';
import { WordsHolderComponent } from '../words-holder/words-holder.component';

@Component({
  selector: 'app-game-area',
  standalone: true,
  imports: [WordsHolderComponent],
  templateUrl: './game-area.component.html',
  styleUrl: './game-area.component.scss',
})
export class GameAreaComponent {}
