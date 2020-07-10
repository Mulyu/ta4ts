import { SMAIndicator, EMAIndicator } from 'ta4ts';

const closePriceChart = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const periodCount = 3;

// 3 period sma
const smaIndicator = new SMAIndicator(closePriceChart, periodCount);
// 3 period ema
const emaIndicator = new EMAIndicator(closePriceChart, periodCount);
