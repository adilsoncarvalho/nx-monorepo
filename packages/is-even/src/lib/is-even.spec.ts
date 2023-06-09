import { isEven } from './is-even';

describe('isEven', () => {
  it('return true for even', () => {
    expect(isEven(2)).toBe(true);
  });

  it('return false for odd', () => {
    expect(isEven(3)).toBe(false);
  });
});
