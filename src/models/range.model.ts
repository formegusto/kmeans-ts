export abstract class RangeSettingValue {
  protected index!: number;
  protected end!: number;
  protected step!: number;
}

export class RangeIterator
  extends RangeSettingValue
  implements IRangeIterator, IRangeIterable
{
  constructor(params: RangeIterable) {
    super();
    Object.assign(this, params);
  }
  next(): IteratorResult<number> {
    const value = this.index;
    const done = value >= this.end;
    this.index += this.step;
    return done ? { value: undefined, done } : { value, done };
  }
  [Symbol.iterator](): IRangeIterator {
    return this;
  }
}

export class RangeIterable extends RangeSettingValue implements IRangeIterable {
  constructor(startOrEnd: number, end: number, step: number = 1) {
    super();
    this.index = end ? startOrEnd : 0;
    this.end = end ? end : startOrEnd;
    this.step = step;
  }
  [Symbol.iterator](): IRangeIterator {
    return new RangeIterator(this);
  }
}
