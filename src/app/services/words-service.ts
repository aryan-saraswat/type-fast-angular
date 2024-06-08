import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WordEntry } from '../common/word-entry';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  api = 'http://localhost:8080';
  currentWords: WordEntry[] = [];
  indexToCheck: number = 0;
  constructor(private httpClient: HttpClient) {}

  getWords(numberOfWords: Number): Observable<string[]> {
    return this.httpClient.post(`${this.api}/hello`, {
      numberOfWords: numberOfWords,
    }) as Observable<string[]>;
  }
}
