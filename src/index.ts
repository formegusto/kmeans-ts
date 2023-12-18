import { KMeans, RangeIterable } from "./models";
import path from "path";
import fs from "fs";
import { setPrototype } from "./prototype";

setPrototype();

const filename = "dataset-1701756794497.json";
const filepath = path.join(__dirname, "..", "datas");
const dataset = JSON.parse(
  fs.readFileSync(`${filepath}/${filename}`, { encoding: "utf-8" })
);

// const K = 3;
// const maxEqIter = 1;

// const kmeans = new KMeans({ K, maxEqIter });
// // console.log(kmeans.fit(dataset));
// console.log(JSON.stringify(kmeans.steps(dataset)));
const iterable = new RangeIterable(0, 10, 2);
const iterator = iterable[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next())
  console.log(result);
