import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordsService } from '../../services/words-service';

@Component({
  selector: 'app-words-holder',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './words-holder.component.html',
  styleUrl: './words-holder.component.scss',
})
export class WordsHolderComponent implements OnInit {
  words = new Observable<String[]>();
  constructor(private wordsService: WordsService) {}

  ngOnInit(): void {
    console.log('bruh');
    this.words = this.wordsService.getWords(5);
  }
}
