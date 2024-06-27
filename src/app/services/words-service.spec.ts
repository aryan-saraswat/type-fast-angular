import { TestBed } from '@angular/core/testing';

import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { WordsService } from './words-service';

describe('WordsServiceService', () => {
  let service: WordsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordsService, provideHttpClientTesting()],
    });
    service = TestBed.inject(WordsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get words from API', () => {
    //TODO finish tests
    const mockedWords = ['a', 'b', 'c', 'd', 'e'];
    service.getWords().subscribe((words) => {
      expect(words).toEqual(mockedWords);
    });

    const req = httpMock.expectOne(`${service.api}/get-words`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ numberOfWords: service.numberOfWords });
    req.flush(mockedWords);
  });
});
