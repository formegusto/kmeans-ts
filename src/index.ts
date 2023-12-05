import { KMeans } from "./models";
import path from "path";
import fs from "fs";
import { euclideanDistance } from "./utils/similarity.util";

const K = 4;
const kmeans = new KMeans(K);

const filename = "dataset-1701756794497.json";
const filepath = path.join(__dirname, "..", "datas");
const dataset = JSON.parse(
  fs.readFileSync(`${filepath}/${filename}`, { encoding: "utf-8" })
);

const centroids = [];
const ranIdx = Math.floor(Math.random() * dataset.length);
const firstCentroid = dataset[ranIdx];
centroids.push(firstCentroid);

const distances = [];
for (let data of dataset) {
  let minDistance = Number.MAX_SAFE_INTEGER;
  for (let centroid of centroids) {
    const distance = euclideanDistance(data, centroid);
    minDistance = Math.min(distance, minDistance);
  }
  distances.push(minDistance);
}
const maxDistance = Math.max.apply(null, distances);
const maxIdx = distances.indexOf(maxDistance);
const nextCentroid = dataset[maxIdx];
centroids.push(nextCentroid);
console.log(centroids);
