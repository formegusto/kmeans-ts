import { KMeans } from "./models";
import path from "path";
import fs from "fs";
import { setPrototype } from "./prototype";

setPrototype();

const K = 4;
const kmeans = new KMeans(K);

const filename = "dataset-1701756794497.json";
const filepath = path.join(__dirname, "..", "datas");
const dataset = JSON.parse(
  fs.readFileSync(`${filepath}/${filename}`, { encoding: "utf-8" })
);
kmeans.fit(dataset);

console.log(kmeans.labels);
console.log(kmeans.centroids);
