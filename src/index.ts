class RangeIterator implements Iterator<number | undefined> {
  index!: number;
  end!: number;
  incVal!: number;

  constructor(range: RangeIterable) {
    Object.assign(this, range);
  }

  next(): IteratorResult<number | undefined> {
    const value = this.index;
    this.index += this.incVal;
    const done = this.index > this.end;
    return { value: done ? undefined : value, done };
  }
}

class RangeIterable implements IRange, Iterable<number | undefined> {
  index: number;
  end: number;
  incVal: number;

  constructor(startOrEnd: number, end: number, incVal: number) {
    this.index = end ? startOrEnd : 0;
    this.end = end ? end : startOrEnd;
    this.incVal = incVal ? incVal : 1;
  }

  [Symbol.iterator]() {
    return new RangeIterator(this);
  }
}

const range = new RangeIterable(10, 100, 10);
for (let r of range) {
  console.log(r); // for-of : 10 ,,, 90
}
console.log(...range); // spread syntax : 10 ,,, 90
const [r1, r2, r3] = range;
console.log(r1, r2, r3); // destructuring assignment : 10 20 30
