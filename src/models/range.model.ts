export abstract class RangeItem {
  protected index!: number;
  protected end!: number;
  protected step!: number;
}

export class RangeIterator extends RangeItem implements IRangeIterator {
  constructor(params: RangeIterable) {
    super();
    Object.assign(this, params);
  }
  next(): IteratorResult<IRangeIteratorResultValue> {
    const value = this.index;
    const done = value >= this.end;
    this.index += this.step;
    return { value: done ? undefined : value, done };
  }
}

export class RangeIterable extends RangeItem implements IRangeIterable {
  constructor(startOrEnd: number, end: number, step: number = 1) {
    super();
    this.index = end ? startOrEnd : 0;
    this.end = end ? end : startOrEnd;
    this.step = step;
  }
  [Symbol.iterator](): Iterator<IRangeIteratorResultValue, any, undefined> {
    return new RangeIterator(this);
  }
}
