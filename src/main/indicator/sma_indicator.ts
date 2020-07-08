import { Indicator } from '../indicator';

export class SMAIndicator implements Indicator<number> {
  chart: number[];
  count: number;

  constructor(chart: number[], count: number) {
    this.chart = chart;
    this.count = count;
  }

  getValue(index: number): number {
    let acc = 0;
    for (let i = Math.max(0, index - this.count + 1); i <= index; i++) {
      acc = acc + this.chart[i];
    }

    const realcount = Math.min(this.count, index + 1);
    return acc / realcount;
  }
}
