import { KMeans, KMeansIterable } from "./models";
import path from "path";
import fs from "fs";
import { setPrototype } from "./prototype";

setPrototype();

const K = 3;

const filename = "dataset-1701756794497.json";
const filepath = path.join(__dirname, "..", "datas");
const dataset = JSON.parse(
  fs.readFileSync(`${filepath}/${filename}`, { encoding: "utf-8" })
);

const kmeans = new KMeans(K);
// console.log(kmeans.fit(dataset));
console.log(JSON.stringify(kmeans.steps(dataset)));
