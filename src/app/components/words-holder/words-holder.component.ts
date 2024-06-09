import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, shareReplay, tap } from 'rxjs';
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
      tap((words: string[]) => console.log('working with ', words)),
      map((words: string[]) =>
        words.map((word: string) => ({
          guessed: false,
          guessedCorrectly: false,
          word: word,
        }))
      ),
      shareReplay()
    );

    this.words$.subscribe((wordEntries) => {
      this.wordsService.currentWords = wordEntries;
    });
  }

  onTextChange() {
    let enteredText = this.enteredWordControl.value;
    let wordToCheck =
      this.wordsService.currentWords[this.wordsService.indexToCheck];
    if (enteredText?.endsWith(' ')) {
      if (
        enteredText.trim().toLowerCase() ===
        wordToCheck.word.trim().toLowerCase()
      ) {
        this.wordsService.currentWords[this.wordsService.indexToCheck] = {
          ...this.wordsService.currentWords[this.wordsService.indexToCheck],
          guessed: true,
          guessedCorrectly: true,
        };
        this.enteredWordControl.setValue('');
        this.wordsService.indexToCheck += 1;
      } else {
        this.wordsService.currentWords[this.wordsService.indexToCheck] = {
          ...this.wordsService.currentWords[this.wordsService.indexToCheck],
          guessed: true,
          guessedCorrectly: false,
        };
      }
    }
  }
}
