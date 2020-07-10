import { Indicator } from '../indicator';

export class LossIndicator implements Indicator<number> {
  chart: number[];
  constructor(chart: number[]) {
    this.chart = chart;
  }

  getValue(index: number): number {
    if (index === 0) {
      return 0;
    } else if (this.chart[index] < this.chart[index - 1]) {
      return this.chart[index - 1] - this.chart[index - 1];
    } else {
      return 0;
    }
  }
}
