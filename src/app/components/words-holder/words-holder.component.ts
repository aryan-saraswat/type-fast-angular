import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { WordEntry } from '../../common/word-entry';
import { WordsService } from '../../services/words-service';

@Component({
  selector: 'app-words-holder',
  standalone: true,
  imports: [AsyncPipe, NgFor, ReactiveFormsModule, NgClass],
  templateUrl: './words-holder.component.html',
  styleUrl: './words-holder.component.scss',
})
export class WordsHolderComponent implements OnInit {
  enteredWordControl = new FormControl('');
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

  onTextChange() {}
}
