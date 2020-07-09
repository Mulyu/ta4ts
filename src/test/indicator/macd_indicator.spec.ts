import { MACDIndicator } from '../../main/indicator/macd_indicator';

describe('macd indicator', () => {
  test('with sample', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const indicator = new MACDIndicator(data, 2, 3);
    expect(indicator.getValue(0)).toEqual(0);
    expect(indicator.getValue(1)).toEqual(0.16666666666666652);
    expect(indicator.getValue(2)).toEqual(0.30555555555555536);
  });
});
