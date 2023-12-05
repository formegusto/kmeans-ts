import Errors from "../errors";
import { euclideanDistance } from "../utils";

export class KMeans implements IKMeans {
  centroids?: number[][];
  distances?: number[][];

  constructor(public K: number) {}

  setInitCentroids(dataset: number[][]) {
    // 1.1 첫 번째 중심점 무작위 선정
    const centroids = [];
    const ranIdx = Math.floor(Math.random() * dataset.length);
    const firstCentroid = dataset[ranIdx];
    centroids.push(firstCentroid);

    for (let k = 1; k < this.K; k++) {
      const distances = [];
      for (let data of dataset) {
        let minDistance = Number.MAX_SAFE_INTEGER;
        // 1.2 선정된 중심점과 데이터 간의 거리 계산
        for (let centroid of centroids) {
          const distance = euclideanDistance(data, centroid);
          minDistance = Math.min(distance, minDistance);
        }
        distances.push(minDistance);
      }
      // 1.3 최소 중심점 거리 중에서 최대 거리를 갖는 점을 다음 중심으로 선정
      const maxDistance = Math.max.apply(null, distances);
      const maxIdx = distances.indexOf(maxDistance);
      const nextCentroid = dataset[maxIdx];
      centroids.push(nextCentroid);
      // 1.4 설정된 K개 만큼의 중심점이 샘플링될 때 까지 1.2단계와 1.3단계 반복
    }
    this.centroids = centroids;
  }

  calcDistances(dataset: number[][]) {
    if (!this.centroids) throw Errors["NotSettingInitCentroids"];
    const distances = [];
    for (let data of dataset) {
      const _distances = [];
      for (let centroid of this.centroids) {
        const distance = euclideanDistance(data, centroid);
        _distances.push(distance);
      }
      distances.push(_distances);
    }
    this.distances = distances;
  }
}
