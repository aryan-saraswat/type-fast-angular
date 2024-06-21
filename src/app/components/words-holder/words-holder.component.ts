import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { Observable, map, shareReplay, tap } from 'rxjs';
import { WordEntry } from '../../common/word-entry';
import { ScoreService } from '../../services/score.service';
import { TimekeeperService } from '../../services/timekeeper.service';
import { WordsService } from '../../services/words-service';
import { ScoreboardComponent } from '../scoreboard/scoreboard.component';

@Component({
  selector: 'app-words-holder',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    ReactiveFormsModule,
    NgClass,
    CardModule,
    SplitterModule,
    ScoreboardComponent,
  ],
  templateUrl: './words-holder.component.html',
  styleUrl: './words-holder.component.scss',
})
export class WordsHolderComponent implements OnInit, OnDestroy {
  enteredWordControl = new FormControl('');
  words$ = new Observable<WordEntry[]>();
  totalAttempts: number = 0;
  correctAttempts: number = 0;
  elapsedTime: number = 0;

  constructor(
    private wordsService: WordsService,
    private scoreService: ScoreService,
    private timekeeper: TimekeeperService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchNewWords();
    this.scoreService.totalAttempts$.subscribe(
      (value) => (this.totalAttempts = value)
    );
    this.scoreService.correctAttempts$.subscribe(
      (value) => (this.correctAttempts = value)
    );
  }

  fetchNewWords() {
    this.words$ = this.wordsService.getWords().pipe(
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

    this.wordsService.indexToCheck = 0;
  }

  checkEnteredText(enteredText: string | null, wordToCheck: WordEntry) {
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
        this.scoreService.correctAttempts$.next(this.correctAttempts + 1);
        this.wordsService.indexToCheck += 1;
        if (this.wordsService.indexToCheck >= this.wordsService.numberOfWords) {
          this.fetchNewWords();
        }
      } else {
        this.wordsService.currentWords[this.wordsService.indexToCheck] = {
          ...this.wordsService.currentWords[this.wordsService.indexToCheck],
          guessed: true,
          guessedCorrectly: false,
        };
      }
      this.scoreService.totalAttempts$.next(this.totalAttempts + 1);
      this.enteredWordControl.setValue('');
    }
  }

  onTextChange() {
    let enteredText = this.enteredWordControl.value;
    let wordToCheck =
      this.wordsService.currentWords[this.wordsService.indexToCheck];
    this.checkEnteredText(enteredText, wordToCheck);
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
    this.scoreService.totalAttempts$.unsubscribe;
    this.scoreService.correctAttempts$.unsubscribe;
  }
}
