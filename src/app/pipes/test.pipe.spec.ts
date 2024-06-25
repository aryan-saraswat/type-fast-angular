import { TestPipe } from './test.pipe';

describe('TestpipePipe', () => {
  it('create an instance', () => {
    const pipe = new TestPipe();
    expect(pipe).toBeTruthy();
  });
});
