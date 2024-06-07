import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  api = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {}

  getWords(numberOfWords: Number): Observable<String[]> {
    return this.httpClient.post(`${this.api}/hello`, {
      numberOfWords: numberOfWords,
    }) as Observable<String[]>;
  }
}
