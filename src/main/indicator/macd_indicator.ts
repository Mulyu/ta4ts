import { Indicator } from '../indicator';
import { EMAIndicator } from './ema_indicator';

export class MACDIndicator implements Indicator<number> {
  chart: number[];
  shortEma: EMAIndicator;
  longEma: EMAIndicator;

  constructor(chart: number[], shortCount: number = 12, longClount: number = 26) {
    this.chart = chart;
    this.shortEma = new EMAIndicator(chart, shortCount);
    this.longEma = new EMAIndicator(chart, longClount);
  }

  getValue(index: number): number {
    return this.shortEma.getValue(index) - this.longEma.getValue(index);
  }
}
