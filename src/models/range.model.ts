export abstract class RangeItem {
  protected index!: number;
  protected end!: number;
  protected incVal!: number;
}

export class RangeIterator extends RangeItem implements IRangeIterator {
  constructor(range: RangeIterable) {
    super();
    Object.assign(this, range);
  }
  next(): IteratorResult<number | undefined> {
    const value = this.index;
    this.index += this.incVal;
    const done = this.index > this.end;
    return { value: done ? undefined : value, done };
  }
}

export class RangeIterable extends RangeItem implements IRangeIterable {
  constructor(startOrEnd: number, end: number, incVal: number) {
    super();
    this.index = end ? startOrEnd : 0;
    this.end = end ? end : startOrEnd;
    this.incVal = incVal ? incVal : 1;
  }
  [Symbol.iterator](): Iterator<number | undefined, any, undefined> {
    return new RangeIterator(this);
  }
}
