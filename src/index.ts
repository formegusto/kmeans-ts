import { RangeIterable } from "./models";

const range = new RangeIterable(10, 100, 10);
for (let r of range) {
  console.log(r); // for-of : 10 ,,, 90
}
console.log(...range); // spread syntax : 10 ,,, 90
const [r1, r2, r3] = range;
console.log(r1, r2, r3); // destructuring assignment : 10 20 30
