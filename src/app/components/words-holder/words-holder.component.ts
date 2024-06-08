import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { WordEntry } from '../../common/word-entry';
import { WordsService } from '../../services/words-service';

@Component({
  selector: 'app-words-holder',
  standalone: true,
  imports: [AsyncPipe, NgFor],
  templateUrl: './words-holder.component.html',
  styleUrl: './words-holder.component.scss',
})
export class WordsHolderComponent implements OnInit {
  words$ = new Observable<WordEntry[]>();
  constructor(private wordsService: WordsService) {}

  ngOnInit(): void {
    this.words$ = this.wordsService.getWords(5).pipe(
      map((words: string[]) =>
        words.map((word: string) => ({
          guessed: false,
          guessedCorrectly: false,
          word: word,
        }))
      )
    ) as Observable<WordEntry[]>;
  }

  onTextChange($event: Event) {
    console.log(($event.target as HTMLInputElement).value);
  }
}
