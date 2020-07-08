import { Indicator } from '../indicator';

export class EMAIndicator implements Indicator<number> {
  chart: number[];
  count: number;
  multiplier: number;

  constructor(chart: number[], count: number, multiplier?: number) {
    this.chart = chart;
    this.count = count;
    this.multiplier = multiplier ? multiplier : 2.0 / (count + 1);
  }

  getValue(index: number): number {
    if (index == 0) {
      return this.chart[0];
    } else {
      const prev = this.getValue(index - 1);
      return (this.chart[index] - prev) * this.multiplier + prev;
    }
  }
}
