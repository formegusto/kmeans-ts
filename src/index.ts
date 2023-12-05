import { KMeans } from "./models";
import { generateRandomDataSet } from "./utils";

const kmeans = new KMeans(10);
console.log(kmeans);

console.log(
  generateRandomDataSet({
    shape: [100, 2],
  })
);
