import { KMeans } from "./models";
import path from "path";
import fs from "fs";

const K = 4;
const kmeans = new KMeans(K);

const filename = "dataset-1701756794497.json";
const filepath = path.join(__dirname, "..", "datas");
const X = JSON.parse(
  fs.readFileSync(`${filepath}/${filename}`, { encoding: "utf-8" })
);

const centroids = [];
const ranIdx = Math.floor(Math.random() * X.length);
const firstCentroids = X[ranIdx];
centroids.push(firstCentroids);

console.log(ranIdx, firstCentroids, centroids);
