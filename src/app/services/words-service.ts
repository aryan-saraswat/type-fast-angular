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
  numberOfWords: number = 5;
  constructor(private httpClient: HttpClient) {}

  getWords(): Observable<string[]> {
    return this.httpClient.post(`${this.api}/get-words`, {
      numberOfWords: this.numberOfWords,
    }) as Observable<string[]>;
  }
}
