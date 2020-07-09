import { EMAIndicator } from '../..';

describe('ema indicator', () => {
  test('with sample', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const indicator = new EMAIndicator(data, 2, 1);

    expect(indicator.getValue(0)).toEqual(1);
    expect(indicator.getValue(1)).toEqual(2);
    expect(indicator.getValue(2)).toEqual(3);
  });
});
