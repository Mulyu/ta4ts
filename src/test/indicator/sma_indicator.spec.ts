import { SMAIndicator } from '../..';

describe('sma indicator', () => {
  test('with sample', () => {
    const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const indicator = new SMAIndicator(sample, 2);
    expect(indicator.getValue(0)).toEqual(1);
    expect(indicator.getValue(1)).toEqual(1.5);
    expect(indicator.getValue(2)).toEqual(2.5);
    expect(indicator.getValue(3)).toEqual(3.5);
    expect(indicator.getValue(4)).toEqual(4.5);
    expect(indicator.getValue(5)).toEqual(5.5);
    expect(indicator.getValue(6)).toEqual(6.5);
    expect(indicator.getValue(7)).toEqual(7.5);
    expect(indicator.getValue(8)).toEqual(8.5);
    expect(indicator.getValue(9)).toEqual(9.5);
  });
});
