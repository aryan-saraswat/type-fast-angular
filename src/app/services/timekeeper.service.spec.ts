import { TestBed } from '@angular/core/testing';

import { TimekeeperService } from './timekeeper.service';

describe('TimekeeperService', () => {
  let service: TimekeeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimekeeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start the timer', (done) => {
    service.startTimer();
    expect(service.play).toBeTrue();

    setTimeout(() => {
      expect(service.currentTime$.value).toBeLessThan(60);
      service.endTimer();
      done();
    }, 2000);
  });

  it('should end the timer and stop changing the value of the time', (done) => {
    service.startTimer();

    setTimeout(() => {
      service.endTimer();
      expect(service.play).toBeFalse();
      expect(service.currentTime$.value).toEqual(58);
    }, 2000);

    setTimeout(() => {
      expect(service.currentTime$.value).toEqual(58);
      done();
    }, 2000);
  });
});
