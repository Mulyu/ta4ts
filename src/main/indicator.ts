export interface Indicator<T> {
  /**
   * @param index the ohlcv index
   * @return the value of the indicator
   */
  getValue(index: number): T;
}
