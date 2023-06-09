import { isOdd } from './is-odd';

describe('isOdd', () => {
  it('return true when odd', () => {
    expect(isOdd(3)).toBe(true);
  });

  it('return false when even', () => {
    expect(isOdd(2)).toBe(false);
  });
});
