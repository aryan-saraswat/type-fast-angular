import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  constructor() {}
  totalAttempts$ = new BehaviorSubject<number>(0);
  correctAttempts$ = new BehaviorSubject<number>(0);
}
